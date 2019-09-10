import React,{Component} from 'react';

class Celeb extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Celebrity Feud!</h1>
                <p style={{textAlign:'left',margin:'5% 20% 5% 20%'}}>
                On {this.props.day}, {this.props.network} reported that 
                there was a scuffle on the set of the {this.props.movie} remake between {this.props.celfirst} {this.props.cellast} and 
                co-star {this.props.celfirst2} {this.props.cellast2}. {this.props.cellast} {this.props.verbed} {this.props.cellast2} in the {this.props.body}! {this.props.cellast2}'s attorney 
                says that there will be a lawsuit. "The actions of {this.props.cellast} are completely {this.props.adj}!" exclaimed {this.props.cellast2}'s attorney {this.props.name}. 
                However, {this.props.cellast} says that {this.props.cellast2} is overreacting. "{this.props.celfirst2} needs to stop being such a {this.props.noun2}. Seriously. I have been {this.props.verbed} before 
                and you don't see me {this.props.ing} like some {this.props.noun3}!"

                </p>
            </div>
        )
    }
}

export default Celeb;
