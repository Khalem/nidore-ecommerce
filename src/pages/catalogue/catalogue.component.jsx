import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import SHOP_DATA from '../../data/shopData';

import './catalogue.styles.scss';

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathName: props.history.location.pathname,
            data: {},
            loaded: false
        }
    }

    componentDidMount() {
        SHOP_DATA.map(data => {
            if (data.routeName === this.state.pathName) {
                this.setState({ data, loaded: true });
            }
        });
    }

    render() {
        return (
            this.state.loaded ?
            <section className='catalogue'>
                <div className='background-guides-container'>
                    <div className='background-guides'>
                        <div className='guide-one'></div>
                        <div className='guide-two'></div>
                        <div className='guide-three'></div>
                        <div className='guide-four'></div>
                    </div>
                </div>
                <h1 className='catalogue-title'>{this.state.data.title}</h1>
                <Directory data={this.state.data} />
            </section>
            : <h2>Loading..</h2>
        );
    }
}

export default withRouter(Catalogue);