import React, { PureComponent } from 'react'
import HappyItem from './happy-item'

class Bottom extends PureComponent {

    happyList = () => {
        const { happy } = this.props
        const newHappy = happy.toJS()
        let nodeList = []
        if(newHappy.length) {
            newHappy.forEach( item => {
                nodeList.push(
                    <HappyItem key={ item.id } img={ item.img }/>
                )
            })
        }
        return (
            <ul className='photo-list '>
                { nodeList }                   
            </ul>
        )
    }

    render() {
        return (
            <div className='bottom wrapper'>
                <div className='bottom-box center'>
                    <div className='half'>
                        <h2>最新动态</h2>
                        <ul className='news'>
                            <li className='half'>
                                <div className='news-img'>
                                    <span className='span-bg' style={{ backgroundImage: 'url("http://n.sinaimg.cn/ent/transform/253/w630h423/20200217/749a-iprtayy9065018.jpg' }}></span>
                                </div>
                                <div className='news-content'>
                                    <span className='news-time'>2020.2.17</span>
                                    <p>岚组合北京演唱会将取消 今日发表正式声明</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='half'>
                        <h2>Are You Happy ?</h2>
                        { this.happyList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom