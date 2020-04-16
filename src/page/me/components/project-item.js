import React from 'react'

function ProjectItem(props) {
    const { name, desc } = props
    
    return (
        <li>
            <div>
                <span>{ name }</span>
                <p>{ desc }</p>
            </div>
        </li>
    )
}

export default ProjectItem