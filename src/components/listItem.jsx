import React , {Component} from 'react';

class Cart extends Component{
    state = {
        count : 0
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
                <img src={this.props.imgSrc} alt="random pic" key={this.props.key}/>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'>+</button>
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm m-2'>-</button>
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
}

export default Cart;