import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
    };
    styles = {
        fontSize: '15px',
        fontWeight: 'bold'
    }


    render() {

        return (

            <div className=' mt-2'>
                <h3>Shopping Basket</h3>
                <span style={this.styles} className={this.getBadgeClasses()}> {this.formatcount()} </span>
                <button className='btn btn-secondary btn-sm' >Buy more</button>
            </div>
        );

    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    //Methods Place

    formatcount() {
        const count = this.state.count
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;

