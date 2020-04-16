import React from 'react'

function BasicItem(props) {
    const { title, content } = props
    
    return (
        <li>{ title } : <span> { content } </span> </li>
    )
}

export default BasicItem