import { Component } from "react";

class Lifecylclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myboolval: false,
            mystateuser: "Kevo"
        }
        console.log("Component Constructor") ;

    }

    componentDidMount(){
        console.log("Component Mount") ;
        this.mysetime = setTimeout(() => {
            this.setState({
                mystateuser: "Brian"
            })
        }, 2000);
        /** You can also perform api call here the fetch method  */
    }
    
    componentWillUnmount(){
        clearTimeout(this.mysetime);
    }

    render() {
        console.log("Component Render") ;
        return (
        <div>
            {this.state.mystateuser}
        </div>
        );
    }

}

export default Lifecylclass;