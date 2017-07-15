import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => (
    <div>
        <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a className='navbar-brand' href='/'><%=options.appName%></a>
                </div>
                <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav'>
                        {/*@todo: add your list of links here e.g. <li><a href='/employees'>Employees</a></li>*/}
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid' style={styles.container}>
            {/*Renders body*/}
            {props.children}
        </div>
    </div>
);

const styles = {
    container: {
        marginTop: 75
    }
}

export default Layout;