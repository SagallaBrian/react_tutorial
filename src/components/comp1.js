import { Component } from "react";

class MyComponentone extends Component {

    render() {

        const apiimage = "https://www.api.komplab.com/images/img14.jpg";
        const mylink = "https://www.komplab.com/courses/coview/5f3bb688e76d5";

        // Destructuring Prop Object 
        const { myuser, mytitle } = this.props

        const myobj = {
            disabled: true,
            className: 'btnst'
        }

        return (
            <div id="mydiv">
                <h2 style={{ color: '#e437a1' }}> Welcome to {mytitle}</h2>
                <p style={divStyle}> {myuser} </p>
                <p>
                    <img src={apiimage} alt="Komplab Api Images" id="styleimage" />
                </p>
                <p>
                    <a href={mylink}> Link</a>
                </p>
                <p>
                    <button style={btnstylin}>
                            Click here
                    </button>
                </p>
                <p>
                    <button {...myobj}>
                            Disabled Button
                    </button>
                </p>

            </div>
        );
    }
}

MyComponentone.defaultProps = {
    mytitle: 'First Component'
}

const divStyle = {
    color: '#007bff',
    backgroundColor: '#d6d2d2',
    padding: 20
}

const btnstylin = {
    padding: '11px 9px',
    backgroundColor: '#0d6efd',
    border: ' 1px solid transparent',
    color: '#f8f8f8',
    borderRadius: 3
}

export default MyComponentone;