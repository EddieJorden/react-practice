import React from 'react';
import ReactDOM from 'react-dom'

const Button = ({ color, text, onClick, textColor, boldFont, fontSize }) => {

      

        return (
            <button
                onClick={onClick}
                className='btn'
                style={{ backgroundColor: color, color: textColor, width: '100px', height: '64px', fontWeight: boldFont, fontSize: fontSize, borderRadius: '10px', marginBottom: '1rem' }}
            >
                {text}
            </button>
        )

}

ReactDOM.render(<Button />, document.getElementById('root'))

export default Button