import React from 'react'
import ReactDOM from 'react-dom'

import LinkBTN from './components/link_btn.jsx'
import Game from './components/game.jsx'
import SelectLanguage from './components/select_language.jsx'
//import Test from './components/test.jsx'

class AppFrame extends React.Component {
  
  constructor() {
    super();
    this.state = {
      usersLanguage: "",
      wordData: "",
    }
    this.HandleUsersLanguage = this.HandleUsersLanguage.bind(this);
    this.HandleResetLanguage = this.HandleResetLanguage.bind(this);
  }

  componentWillMount(){
    let data = this.GetRestData();
    //this.setState({links: data});
  }

  GetRestData(){
    fetch('/api', {
      method: 'get'
    }).then(res => res.json()).then(res => {
      console.log(res);
    }).catch(function(err) {
        console.log(err);
    });
  }

  HandleUsersLanguage(value){
    console.log(value);
    this.setState({usersLanguage: value});
  }

  HandleResetLanguage(){
    this.setState({usersLanguage: ""});
  }

  render() {
    let content  = <SelectLanguage onHandleUsersLanguage={this.HandleUsersLanguage} />
    if(this.state.usersLanguage.trim() != ""){
      content = <div>
                  <LinkBTN handleClick={this.HandleResetLanguage} title="Reset language" />
                  <Game />
                </div>
    }
    return (<div id="AppFrame">{content}</div>);
  }
}

ReactDOM.render(
  <AppFrame />, document.getElementById('app')
);