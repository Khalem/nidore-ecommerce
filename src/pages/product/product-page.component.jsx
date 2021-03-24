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
            loaded: false
        }
    }

    componentDidMount() {
        SHOP_DATA.forEach(data => {
            if (data.title.toLowerCase() === this.state.category.toLowerCase()) {
                data.items.forEach(item => {
                    if (item.id === parseInt(this.state.productID)) {
                        this.setState({ item, loaded: true });
                    }
                });
            }
        });
    }

    render() {
        if (!this.state.loaded) return null;

        const { name, brand, bio, imageUrl, prices } = this.state.item;

        return (
            <section className='product-page'>
                <h1 className='brand-title'>{brand}</h1>
                <h1 className='product-title'>{name}</h1>
                {/* <p className='product-bio'>{bio}</p> */}
                <ProductBox 
                    imageUrl={imageUrl} 
                    name={name} 
                    prices={prices} 
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