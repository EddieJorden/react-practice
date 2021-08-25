import React from 'react';
import ReactDOM from 'react-dom'

const Button = ({ color, text, onClick }) => {


        return (
            <button
                onClick={onClick}
                className='btn'
                style={{ backgroundColor: color }}
            >
                {text}
            </button>
        )

}

ReactDOM.render(<Button />, document.getElementById('root'))

export default Button