import React,{Component} from 'react';

class Talk extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>New Talk Show</h1>
                 <p style={{textAlign:'left',margin:'5% 20% 5% 20%'}}>It was announced 
                 on {this.props.day} that {this.props.cel} will be beginning a brand 
                 new talk show on {this.props.network}! The show's topics will include {this.props.noun}, 
                 the {this.props.noun2} epidemic and the possible legalization of {this.props.noun3}. 
                 Upcoming guests will include {this.props.cel2}, {this.props.cel3} and possibly the 
                 controversial {this.props.cel4} who was recently arrested for {this.props.crime}. Critics 
                 of the show include {this.props.pol} who claims that {this.props.cel} is too {this.props.adj} for 
                 television.</p>
            </div>
            
        )  
    }
}

export default Talk;

