import React from 'react';
// import { Link } from 'react-router-dom';
// import Signup from '../signup/Signup';
// import Login from '../login/Login';
import Products from '../products/Products';
import classes from './Main.module.css';
// import ProductDetail from '../products/ProductDetail';
// import {Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../nav/Nav';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const Main = (props) => {

    return (
        <nav>
            <Nav />
            <ul className={classes.Container}>
                <li className={classes.List}>
                    <FontAwesomeIcon icon={['far', 'user']}/>
                    <span>{props.auth.user.name}</span>
                </li>
                <li className={classes.List}>
                    <FontAwesomeIcon icon={['fas', 'cart-plus']} />
                </li>
                <li className={classes.List}>
                    <FontAwesomeIcon icon={['far', 'heart']}/>
                    <span>{props.favoriteList.length}</span>
                </li>
            </ul>
            <Products/>
        </nav>
    )
};

const mapStateToProps = (state) => {
    // console.log('state', state)
    return {
        auth: state.auth,
        error: state.error.message,
        favoriteList:state.favoriteList.favoriteList
    }
}

export default connect(mapStateToProps)(withRouter(Main));
