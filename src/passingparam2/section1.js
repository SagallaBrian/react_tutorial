function Sectionone(props) {

    return (
        <div style={{ padding: 5 }}>
            <h4>{props.mydta.subject} </h4>
            <p>{props.mydta.paragraph}</p>
            <p>Number of Vacant position: {props.mydta.nofvacant}</p>
            <button onClick={() => props.propfunction(props.mydta.messageid)}>Delete</button>
        </div>
    );

}

export default Sectionone;