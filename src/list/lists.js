import { Component } from "react";

import ListFunct1 from './section1';
import ListFunct2 from './section2';

const myarrnum = [2, 7, 5, 9];
const myarrobj = [
    {
        messageid: 1,
        subject: 'Software Developer',
        paragraph: 'Hey I am writing to inquire '
    },
    {
        messageid: 2,
        subject: 'Website App Developer',
        paragraph: 'About the application that i made'
    }
];

class MyMainclass extends Component {
    render() {
        return (
            <div id="mydiv">
                <ListFunct1 arrone={myarrnum} />
                <ListFunct2 arrtwo={myarrobj} />
                <ul style={{ paddingTop: 20 }}>
                    {myarrnum.map((numelem) => {
                        return <li key={numelem.toString()}>
                            {numelem}
                        </li>
                    })}
                </ul>

            </div>
        );
    }
}

export default MyMainclass;