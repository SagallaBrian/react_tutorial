function Functionlistwo(props) {
    let arrofob = props.arrtwo;
    let mylist = arrofob.map((objelem) => {
        return <div key={objelem.messageid} style={{ paddingTop: 20 }}>
            <h3>{objelem.subject}</h3>
            <p>{objelem.paragraph}</p>
        </div>
    });
    return mylist;
}

export default Functionlistwo;