import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponents extends Component {
        componentDidMount() {
            this.LoginCheck();
        }
        componentDidUpdate() {
            this.LoginCheck();
        }

        LoginCheck = () => {
            if(!this.props.isLogged) {
                this.props.history.push('/');
                alert('For Uploading Image Please Login!');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = ({ auth }) => {
        return { isLogged: auth.isLogged };
    }
    return connect(mapStateToProps)(ComposedComponents);
}