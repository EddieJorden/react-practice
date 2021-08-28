import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, textColor, boldFont, fontSize }) => {

      

        return (
            <button
                onClick={onClick}
                className='btn'
                style={{ 
                    backgroundColor: color,
                    color: textColor,
                    width: '100px',
                    height: '64px',
                    fontWeight: boldFont,
                    fontSize: fontSize,
                    borderRadius: '10px',
                    marginBottom: '1rem' 
                }}
            >
                {text}
            </button>
        )

}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    borderRadius: PropTypes.string, 
    marginBottom: PropTypes.string
}

// ReactDOM.render(<Button />, document.getElementById('root'))

export default Button