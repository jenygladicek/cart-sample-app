import React , {Component} from 'react';

class Cart extends Component{
    state = {
        count : 0,
        imageUrl : 'https://picsum.photos/100?random',
        tags : ['tag1', 'tag2', 'tag3']
    }
    handleIncrement = () =>{
        this.setState({count : this.state.count + 1});
    }
    handleDecrement = () =>{
        this.setState({count : this.state.count -1});
    }
    render () {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="random pic"/>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'>+</button>
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm m-2'>-</button>
                <div>{this.state.tags.length === 0 && 'Create New Tag' }{this.renderTags()}</div>
            </React.Fragment>
        );
    }
    getClasses() {
        let classes = 'badge m-3 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
    renderTags () {
        if (this.state.tags.length === 0)
            return <p>No Tags avilable</p>
        return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)} </ul>
    }
}

export default Cart;