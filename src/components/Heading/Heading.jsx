
const Heading = (props) => {
    
    console.log(props)
    return (
        <h1>
            <h1>{props.text}</h1>
            <h2>{props.lineTwo}</h2>
            <h3>third line of some text</h3>
            <h4>{props.lineFour}</h4>
        </h1>
    )
    
}




export default Heading