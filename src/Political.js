import React,{Component} from 'react';

class Political extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>New Political Ad</h1>
                <p style={{textAlign:'left',margin:'5% 20% 5% 20%'}}>Hello, my name is {this.props.first} {this.props.last} and 
                I am running for {this.props.location} {this.props.office}. I believe that we have a major {this.props.noun} problem 
                and I am the {this.props.noun2} to fix it. Voters are {this.props.adj} and are tired of all the {this.props.pnoun} coming 
                from {this.props.location}'s elected officials. If I am elected, I will do whatever it takes to lower {this.props.pnoun2}, 
                secure the {this.props.noun3} and put a stop to discrimination against {this.props.pnoun3}. My critics say that I am too {this.props.adj2} but 
                they are obviously {this.props.verb} and are pandering to big money {this.props.adj3} {this.props.pnoun4}! On {this.props.date}, please 
                vote for {this.props.first} {this.props.last} for {this.props.location} {this.props.office}. Thank you.</p>
            </div>
        )
    }
}

export default Political;