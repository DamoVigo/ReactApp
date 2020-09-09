import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar'
import {Route,Switch} from 'react-router-dom'
import Catalogue from './pages/Catalogue'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <> 
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route path="/" render={()=><Catalogue />}/>
          </Switch>
        </div>
      </>
      );
  }
}
 
export default App;
