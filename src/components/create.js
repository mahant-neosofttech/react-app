import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Add First Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Last Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Mobile Number: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}