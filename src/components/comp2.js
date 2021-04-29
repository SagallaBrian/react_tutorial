import { Component } from "react";

class MyComponentwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chekvar: false,
            mynum: 45
        }
        this.handlEnable = this.handlEnable.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
    }

    handlEnable() {
        this.setState({
            chekvar: true
        },()=>{
            console.log(this.state.chekvar)
        })
    }
    handleDisable() {
        this.setState({
            chekvar: false
        },()=>{
            console.log(this.state.chekvar)
        })

    }
    render() {
        return (
            <div id="mydiv">
                <h4 className={'mygreen ' + 
                    (this.state.chekvar? 'myhfour': '')}>
                    Classes changed dynamically
                </h4>
                <h4 className={`mygreen 
                    ${this.state.chekvar ? 'myhfour': ''}`} >
                    Classes Changed dynamically
                </h4>
                <button
                    onClick={this.handlEnable}
                    style={btncomp2}
                    className="btnst">
                    Add Class Dynamically 
                </button>
                <button
                    onClick={this.handleDisable}
                    style={btncomp3}
                    className="btnst">
                    Remove Class Dynamically 
                </button>

            </div>
        );
    }
}

const btncomp2 = {
    backgroundColor: '#198754',
    marginLeft: 20
}

const btncomp3 = {
    backgroundColor: '#d44745',
    marginLeft: 20
}
export default MyComponentwo