import React , {Component} from 'react';

import ListItem from './listItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures : []
        }
    }

    componentDidMount() {
        fetch('https://picsum.photos/list').then(results=>{
            return results.json();
        }).then(data =>{
            this.setState({pictures : data});
            
        })
        
    }
    render (){
        return <div class='container'>{this.state.pictures.map(picture => <ListItem imgSrc='https://picsum.photos/100?image=1084' key={picture.id}/>)}</div>
    }
}

export default List;