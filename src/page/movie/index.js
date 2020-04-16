import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import Header from './components/header'
import Fantasy from './components/fantasy'
import Other from './components/other'
import Ranking from './components/ranking'
import PageTop from "./components/page-top"
import '../../assets/css/movie.scss'
import { actionCreators } from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Movie extends PureComponent {

    componentDidMount() {
        this.props.getData()
        this.windowScroll()
        this.aosInit()
    }

    aosInit = () => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }

    componentWillUnmount() {
        this.props.changeToggleFlag('reset')
		window.removeEventListener('scroll', this.props.changeToggleFlag);
	}

    windowScroll = () => {
		window.addEventListener('scroll', this.props.changeToggleFlag);
	}

    render() {
        const { flag, fantasy, other, ranking } = this.props

        return (
            <>
                <Header flag={ flag } />
                <div className='main'>
                    <div className='main-content'>
                        <div className='content content-a'></div>
                        <Fantasy fantasy={ fantasy } />
                        <Other other={ other } />
                        <Ranking ranking={ ranking } />
                    </div>
                </div>
                <div className='footer-fill'></div>
                <div className="bg-statement">
                    <div className="video-box" id='videoBox'>
                        <video width='1980' height='1080' id='video' 
                        src='http://vfx.mtime.cn/Video/2019/05/31/mp4/190531161026568494.mp4' autoPlay="autoplay" loop="" muted=""></video>
                    </div>
                </div>
                <PageTop flag={ flag } />
            </>
        )
    }
}

export default connect(state => ({
    flag: state.getIn(['movie', 'flag']),
    fantasy: state.getIn(['movie', 'fantasy']),
    other: state.getIn(['movie', 'other']),
    ranking: state.getIn(['movie', 'ranking']),
}), dispatch => ({
    getData() {
        dispatch(actionCreators.getMovieInfo())
    },
    changeToggleFlag(type) {
        //如果进来这个组件并让导航和返回顶部显示之后离开组件要重置显示开关
        if(type === 'reset') {
            dispatch(actionCreators.toggleFlag(false))
            return
        }

        const scroll = document.documentElement.scrollTop //滚动的距离
        const height = document.documentElement.clientHeight //当前可视高度

        if( scroll > height) {
            dispatch(actionCreators.toggleFlag(true))
        }else {
            dispatch(actionCreators.toggleFlag(false))
        }
    }
}))(Movie)