import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3', 'tag4', 'sahar', 'saharjoon']
    };

    //constructor
    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags = () => {
    //     if (this.state.tags.length === 0) return 'We can not find any tags';
    //     return (<ul>
    //         {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}
    //     </ul>)
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    };

    render() {

        return (
            <div className=' mt-0'>

                <nav className="navbar navbar-dark bg-dark">
                    <h3 className="text-light mx-auto">Shopping Basket</h3>
                </nav>

                <span className={this.getBadgeClasses()}> {this.formatcount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm ">Add Item</button>

            </div>
        );

    }

    //Methods Placement
    //dynamic changing of CSS methods
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }


    formatcount() {
        const count = this.state.count
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;

