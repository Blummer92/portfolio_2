import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";
import Popup from '../components/Popup';  

class App extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  


const App = () => (
  <div>
    <div>  
            {this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>  
    <HeaderNavigation />
    <Jumbotron fluid>
    <button onClick={this.togglePopup.bind(this)}> Signnup</button>  
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
    <Body>
      <Form />
    </Body>
  </div>
);

export default App;
