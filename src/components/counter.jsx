import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3','tag4']
    };
    styles = {
        fontSize: '15px',
        fontWeight: 'bold'
    }
renderTags(){
if (this.state.tags.length===0) return 'We can not find any tags';
  return  (<ul>{this.state.tags.map(tag => <li key={tag.id}> {tag}</li>)}</ul>)

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

