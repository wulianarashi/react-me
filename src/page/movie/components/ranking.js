import React, { PureComponent } from 'react'
import RankingItem from "./ranking-item"

class Ranking extends PureComponent {

    rankingList = () => {
        const { ranking } = this.props
        const newRanking = ranking.toJS()
        let nodeList = []

        if(newRanking.length) {
            newRanking.forEach( item => {
                nodeList.push(
                    <RankingItem key={ item.id } { ...item } />
                )
            })

            return (
                <div className='ranking-list' data-aos='flip-up'>{ nodeList }</div>
            )
        }else {
            return null
        }
    }

    render() {
        return (
            <div className='content content-d'>
                <div className='wide'>
                    <div className='wide-text'>
                        <h2 className='wide-title'>票房排行</h2>
                    </div>
                    { this.rankingList() }
                </div>
            </div>
        )
    }
}

export default Ranking