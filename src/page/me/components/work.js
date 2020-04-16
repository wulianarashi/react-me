import React, { PureComponent } from 'react'
import WorkItem from './work-item'

class Work extends PureComponent {

    workList = () => {
        const { work } = this.props
        const newWork = work.toJS()
        let nodeList = []

        if (newWork.length) {
            newWork.forEach(item => {
                nodeList.push(
                    <WorkItem key={item.id} {...item} />
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
            <div className='me-b scroll' data-section="scroll2">
                <div className='me-wrapper'>
                    <h2 className='me-title'>工作经历</h2>
                    <div className='work-list'>
                        {this.workList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Work

