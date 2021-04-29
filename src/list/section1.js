function Functionlistone({ arrone }) {
    const listnums = arrone.map((arrelem) => {
        return <li key={arrelem.toString()}>{arrelem}</li>
    })

    return (
        <ul>
            {listnums}
        </ul>
    );
}

export default Functionlistone;