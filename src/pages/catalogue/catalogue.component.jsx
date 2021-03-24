import React from 'react';
import { withRouter } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import SHOP_DATA from '../../data/shopData';

import './catalogue.styles.scss';

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathName: props.history.location.pathname,
            completeData: {},
            data: {},
            page: 1,
            loaded: false,
            showMore: true
        }
    }

    async componentDidMount() {
        await SHOP_DATA.map(data => {
            if (data.routeName === this.state.pathName) {
                this.setState({ completeData: data });
            }
        });

        await this.updateResults();
    }

    // This function will either increase or decrease this.state.page depending on this.state.showMore
    handleClick = async () => {
        const { showMore, page } = this.state;
        const newPage = showMore ? page + 1 : page - 1;

        await this.setState({ page: newPage });
        await this.updateResults();
    }

    /*
        Pagination will work as follows:
        page state will indicate how many 'pages' user is on. there are actually no pages,
        but this will act as the anchor for multiples of results shown (e.g page2 * 9 == 18 results shown)
    */
    updateResults = () => {
        const { completeData, page } = this.state;
        const newData = completeData.items.slice(0, page * 9);

        // check if user has all results and update state so they can go backwards, and vice versa
        if (newData.length === completeData.items.length) {
            this.setState({ showMore: false });
        } else if (newData.length === 9 && !this.state.showMore) {
            this.setState({ showMore: true });
        }

        this.setState({ data: newData, loaded: true });
    }

    render() {
        if (!this.state.loaded) return null;

        return (
            <section className='catalogue'>
                <div className='background-guides-container'>
                    <div className='background-guides'>
                        <div className='guide-one'></div>
                        <div className='guide-two'></div>
                        <div className='guide-three'></div>
                        <div className='guide-four'></div>
                    </div>
                </div>
                <h1 className='catalogue-title'>{this.state.completeData.title}</h1>
                <Directory data={this.state.data} />
                <div className='custom-button-container'>
                    <CustomButton 
                        handleClick={this.handleClick}
                        style={{ backgroundColor: 'var(--dark-color)', color: 'var(--background-color)' }}
                    >
                        {
                            this.state.showMore ? 'See More Results'
                            : 'Show Less Results'
                        }
                    </CustomButton>
                </div>
            </section>
        );
    }
}

export default withRouter(Catalogue);