import React, { PureComponent } from 'react'
import FantasyItem from "./fantasy-item"

class Fantasy extends PureComponent {

    fantasyList = () => {
        const { fantasy } = this.props
        const newFantasy = fantasy.toJS()
        let nodeList = []

        if(newFantasy.length) {
            newFantasy.forEach( item => {
                nodeList.push(
                    <FantasyItem key={ item.id } { ...item } />
                )
            })

            return (
                <div className='wide-content'>{ nodeList }</div>
            )
        }else {
            return null
        }
    }

    render() {
        return (
            <div className='content content-b'>
                <div className='wide'>
                    <div className='wide-text'>
                        <h2 className='wide-title'>宫崎骏的奇妙世界</h2>
                    </div>
                    { this.fantasyList() }
                </div>
            </div>
        )
    }
}

export default Fantasy