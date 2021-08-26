import React from 'react';
import ReactDOM from 'react-dom'

const Button = ({ color, text, onClick }) => {


        return (
            <button
                onClick={onClick}
                className='btn'
                style={{ backgroundColor: color, width: '100px', height: '64px' }}
            >
                {text}
            </button>
        )

}

ReactDOM.render(<Button />, document.getElementById('root'))

export default Button