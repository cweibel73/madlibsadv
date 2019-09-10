import React,{Component} from 'react';
import Dating from './Dating';
import Review from './Review';
import Talk from './Talk';
import Political from './Political';
import Celeb from './Celeb';

class Selector extends Component {
    constructor(props){
        super(props);
        this.state={
            adventure: '',
            done: false
        }
        
        this.dating = this.dating.bind(this);
        this.goback = this.goback.bind(this);
        this.review = this.review.bind(this);
        this.talk = this.talk.bind(this);
        this.ad = this.ad.bind(this);
        this.celeb = this.celeb.bind(this);
    }
    
    dating() {
    let noun = prompt('Please enter a noun');
    let food = prompt('Please enter a food');
    let hobby1 = prompt('Please enter a hobby');
    let hobby2 = prompt('Please enter another hobby');
    let hobby3 = prompt('Please enter another hobby');
    let num = prompt('Please enter a number');
    let shape = prompt('Please enter an adjective');
    let shape2 = prompt('Please enter another adjective');
    let adj = prompt('Please enter another adjective');
    let adj2 = prompt('Please enter another adjective');
    let adj3 = prompt('Please enter another adjective');
    let adj4 = prompt('Please enter another adjective');
    let adj5 = prompt('Please enter one more adjective');
    this.setState({
        adventure: <Dating 
        noun={noun} 
        food={food}
        hobby1={hobby1}
        hobby2={hobby2}
        hobby3={hobby3}
        num={num}
        shape={shape}
        shape2={shape2}
        adj={adj}
        adj2={adj2}
        adj3={adj3}
        adj4={adj4}
        adj5={adj5}
        />,
        done: true
    })
    }
    
    review() {
    let day = prompt('Please enter a day of the week');
    let restaurant = prompt('Please enter the name of a restaurant');
    let city = prompt("Please enter a city");
    let adj = prompt("Please enter an adjective");
    let foodadj = prompt("Please enter another adjective");
    let food = prompt("Please enter a type of food");
    let noun = prompt("Please enter a noun");
    let noun2 = prompt("Please enter a plural noun");
    let drink = prompt("Please enter a drink");
    let num = prompt("Please enter a number between 1 and 10");
    this.setState({
        adventure: <Review 
        day={day} 
        restaurant={restaurant} 
        city={city} 
        adj={adj}
        foodadj={foodadj} 
        food={food} 
        noun={noun}  
        noun2={noun2} 
        drink={drink} 
        num={num}
        />,
        done: true
    });
    }

    talk(){
        let day = prompt("Please enter a day of the week");
        let cel = prompt("Please enter a celebrity");
        let network = prompt("Please enter a TV station/network");
        let noun = prompt("Please enter a plural noun");
        let noun2 = prompt("Please enter another noun");
        let noun3 = prompt("Please enter another noun");
        let cel2 = prompt("Please enter another celebrity");
        let cel3 = prompt("Please enter another celebrity");
        let cel4 = prompt("Please enter another celebrity");
        let crime = prompt("Please enter a crime");
        let pol = prompt("Please enter a politician");
        let adj = prompt("Please enter an adjective");
        this.setState({
            adventure: <Talk 
            day={day} 
            cel={cel} 
            network={network} 
            noun={noun} 
            noun2={noun2} 
            noun3={noun3} 
            cel2={cel2} 
            cel3={cel3} 
            cel4={cel4} 
            crime={crime}
            pol={pol} 
            adj={adj}
           />,
           done: true
    
        })
    }
    ad(){
        let first = prompt("Please enter a first name");
        let last = prompt("Please enter a last name");
        let office = prompt("Please enter a political office");
        let location = prompt("Please enter a geographical location (city/state/country/etc)");
        let noun = prompt("Please enter a noun");
        let noun2 = prompt("Please enter another noun");
        let adj = prompt("Please enter an adjective");
        let pnoun = prompt("Please enter a plural noun");
        let pnoun2 = prompt("Please enter another plural noun");
        let noun3 = prompt("Please enter a noun");
        let pnoun3 = prompt("Please enter a plural noun");
        let adj2 = prompt("Please enter an adjective");
        let verb = prompt("Please enter a verb ending in ing");
        let adj3 = prompt("Please enter an adjective");
        let pnoun4 = prompt("Please enter a plural noun");
        let date = prompt("Please enter a date");
        this.setState({
            adventure: <Political
            first={first} 
            last={last} 
            office={office} 
            location={location} 
            noun={noun} 
            noun2={noun2} 
            adj={adj} 
            pnoun={pnoun} 
            pnoun2={pnoun2} 
            noun3={noun3} 
            pnoun3={pnoun3} 
            adj2={adj2} 
            verb={verb} 
            adj3={adj3} 
            pnoun4={pnoun4} 
            date={date}
            />,
            done: true
        })
    }
    celeb(){
        let day = prompt("Please enter a day of the week");
        let network = prompt("Please enter a station/network/news source");
        let movie = prompt("Please enter a movie");
        let celfirst = prompt("Please enter a celebrity's first name");
        let cellast = prompt("Please enter the same celebrity's last name");
        let celfirst2 = prompt("Please enter another celebrity's first name");
        let cellast2 = prompt("Please enter that celebrity's last name");
        let verbed = prompt("Please enter a verb ending in ed");
        let body = prompt("Please enter a body part");
        let adj = prompt("Please enter an adjective");
        let name = prompt("Please enter a full name");
        let noun2 = prompt("Please enter a noun");
        let ing = prompt("Please enter a verb ending in ing");
        let noun3 = prompt("Please enter another noun");
        this.setState({
            adventure: <Celeb
            day={day} 
            network={network} 
            movie={movie}  
            celfirst={celfirst} 
            cellast={cellast}  
            celfirst2={celfirst2} 
            cellast2={cellast2} 
            verbed={verbed} 
            body={body} 
            adj={adj} 
            name={name} 
            noun2={noun2} 
            ing={ing} 
            noun3={noun3}
            />,
            done: true
        });
    }
    goback(){
        this.setState({
            done: false
        })
    }
    render(){
        return this.state.done? (
            <div>
             {this.state.adventure}
             <button onClick={this.goback}>Go back</button>
            </div>
        ):(
            <div>
            <h1>Choose Your Mad Libs Adventure!</h1>
            <p style={{textAlign:'right', backgroundColor:'black'}}>Personal Ad<button onClick={this.dating}>GO</button><br />
            Restaurant Review<button onClick={this.review}>GO</button><br />
            New Talk Show<button onClick={this.talk}>GO</button><br />
            Political Ad<button onClick={this.ad}>GO</button><br />
            Celebrity Feud<button onClick={this.celeb}>GO</button></p>
            </div>
        )
    }
}

export default Selector;