import React from 'react'
import ReactDOM from 'react-dom'

import Game from './components/game.jsx'
import SelectLanguage from './components/select_language.jsx'
//import Test from './components/test.jsx'

class AppFrame extends React.Component {
  
  constructor() {
    super();
    this.state = {
      usersLanguage: "",
    }
    this.HandleUsersLanguage = this.HandleUsersLanguage.bind(this);
  }

  componentWillMount(){
    //let data = this.GetRestData();
    //this.setState({links: data});
  }

  GetRestData(){

  }

  HandleUsersLanguage(value){
    console.log(value);
    this.setState({usersLanguage: value});
  }

  render() {
    return (<div id="AppFrame"><SelectLanguage onHandleUsersLanguage={this.HandleUsersLanguage} /></div>);
  }
}

ReactDOM.render(
  <AppFrame />, document.getElementById('app')
);