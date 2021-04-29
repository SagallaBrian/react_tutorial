import { useState } from "react";

function Sectiontwo() {
    const[mydata, myChangedata]= useState("Click me") ;
    
    const [counta, changeCounta] = useState(0);

    function myfunction() {
        return changeCounta(counta - 1)
    }

    let arrofun = () => changeCounta(0);

    return (
        <div>
            
            <button onClick={()=> myChangedata("Clicked")}>Click to Change Text</button>
            <p>{mydata}</p>

            <button style={{ marginRight: 8 }}
                onClick={() => changeCounta(counta + 1)}>Increment Counter
            </button>

            <button style={{ marginRight: 8 }}
                onClick={myfunction}> Decrement Counter
            </button>

            <button onClick={arrofun}> Reset Counter</button>

            <p>{counta} </p>
        </div>
    );
}
export default Sectiontwo;