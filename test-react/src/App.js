import logo from './logo.svg';
import {Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import React from 'react';
import './App.css';
/*let h1= {
  color:'#61dafb',
  fontsize:'5px',
  cursor:'pointer'
};
let button= {
margin:'10px'
};
let div={
 backgroundColor:'#61dafb',
  width:'20%',
  borderRadius:'10px',
  padding:'2%',
  margin: '2%'
};*/
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={h1}>I'm starting React</h1>
        <div style={div}>
          <Button color="primary" variant="contained" style={button}>Material.io Button (Primary)</Button>
          <Button color="secondary" variant="contained" style={button}>Material.io Button (Secondary)</Button>
          <Button color="default" variant="contained" style={button}>Material.io Button (Default)</Button>
          <Button  variant="contained" disabled style={button}>Material.io Button (Disabled)</Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class NavBar extends React.Component{
    render()
    {
        return(
            <nav>
                <ul style={{
                    display:'flex',
                    flexDirection:'row',
                    listStyle:'none'
                }}>
                    <li className="padding"><a href=""style={{
                        textDecoration:'none'
                    }}><strong>Logo</strong></a></li>
                    <li className="padding"><a href="#" style={{
                        textDecoration:'none'
                    }}>Home</a></li>
                    <li className="padding"><a href="#"  style={{
                        textDecoration:'none'
                    }}>About Us</a></li>
                    <li className="padding"><a href="#"  style={{
                        textDecoration:'none'
                    }}>Services</a></li>
                    <li className="padding"><a href="#"  style={{
                        textDecoration:'none'
                    }}>Contact</a></li>
                </ul>
            </nav>
        );
    }
}

class Form extends React.Component
{
    constructor(props) {
        super(props)
        {
            this.state={
                auth:'denied',
                password:'haris',
                email: 'harisbinrahat@gmail.com'
            };
        };
        this.authorize = this.authorize.bind(this);
    }
    authorize(e)
    {
        let password = document.getElementById('password');
        let email = document.getElementById('email');
        if(password.value===this.state.password && email.value===this.state.email)
        {
            this.setState({
               auth:'granted'
            });
        }
        else
        {
            alert('Incorrect Email or Password!');
        }

    }
    render()
    {
        let productForm=(
                <form action="" style={{margin:'10% auto',width:'50%'}}>
                    <div style={{
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <h2>Enter Product</h2>
                        <TextField id="standard-basic" label="Product Name"/>
                        <TextField id="filled-basic" label="Price" variant="filled" style={{marginBottom:'1rem',marginTop:'1rem'}}/>
                        <TextField id="outlined-basic" label="Product ModelId" variant="outlined" />
                        <Button type="submit" style={{margin:'1rem  auto',width:'50%'}} variant="contained" color="primary" >Submit</Button>
                    </div>
                </form>
        );
        let signIn = (
            <form action="" style={{margin:'10% auto',width:'50%'}} onSubmit={this.authorize}>
                <div style={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <h2>Sign</h2>
                    <TextField id="standard-basic"  type="email" id="email" label="Email"/>
                    <TextField id="standard-basic" label="Password" type="password" id="password"/>
                    <Button type="submit" style={{margin:'1rem  auto',width:'50%'}} variant="contained" color="primary">Login</Button>
                </div>
            </form>
        );
        return(
               <div>
                   {this.state.auth==='granted' ? <div>{productForm}</div> : signIn}
               </div>
        );
    }
}

class Footer extends React.Component
{
    render()
    {
        return(
            <footer style={{position:'relative',bottom:'10px',textAlign:'center'}}>
                <p>All Rights Reserved!</p>
            </footer>
        );
    }
}

class Main extends React.Component{
    render()
    {
        return(
            <div>
                <NavBar/>
                <Form />
                <Footer/>
            </div>
    );
    }
}
export default Main;
/*export default App;*/

