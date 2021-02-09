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
                <span>{this.state.count}</span>
                <button className='btn-primary' >Buy more</button>
            </div>
        );

    }

    //methods place
    formatcount() {
        const count=this.state.count
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;

