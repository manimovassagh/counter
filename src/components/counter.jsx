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
                <h1>Shopping Basket</h1>
                <button className='btn-primary' >Buy more</button>
            </div>
        );

    }
}

export default Counter;

