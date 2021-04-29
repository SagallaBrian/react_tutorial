import { Component } from "react";

import Passparam1 from './section1';
import Passparam2 from './section2';

class PassingPar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myboolvar: false
        }
        this.changebool = this.changebool.bind(this);
        this.passparams = this.passparams.bind(this);
    }

    /**
     * In order to pass a value as a parameter through the 
     * onClick handler we pass in an arrow function 
     * which returns a call to the sayHello function.
     * https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn 
    */

    changebool() {
        this.setState({
            myboolvar: !this.state.myboolvar
        })
    }
    passparams(params) {
        console.log('The name passed is ', params);
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Normal React on Click</h4>
                    <button onClick={this.changebool}>Handle Click</button>
                </div>
                <Passparam1 propfunction={this.changebool} />
                <p>{this.state.myboolvar ? 'The value is true' : 'Value is false'}</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <div>
                    <h4>Passing Parameters on click</h4>
                    <button onClick={() => this.passparams('Kenneday')}>Handle Click</button>
                </div>
                <Passparam2 propfunction={this.passparams} />
                
                <p>&nbsp;</p>
            </div>
        );
    }
}

export default PassingPar;