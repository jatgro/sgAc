import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends React.Component{
  render(){
    return(
      <div>
        <div ><Form type="Debit"></Form></div>
        
        <Form type="Credit"></Form>
      </div>
    );
  }
}

export default App;
