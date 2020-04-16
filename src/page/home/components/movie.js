import React, { PureComponent } from 'react'
import Tv from './tv-item'
import Vs from './vs-item'

class Movie extends PureComponent {

    tvList = () => {
        const { tv } = this.props
        const newTv = tv.toJS()
        let nodeList = []
        if(newTv.length) {
            newTv.forEach( item => {
                nodeList.push(
                    <Tv key={ item.id } title={ item.title } time={ item.time } img={ item.img }/>
                )
            })
        }
        return (
            <ul>
                {nodeList}                    
            </ul>
        )
    }

    vsList = () => {
        const { vs } = this.props
        const newTv = vs.list
        let nodeList = []
        if(newTv !== undefined) {
            newTv.forEach( item => {
                nodeList.push(
                    <Vs key={ item.id } time={ item.time } title={ item.title } />
                )
            })
        }

        return (
            <>
                <div className='content-box'>
                    <div className='half'>
                        <img src={ vs.img } className='r-50' width='516' height='386' alt=''/>
                    </div>
                    <div className='half'>
                        <div className='half-main'>
                            <h3>{ vs.title }</h3>
                            <p>{ vs.desc }</p>
                        </div>
                    </div>
                </div>
                <div className='movie-list center'>
                    <ul className='vs'>
                        {nodeList} 
                    </ul>
                    <div className='btn-area'>
                        <span>查 看 更 多</span>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                <div className='movie wrapper'>
                    <div className='movie-list center'>
                        { this.tvList() }
                        <div className='btn-area'>
                            <span>查 看 更 多</span>
                        </div>
                    </div>
                </div>
                <div className='movie wrapper'>
                    { this.vsList() }
                </div>
            </>
        )
    }
}

export default Movie