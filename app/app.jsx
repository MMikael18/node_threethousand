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
      words: "",
    }
    this.HandleUsersLanguage = this.HandleUsersLanguage.bind(this)
    this.HandleResetLanguage = this.HandleResetLanguage.bind(this)
  }

  componentWillMount(){
    
    if(localStorage.usersLanguage){
      this.setState({usersLanguage: localStorage.usersLanguage})
      this.GetRestData(localStorage.usersLanguage)
    }

  }

  GetRestData(lang){
    fetch('/api/words/'+lang, {
      method: 'get'
    }).then(res => res.json()).then(res => {
      this.setState({words: res})
    }).catch(function(err) {
        console.log(err)
    })
  }

  HandleUsersLanguage(value){
    //console.log(value);
    localStorage.setItem("usersLanguage", value)
    this.setState({usersLanguage: value})
    this.GetRestData(value)
  }

  HandleResetLanguage(){
    localStorage.removeItem("usersLanguage")
    this.setState({usersLanguage: ""})
    this.setState({words: ""})
  }

  render() {
    let content  = <SelectLanguage onHandleUsersLanguage={this.HandleUsersLanguage} />
    if(this.state.words){
      content = <div>
                  <LinkBTN handleClick={this.HandleResetLanguage} title="Reset language" />
                  <Game data={this.state.words} lang={this.state.usersLanguage}  />
                </div>
    }
    return (<div id="AppFrame">{content}</div>)
  }
}

ReactDOM.render(
  <AppFrame />, document.getElementById('app')
);