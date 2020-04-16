import React from 'react'

function Tv(props) {
    const { title, time, img } = props
    
    return (
        <li>
            <img src={img} alt='' />
            <div className='context-list'>
                <em>NEW</em>
                <span>{time}</span>
            </div>
            <h4>{title}</h4>
        </li>
    )
}

export default Tv