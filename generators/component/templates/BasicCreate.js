import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.base';

//@todo: Add route to App.dom.js
//import <%=options.componentName%> from './src/components/<%=options.componentName%>/<%=options.componentName%>.dom';
//<Route exact path="/<%=options.collectionName%>/create" component={<%=options.componentName%>} />

class <%=options.componentName%> extends Component {
    state = {
        name: '',
        age: 0,
        company: ''
    }

    saveItem(event) {
        axios.post(`${config.baseApiUrl}api/<%=options.collectionName%>`, this.state)
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
                        <input type="text"
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>Age:</label>
                        <input type="text"
                            value={this.state.age}
                            onChange={event => this.setState({ age: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <label>Company:</label>
                        <input type="text"
                            value={this.state.company}
                            onChange={event => this.setState({ company: event.target.value })}
                        />
                    </div>
                    <div className='col col-xs-12'>
                        <button onClick={this.saveItem.bind(this)}>Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {

}

export default <%=options.componentName %>;