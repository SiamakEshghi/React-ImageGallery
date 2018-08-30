import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'components/Header/Style.css';
import logo from 'img/logo.png'
import * as action from 'action';
 
 const Header = (props) => {
    const { isLogged } = props;

    const handleLogin = () => {
        props.changeLog(!isLogged);
     }
     return (
         <div className="header">
            <div className="linkContainer">
                <Link className="link" to="/" >Album</Link>
                <Link className="link" to="/upload" >Upload Photo</Link>
            </div>
            <img className="logo" src={logo} alt=""/>
            <div className="loginContainer">
                <button 
                 className="loadingBtn"
                 onClick={handleLogin}
                >{isLogged ? "Logout" : "Login"}</button>
            </div>
         </div>
        );    
 }
 const mapStateToProps = ({ auth }) => {
    return { isLogged: auth.isLogged }
 };

 export default connect(mapStateToProps, action)(Header);