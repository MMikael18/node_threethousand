import React from 'react'

class Game extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        //console.log(this.props.data[0].en)
        var numper = Math.floor((Math.random() * 3000))
        var h1 = ""

        console.log(numper)

        if(this.props.data){
            h1 = this.props.data[numper].en
        }
        return (
            <div className="game">
                <h1>{h1}</h1>
            </div>
        );
    }
}

export default Game