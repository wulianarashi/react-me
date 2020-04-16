import React, { PureComponent } from 'react'
import SwiperItem from './swiper-item'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class Header extends PureComponent {

    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay:true,
            speed:1500,
            effect: 'fade',
            observer:true,
            observeParents:true,
            observeSlideChildren:true,
        })
    }

    swiperList = () => {
        const { swiper } = this.props
        const newSwiper = swiper.toJS()
        let nodeList = []
        if(newSwiper.length) {
            newSwiper.forEach( item => {
                nodeList.push(
                    <SwiperItem key={item.id} url={item.img} />
                )
            })
        }
        return (
            <div className="swiper-wrapper">
                { nodeList }
            </div>
        )
    }

    render() {
        return (
            <div className='header'>
                <div className='swiper'>
                    <div className="swiper-container">
                        { this.swiperList() }
                    </div>
                </div>
                <div className='program-name'>交给岚吧</div>
            </div>
        )
    }
}

export default Header