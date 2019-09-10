import React,{Component} from 'react';

class Review extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let styles = this.props.styles;
        return (
            <div>
            <h1>Restaurant Review</h1>
            <p style={{textAlign: 'left', margin:'5% 20% 5% 20%'}}>On {this.props.day} I went to the {this.props.restaurant} in {this.props.city}.
            The wait staff was {this.props.adj} but the food was {this.props.foodadj}!
            I ordered the {this.props.food} and it tasted like {this.props.noun}! My 
            daughter found {this.props.noun2} in her {this.props.drink}!
            On a scale of 1 to 10, I rate my experience a {this.props.num}.</p>
            </div>
        )
    }
}

export default Review;

