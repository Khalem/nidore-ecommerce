import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loading from '../../components/loading/loading.component';

import ProductBox from '../../components/product-box/product-box.component';

import { selectIsDataLoaded, selectItem } from '../../redux/shop/shop.selectors';

import './product-page.styles.scss';

const ProductPage = ({ item, isLoaded, history }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (!isLoaded) return;

        // if no item returned from id, redirect to 404
        if (!item[0] && isLoaded) {
            history.push('/404');
            return;
        };

        setActive(Object.keys(item[0].prices)[0]);
    }, [isLoaded, item]);

    const changeSize = e => {
        setActive(e.target.id);
    };

    if (!isLoaded || !item[0]) return <Loading loaded={false} />;

    const { id, name, brand, bio, imageUrl, prices } = item[0];

    return (
        <section className='product-page'>
            <h1 className='brand-title'>{brand}</h1>
            <h1 className='product-title'>{name}</h1>
            <ProductBox
                id={id}
                imageUrl={imageUrl} 
                name={name} 
                prices={prices}
                active={active}
                brand={brand}
                handleClick={changeSize}
            />
            <div className='bio-container'>
                <h2 className='bio-title'>As described by {brand}</h2>
                <p className='bio'>{bio}</p>
            </div>
        </section>
    );
};

const mapStateToProps = (state, ownProps) => ({
    isLoaded: selectIsDataLoaded(state),
    item: selectItem(ownProps.match.params.productID)(state)
});

export default connect(mapStateToProps)(withRouter(ProductPage));