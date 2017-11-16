import React from 'react';

class LinkBTM extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {        
        e.preventDefault();
        this.props.handleClick();
    }

    render(){
        return (
            <div><a href="#" onClick={this.handleClick}>{this.props.title}</a></div>
        );
    }
}

export default LinkBTM