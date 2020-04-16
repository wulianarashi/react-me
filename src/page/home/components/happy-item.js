import React from 'react'

function HappyItem(props) {
    const { img } = props
    
    return (
        <li>
            <span className='span-bg' style={{ backgroundImage: `url(${img})` }}></span>
        </li>
    )
}

export default HappyItem