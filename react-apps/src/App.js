import logo from './logo.svg';
import './App.css';
import seasoning from './seasoning.jpg';
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";

export function App() {
  return (
   <div>
       <Div/>
   </div>
  );
}
function Div()
{
    return(
        <div style={{
            padding : '10px',
            width : '900px',
            backgroundColor : '#393940',
            borderRadius : '40px',
            margin : '100px auto',
            display : 'flex',
            flexDirection : 'row'
        }}>
            <ImageDiv/>
            <TextDiv paddingLeft='20px' paddingTop='30px'/>
        </div>
    );
}

function ImageDiv()
{
    return(
        <div>
            <img src={seasoning} style={{borderRadius : '40px 10px 10px 40px'}} width="253px" height="378px" alt="seasoning"/>
        </div>
    );
}

function TextDiv(props)
{
    return(
       <div style={{paddingLeft: props.paddingLeft, paddingTop : props.paddingTop}}>
           <div style={{ color : '#C8C8C8'}}>
               <p style={{fontSize:'26px', width : '435px'}}>Get diet and fitness tips in your inbox</p>
               <p style={{fontSize:'18px', width : '380px'}}>Eat better and exercise better. Sign up for the Diet & Fitness Newsletter.</p>
           </div>
           <div>
               <input type="email" style={{color : 'white', width : '312px', height : '48px'}} placeholder="Enter Your Email Address" />
               <Button variant="contained" style={{width : '141px', height : '56px', marginLeft : '20px', backgroundColor: '#93C814'}} >Subscribe</Button>
           </div>
       </div>
    );
}

export default App;


