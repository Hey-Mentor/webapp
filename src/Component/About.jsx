import React, { Component } from 'react';

export default class About extends Component {
    componentDidMount()
    {
        console.log('About page loaded!')
    }
    render()
    {
        return (
            <div>
                <h1>About us</h1>
            </div>
        );
    }
}