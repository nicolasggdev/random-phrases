import React from 'react'

// Styles
import "./Button.styles.css"

const Button = ({position, randomColor, color}) => {
    
    const styles = {
        background: color
    };

    return (
        <div className='Button-container'>
            <button className='Button' style={styles} onClick={() => { position(); randomColor();}}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </button>
        </div>
    )
}

export default Button
