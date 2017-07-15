import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';

//@todo: Add route to App.dom.js
//<Route exact path="/<%=options.collectionName%>/details/:id" component={<%=options.componentName%>} />

class <%=options.componentName%> extends Component {
    state = {
        name: '',
        age: 0,
        company: ''
    }


    componentDidMount() {
        axios.get(`${config.baseApiUrl}api/<%=options.collectionName%>/${this.props.match.params.id}`)
            .then(response => {
                this.setState(response.data);
            });
    }

    saveItem(event) {
        axios.put(`${config.baseApiUrl}api/<%=options.collectionName%>/${this.props.match.params.id}`, this.state)
            .then(response => {
                this.props.history.push('/<%=options.collectionName%>');
            });
    }


    render() {
        return (
            <div>
                <h1><%=options.componentName%></h1>
                <div className='row'>
                    <div className='col col-xs-12'>
                        <label>Name:</label>
                        {this.state.name}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>Age:</label>
                        {this.state.age}
                    </div>
                    <div className='col col-xs-12'>
                        <label>Company:</label>
                        {this.state.company}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {

}

export default <%=options.componentName %>;