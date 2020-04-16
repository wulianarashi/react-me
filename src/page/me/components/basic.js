import React, { PureComponent } from 'react'
import BasicItem from './basic-item'

class Basic extends PureComponent {
    
    basicList = () => {
        const { basic } = this.props
        const newBasic = basic.toJS()
        let nodeList = []

        if(newBasic.length) {
            newBasic.forEach( item => {
                nodeList.push(
                    <BasicItem key={ item.id } {...item} />
                )
            })

            return (
                <ul>{ nodeList }</ul>
            )
        }else {
            return null
        }
    }

    render() {
        return (
            <div className='me-a scroll' data-section="scroll1">
                <h3><span>如 果 是 无 脸 岚 的 话 ,</span><br /><span>一 定 可 以 做 到 .</span></h3>
                <div className='me-wrapper'>
                    <div className='school-img'>
                        <img src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1387980871,869952190&fm=26&gp=0.jpg' alt='' />
                    </div>
                </div>
                <div className='base-info'>
                    <div className='info-box'>
                        { this.basicList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Basic