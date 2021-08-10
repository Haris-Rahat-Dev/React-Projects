
/*
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
    // expression goes here:
    <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
    <ul>{peopleLis}</ul>,
    document.getElementById('app')
);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
  // expression goes here:
  <li key={"person_"+i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);

*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
];

// New component class starts here:
class Friend extends React.Component{
    render()
    {
        let friend=friends[0]
        return(
            <div>
                <h1>{friend.title}</h1>
                <img src={friend.src}/>
            </div>
        );
    }
}
ReactDOM.render(
    <Friend/>,document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component
{
    render()
    {
        let text;
        if(fiftyFifty===true)
        {
            text = "Tonight I'm going out WOOO";
        }
        else
        {
            text = "Tonight I'm going to bed WOOO";
        }
        return(
            <div>
                <h1>{text}</h1>
            </div>
        );
    }
}
ReactDOM.render(
    <TonightsPlan/>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    scream() {
        alert('AAAAAAAAHHH!!!!!');
    }

    render() {
        return <button onClick={this.scream}>AAAAAH!</button>;
    }
}
ReactDOM.render(
    <Button/>,document.getElementById('app')
);*/
/*import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password === this.state.password;
        this.setState({
            authorized: auth
        });
    }
    render() {
        let msg;
        if(this.state.authorized===true)
        {
            msg="Contact";
        }
        else
        {
            msg="Enter the Password";
        }
        let login=(
            <form action="" onSubmit={this.authorize}>
                <input type="password" placeholder="Password"/>
                <input type="submit"/>
            </form>
                );
        let contactInfo = (
            <ul>
                <li>
                    client@example.com
                </li>
                <li>
                    555.555.5555
                </li>
            </ul>
        );

        return (
            <div id="authorization">
                <h1>{msg}</h1>
                {this.state.authorized ? contactInfo : login}
            </div>
        );
    }
}*/

/*export default Contact;*/
/*import React from 'react';

class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
            return (
                <a href={'/' + page}>
                    {page}
                </a>
            )
        });

        return <nav>{navLinks}</nav>;
    }
}*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return (
            <button>
                {this.props.text}
            </button>
        );
    }
}

// defaultProps goes here:
Button.defaultProps={text:"I am a button"}

ReactDOM.render(
    <Button text=""/>,
    document.getElementById('app')
);*/
/*import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state={color:green};
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        const newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div style={{background:this.state.color}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Toggle/>,document.getElementById('app')
);*/
