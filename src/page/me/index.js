import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Menu from './components/menu'
import Basic from './components/basic'
import Work from './components/work'
import Project from './components/project'
import Echarts from './components/echarts'
import MeFooter from './components/footer'
import { actionCreators } from './store'
import '../../assets/css/me.scss'

class Me extends PureComponent {
    
    componentDidMount() {
        this.props.getData()
    }

    render() {
        const { basic, work, project } = this.props
        return (
            <div>
                <Menu />
                <div className='me-content'>
                    <Basic basic={ basic } />
                    <Work work={ work } />
                    <Project project={ project } />
                    <Echarts />
                    <MeFooter />
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    basic: state.getIn(['me', 'basic']),
    work: state.getIn(['me', 'work']),
    project: state.getIn(['me', 'project'])
}), dispatch => ({
    getData() {
        dispatch(actionCreators.getMeInfo())
    }
}))(Me)