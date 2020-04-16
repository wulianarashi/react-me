import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Menu from './components/menu'
import Header from './components/header'
import About from './components/about'
import Arashi from './components/arashi'
import Movie from './components/movie'
import Bottom from './components/bottom'
import Footer from './components/footer'
import '../../assets/css/home.scss'
import { actionCreators } from './store'

class Home extends PureComponent {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const { flag, menuToggle, swiper, about, tv, vs, happy } = this.props
       
        return (
            <>
                <Menu flag={ flag } menuToggle={ menuToggle }/>
                <div className='column-main'>
                    <Header swiper={ swiper } />
                    <About />
                    <Arashi about= { about } />
                    <Movie tv= { tv } vs={ vs }/>
                    <Bottom happy= { happy }/>
                    <Footer />
                </div>
            </>
        )
    }
}

export default connect(state => ({
    flag: state.getIn(['home', 'flag']),
    swiper: state.getIn(['home', 'swiper']),
	about: state.getIn(['home', 'about']),
	tv: state.getIn(['home', 'tv']),
	vs: state.getIn(['home', 'vs']),
	happy: state.getIn(['home', 'happy']),
}), dispatch => ({
    menuToggle(flag) {
        dispatch(actionCreators.toggleMenuShow(flag))
    },
    getData() {
        dispatch(actionCreators.getHomeInfo())
    }
}))(Home)