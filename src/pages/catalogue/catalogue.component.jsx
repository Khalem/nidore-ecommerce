import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SHOP_DATA from '../../data/shopData';

import './catalogue.styles.scss';

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathName: props.history.location.pathname,
            data: {}
        }
    }

    componentDidMount() {
        SHOP_DATA.map(data => {
            if (data.routeName === this.state.pathName) {
                this.setState({ data });
            }
        });
    }

    render() {
        return (
            <h1>{this.state.data.title}</h1>
        );
    }
}

export default withRouter(Catalogue);