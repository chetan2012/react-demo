import React, { Component } from 'react';
class Counter extends Component {

    // constructor(){
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    // }
    // state = {
    //     value:this.props.counter.value,
    //     tag : ['tag1', 'tag2', 'tag3'],
    // };
    // renderTags() {
    //     if(this.state.tag.length === 0) return <p>There are no tags</p>
    //     return (
    //         <ul> {this.state.tag.map(tag => <li key = {tag}>{tag}</li>)} </ul>
    //     )
    // }
    // styles = {
    //     fontSize : 10,
    //     fontWeight : 'bold'
    // }
    // handleIncreament = (product_id) => {
    //     // console.log(product_id);
    //     //console.log("Increament Clicked", this);
    //     //this.state.count = this.state.count + 1;
    //     this.setState({value : this.state.value + 1})
    // };
    // doHandleIncreament = () => {
    //     this.handleIncreament( { id: 1});
    // }
    render() {
        return (
            // <React.Fragment>
            //     <span className = 'badge badge-primary'>{this.formatCount()}</span>
            //     <button>Increament</button>
            // </React.Fragment>
            // <div>
            //     <span style = {this.styles} className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            //     <button className = 'btn btn-secondary btn-sm'>Increament</button>
            //     <ul>
            //         {this.state.tag.map(tag => <li key = {tag}>{tag}</li>)}
            //     </ul>
            // </div>
            <div>
                {/* {this.state.tag.length === 0 && "Please create new tag!!!"} */}
                {/* {this.renderTags()} */}
                {/* <h4>{this.props.id}</h4> */}
                <span style = {this.styles} className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick = {this.doHandleIncreament} className = 'btn btn-secondary btn-sm'>Increament</button> */}
                <button onClick = {() => this.props.onIncreament(this.props.counter)} className = 'btn btn-secondary btn-sm'>Increament</button>
                <button onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
            </div>
         );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.id === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' :  value;
    }
}

export default Counter;