import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';
import { Link } from 'react-router-dom';

//@todo: Add route to App.dom.js
//import <%=options.componentName%> from './src/components/<%=options.componentName%>/<%=options.componentName%>.dom';
//<Route exact path="/<%=options.collectionName%>" component={<%=options.componentName%>} />

class <%=options.componentName%> extends Component {
    state = {
        collection: []
    }


    componentDidMount() {
        axios.get(`${config.baseApiUrl}api/<%=options.collectionName%>`)
            .then(response => {
                this.setState({
                    collection: response.data
                });
            });
    }


    render() {
        return (
            <div>
                <h1><%=options.componentName%></h1>
                {this.state.collection.map(item => (
                    <div key={item._id} className='row'>
                        <div className='col col-xs-3'>
                            {item.name}
                        </div>
                        <div className='col col-xs-3'>
                            {item.age}
                        </div>
                        <div className='col col-xs-3'>
                            {item.company}
                        </div>
                        <div className='col col-xs-3'>
                            <Link className='btn btn-default' to={`/<%=options.collectionName%>/details/${item._id}`}>Details</Link>
                            <Link className='btn btn-default' to={`/<%=options.collectionName%>/update/${item._id}`}>Update</Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const styles = {

}

export default <%=options.componentName %>;