import React from 'react'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mixedData: {},
            wordIndex: 0,
            isInit: false
        }
        this.answerTrue = this.answerTrue.bind(this)
        this.answerFalse = this.answerFalse.bind(this)
    }

    componentWillMount(){
        let d = this.shuffle(this.props.data)
        this.setState({mixedData: d})
        this.setState({wordIndex: 2998})
        this.setState({isInit: true})
    }
    componentWillUnmount(){
        this.setState({mixedData: {}})
        this.setState({wordIndex: 0})
        this.setState({isInit: false})
    }


    handleClick(e) {        
        e.preventDefault();
        console.log(e.target.value);
        //this.props.handleClick();
    }

    initGame(){
 
    }

    shuffle(data) {
        for (let i = data.length - 1; i > 0; i--) {
            let j = ""
            do {
                j = Math.floor(Math.random() * (i + 1))
            }
            while (j == i)            
            [data[i], data[j]] = [data[j], data[i]]
        }
        return data
    }    

    getWrong(rightNum){
        let wrong = 0
        do {
            wrong = Math.floor((Math.random() * 3000) - 1)
        }
        while (wrong == rightNum) 
        return wrong
    }

    answerTrue(){
        if(this.state.wordIndex < 2999){
            this.setState({wordIndex: this.state.wordIndex + 1})
        }else{
            this.setState({wordIndex: 0})
        }        
    }

    answerFalse(){
        this.setState({wordIndex: 0})
    }

    render(){
        let render = "Loading ..."
        if(this.state.mixedData){
            //console.log(this.state.mixedData);
            
            let now    = this.state.wordIndex,
                word   = this.state.mixedData[now].en,
                right  = this.state.mixedData[now][this.props.lang],
                wrong1 = this.state.mixedData[this.getWrong(now)][this.props.lang],
                wrong2 = this.state.mixedData[this.getWrong(now)][this.props.lang]

            render = <div>
                        <span>{Number(this.state.wordIndex)+1} / 3000</span>
                        <h1>{word}</h1>
                        <input type="button" value={right} onClick={this.answerTrue} />
                        <input type="button" value={wrong1} onClick={this.answerFalse} />
                        <input type="button" value={wrong2} onClick={this.answerFalse} />
                     </div>
            
            //         this.setState({wordIndex: now + 1})
            
        }
        return (
            <div className="gameState">{render}</div>
        )
    }
}

export default Game