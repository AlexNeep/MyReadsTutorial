import React, { Component } from 'react' 


class Options extends Component {


    render(){
        return(
            <option 
                value={this.props.value}
            >
                {this.props.name}
            </option>
        )
    }
}
export default Options