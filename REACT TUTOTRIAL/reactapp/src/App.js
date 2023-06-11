
import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import Users from './Components/Users';



 class App extends Component {
  
  render() {
    return (
      <div className='container'>
   
      <Navbar title="Users App"/>
  
     <hr/>
      
      <AddUser/>

     <Users  />
  
      </div>
    );
  }
}





 


export default App;
