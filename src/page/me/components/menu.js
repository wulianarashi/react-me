import React, { PureComponent } from 'react'
import { ScrollTop } from '../../../lib/fn'
import logo from '../../../assets/imgs/wulianlan.png'

class Menu extends PureComponent {
    
    componentDidMount() {
        this.windowScroll()
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.scrolling);
	}

    windowScroll() {
		window.addEventListener('scroll', this.scrolling);
	}

    goto = (e) => {
        const scrollElement = [...document.querySelectorAll('.scroll')].filter(ele => {
            return ele.getAttribute('data-section') === e.target.getAttribute('data-current')
        })

        ScrollTop(scrollElement[0].offsetTop+5, 700)
    }

    scrolling = () => {
        document.querySelectorAll('.scroll').forEach( item => {
            const top =  item.offsetTop  //获取当前scroll距离顶部的高度
            const height = top + item.offsetHeight //让自身高度和距离顶部的高度相加
            const scroll = document.documentElement.scrollTop
            
            if (top < scroll && height > scroll) {
                document.querySelectorAll('.goto').forEach( element => {
                    if(element.getAttribute('data-current') === item.getAttribute('data-section')) {
                        element.classList.add('on')
                    }else {
                        element.classList.remove('on')
                    }
                })
            }
        })
    }

    render() {
        return (
            <div className='me-menu'>
                <div className='me-box'>
                    <div className='me-top'>
                        <div className='me-img'>
                            <img src={logo} alt='' />
                        </div>
                        <p>
                            <span>无脸岚</span>
                            <br />
                            <span>18262455427</span>
                        </p>
                    </div>
                    <div className='me-bottom'>
                        <ul onClick={(e) => { this.goto(e) }}>
                            <li className='goto on' data-current='scroll1'>基 本 信 息</li>
                            <li className='goto' data-current='scroll2'>工 作 经 历</li>
                            <li className='goto' data-current='scroll3'>项 目 经 历</li>
                            <li className='goto' data-current='scroll4'>技 能 说 明</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
