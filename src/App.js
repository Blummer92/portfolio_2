import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Body from "../src/Body"; //what is wrong with my body ell


class App extends React.Component {

    
  render(){ // add return statement to this.
const App = () => (
  <div>
    {/* <div>
      {this.state.showPopup ? (
        <Popup
          text='Click "Close Button" to hide popup'
          closePopup={this.togglePopup.bind(this)}
        />
      ) : null}
    </div>*/}
    <HeaderNavigation />
    <Jumbotron fluid>
            <div>
      </div>
    {/*); is this unneded bc it seems like it is causing the error*/}
       {/*  <button onClick={this.togglePopup.bind(this)}> Signnup</button>
      <h1 className="header">Welcome To React-Bootstrap</h1>*/}
    </Jumbotron>
    <Body />, 
  </div>
  );
    return App
  };

} // you forgot this line
export default App; 