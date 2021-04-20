import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import ProductBox from '../../components/product-box/product-box.component';

import SHOP_DATA from '../../data/shopData';

import './product-page.styles.scss';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.match.params.category,
            productID: this.props.match.params.productID,
            item: {},
            loaded: false,
            active: 0
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        const { productID, category } = this.props.match.params;

        if (this.state.productID === productID && this.state.category === category) {
            return;
        }

        this.fetchData();
    }

    // When I implement firebase I'll query using UID instead of looping through data
    fetchData = () => {
        const { productID, category } = this.props.match.params;

        SHOP_DATA.forEach(data => {
            if (data.title.toLowerCase() === category.toLowerCase()) {
                data.items.forEach(item => {
                    if (item.id === parseInt(productID)) {
                        const active = Object.keys(item.prices)[0];

                        this.setState({ item, loaded: true, active, category, productID});
                    }
                });
            }
        });
    }

    changeSize = e => {
        this.setState({ active: e.target.id });
    }

    render() {
        if (!this.state.loaded) return null;

        const { id, name, brand, bio, imageUrl, prices } = this.state.item;

        return (
            <section className='product-page'>
                <h1 className='brand-title'>{brand}</h1>
                <h1 className='product-title'>{name}</h1>
                <ProductBox
                    id={id}
                    imageUrl={imageUrl} 
                    name={name} 
                    prices={prices}
                    active={this.state.active}
                    brand={brand}
                    handleClick={this.changeSize}
                />
                <div className='bio-container'>
                    <h2 className='bio-title'>As described by {brand}</h2>
                    <p className='bio'>{bio}</p>
                </div>
            </section>
        );
    }
};

export default withRouter(ProductPage);