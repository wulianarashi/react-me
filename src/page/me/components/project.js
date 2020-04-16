import React, { PureComponent } from 'react'
import ProjectItem from './project-item'

class Project extends PureComponent {
    
    projectList = () => {
        const { project } = this.props
        const newProject = project.toJS()
        let nodeList = []

        if (newProject.length) {
            newProject.forEach(item => {
                nodeList.push(
                    <ProjectItem key={item.id} {...item} />
                )
            })

            return (
                <ul>{nodeList}</ul>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className='me-c scroll' data-section="scroll3">
                <div className='me-wrapper'>
                    <h2 className='me-title'>项目经历</h2>
                    <div className='project-list'>
                        { this.projectList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Project