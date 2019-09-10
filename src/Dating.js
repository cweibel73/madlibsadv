import React,{Component} from 'react';

class Dating extends Component {
    constructor(props){
        super(props);       
    }

    render(){
        return (
            <div>
               <h1>Seeking the One</h1> 
               <p style={{textAlign: 'left', margin:'5% 20% 5% 20%'}}>I am seeking a kind {this.props.noun} who 
               enjoys {this.props.food} to spend lots of time with. My favorite hobbies 
               are {this.props.hobby1}, {this.props.hobby2} and occasionally {this.props.hobby3}. 
               You must be at least {this.props.num} feet tall and have a fairly {this.props.shape} physique. 
               However, I am open to those with {this.props.shape2} physiques under the right 
               circumstances. I am looking for somebody who is {this.props.adj}, {this.props.adj2} and 
               very {this.props.adj3}. I will not tolerate a {this.props.adj4} or {this.props.adj5} person 
               under any circumstances!!</p>
            </div>
        )
    }
}

export default Dating;