import PropTypes from 'prop-types'


const Heading = ({text}) => {
    
    console.log({text})
    return (
        <h1 >
            <h1>{text}</h1>
       
 
        </h1>
    )
    
    
}
Heading.propTypes = {
    text: PropTypes.string
}



export default Heading