import React,{Component} from 'react'

class Form extends Component{
    render(){
        return(
            <div>
            <h1>{this.props.type}</h1>
            <form>
                <select>
                    <option>Cash In Hand</option>
                </select>
            </form>
        </div>
        );
    }
}

export default Form;