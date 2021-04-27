import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCategory, selectIsDataLoaded } from '../../redux/shop/shop.selectors';

import './catalogue.styles.scss';
import { Fragment } from 'react';

const Catalogue = ({ data, isLoaded, location }) => {
    const [page, setPage] = useState(1);
    const [showMore, setShowMore] = useState(true);
    const [paginatedData, setPaginatedData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setPage(1);
        updateResults(1);
        setLoaded(false);
    }, [isLoaded, data]);


    // This function will either increase or decrease this.state.page depending on this.state.showMore
    const handleClick = () => {
        const newPage = showMore ? page + 1 : page - 1;

        updateResults(newPage);
    };

    /*
        Pagination will work as follows:
        page state will indicate how many 'pages' user is on. there are actually no pages,
        but this will act as the anchor for multiples of results shown (e.g page2 * 9 == 18 results shown)
    */
    const updateResults = newPage => {
        if (!isLoaded) return;

        const newData = data[0].items.slice(0, newPage * 9);

        // check if user has all results and update state so they can go backwards, and vice versa
        if (newData.length === data[0].items.length) {
            setShowMore(false);
        } else if (newData.length === 9 && !showMore) {
            setShowMore(true);
        }

        setPage(newPage);
        setPaginatedData(newData);
    };

    if (!isLoaded || data[0].length) return null;

    const loadingLetters = 'Loading..'.split("");

    return (
        <Fragment>
            <div className='loading-container' style={loaded ? {display: 'none'} : null}>
                <div className='loading'>
                    {
                        loadingLetters.map(letter => (
                            <div className='loading-letter'>{letter}</div>
                        ))
                    }
                </div>
            </div>
            <section className='catalogue' onLoad={() => setLoaded(true)} style={!loaded ? {display: 'none'} : null}>
                <div className='background-guides-container'>
                    <div className='background-guides'>
                        <div className='guide-one'></div>
                        <div className='guide-two'></div>
                        <div className='guide-three'></div>
                        <div className='guide-four'></div>
                    </div>
                </div>
                <h1 className='catalogue-title'>{data[0].title}</h1>
                <Directory data={paginatedData} />
                <div className='custom-button-container'>
                    <CustomButton 
                        handleClick={handleClick}
                        style={{ backgroundColor: 'var(--dark-color)', color: 'var(--background-color)' }}
                    >
                        {
                            showMore ? 'See More Results'
                            : 'Show Less Results'
                        }
                    </CustomButton>
                </div>
            </section>
        </Fragment>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isLoaded: selectIsDataLoaded(state),
    data: selectCategory(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(withRouter(Catalogue));