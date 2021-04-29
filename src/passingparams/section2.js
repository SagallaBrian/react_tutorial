function Functionasprop2(props) {

    return (
        <div>
            <p>The function passed as Prop has a Parameter</p>
            <button onClick={() => props.propfunction('Micah')}>Passed params</button>
        </div>
    );

}

export default Functionasprop2;