import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        address: {
            strasse: 'lindengassse',
            housenummer: '7'

        }
    }
    render() {

        return (
            <div>
                <span>{this.state.address.strasse}</span>
                <button className='btn-primary' >Buy more</button>
            </div>
        );

    }
}

export default Counter;

