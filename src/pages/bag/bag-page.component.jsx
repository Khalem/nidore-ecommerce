import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';
import BagItem from '../../components/bag-item/bag-item.component';

import { ReactComponent as Pointer } from '../../assets/pointing-down.svg';

import './bag-page.styles.scss';

const BagPage = ({ bagItems, history }) => {
    const buttonStyles = {
        backgroundColor: 'var(--dark-color)',
        color: 'var(--background-color)',
        boxShadow: 'none',
        minWidth: '35%',
        padding: '20px 10px',
        fontWeight: '500'
    };
    
    const getCompleteTotal = () => {
        let completeTotal = 0;
        bagItems.forEach(({ price, quantity }) => {
            completeTotal+= price * quantity;
        });

        return completeTotal.toFixed(2);
    };

    // move pointer to cursor position on mouse enter
    const mouseEnterRedirect = e => {
        const pointer = document.getElementsByClassName('pointer')[0];
        const pointerPos = pointer.getBoundingClientRect();
        const titlePos = e.target.getBoundingClientRect();

        const x = titlePos.left - pointerPos.left;

        pointer.style.transform = `translateX(${x + 25}px)`;
    }

    // reset transform on mouse leave
    const mouseLeaveRedirect = () => {
        const pointer = document.getElementsByClassName('pointer')[0];

        pointer.style.transform = 'translateX(0)';
    }

    return (
        <div className='bag-page'>
            {
                bagItems.length ?
                <Fragment>
                    <h1 className='bag-page-title'>Your shopping bag</h1>
                    {
                        bagItems.map(item => 
                            <BagItem item={item} />
                        )
                    }
                    <div className='bag-cta'>
                        <h1 className='complete-total'>total: €{getCompleteTotal()}</h1>
                        <CustomButton name='checkout' style={buttonStyles}>Go to Checkout</CustomButton>
                    </div>
                </Fragment>
                :
                <Fragment>
                    <h1 className='bag-page-title'>Nothing here yet,</h1>
                    <h2 className='bag-page-secondary-title'>Let's change that</h2>
                    <Pointer className='pointer' />
                    <div className='redirect-container'>
                        <h3 className='redirect-title' 
                            onMouseEnter={mouseEnterRedirect} 
                            onMouseLeave={mouseLeaveRedirect}
                            onClick={() => history.push(`/womens`)}
                        >
                            Womens
                        </h3>
                        <h3 className='redirect-title' 
                            onMouseEnter={mouseEnterRedirect} 
                            onMouseLeave={mouseLeaveRedirect}
                            onClick={() => history.push(`/mens`)}
                        >
                            Mens
                        </h3>
                    </div>
                </Fragment>
            }
        </div>
    );
};

const mapStateToProps = ({ bag }) => ({
    bagItems: bag.bagItems
});

export default connect(mapStateToProps)(withRouter(BagPage));