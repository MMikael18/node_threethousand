import React from 'react';

const divStyle = {
    backgroundColor: 'green',
};

class SelectLanguage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //console.log(event.target.value);
        //this.setState({value: event.target.value});
        this.props.onHandleUsersLanguage(event.target.value);
    }

    render(){
        return (
            
            <form style={divStyle} className="selectLanguage">
                <label>
                    Select your language
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="">Select your language</option>
                        <option value="fi">Finland</option>
                        <option value="se">Sweden</option>                
                    </select>
                </label>
            </form>
            
        );
    }
}

export default SelectLanguage