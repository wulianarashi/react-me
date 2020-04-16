import React, { PureComponent } from 'react'
import OtherItem from "./other-item"

class Other extends PureComponent {

    otherList = () => {
        const { other } = this.props
        const newOther = other.toJS()
        let nodeList = []

        if(newOther.length) {
            newOther.forEach( item =>{
                nodeList.push(
                    <OtherItem key={ item.id } {...item} />
                )
            })

            return (
                <div className='movie-list '>{ nodeList } </div>
            )
        }else {
            return null
        }
    }

    render() {
        return (
            <div className='content content-c' data-aos="fade-up">
                <div className='wide m-auto'>
                    <div className='wide-text'>
                        <h2 className='wide-title'>其他作品</h2>
                    </div>
                    <div className='wide-box'>
                        { this.otherList() }
                    </div>
                    <div className="more-box">
                        <div className="more-link"><span>more</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Other