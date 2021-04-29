import { Component } from "react";

import Passparam1 from './section1';
// import Passparam2 from './section2';

class PassingPar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myboolvar: false,
            arrofobjs: [
                {
                    messageid: 1,
                    subject: 'Software Developer',
                    paragraph: 'I am looking for a Software Developer',
                    nofvacant: 2
                },
                {
                    messageid: 2,
                    subject: 'Website App Developer',
                    paragraph: 'I am looking for a Website App Developer',
                    nofvacant: 5
                },
                {
                    messageid: 3,
                    subject: 'Network Engineer',
                    paragraph: 'I am looking for a Network Engineer',
                    nofvacant: 7
                },
            ]
        }
        this.passparams = this.passparams.bind(this);
        this.resetfunction = this.resetfunction.bind(this);
    }

    resetfunction(){
        const restet = this.state.arrofobjs.map((arrelem)=>{
            arrelem.nofvacant = 0
            return arrelem
        });
        this.setState({
            arrofobjs: restet
        })
    }

    passparams(params) {
        console.log('The name passed is ', params);
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.resetfunction}>Reset Number Of Vacant</button>
                </p>
              
                {this.state.arrofobjs.map((numelem) =>
                    <Passparam1 key={numelem.messageid}
                        propfunction={this.passparams} mydta={numelem} />)}
            </div>
        );
    }
}

export default PassingPar;