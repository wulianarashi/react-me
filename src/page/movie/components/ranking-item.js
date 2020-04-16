import React from "react"

function RankingItem(props) {
    const { img, name, boxOffice } = props
    
    return (
        <div className='ranking-item'>
            <div className='img-box' style={{height:'0',paddingTop:'56%'}}>
                <img src={ img } alt='' />
            </div>
            <div className='ranking-text'>
                <ul className='ul-list'>
                    <li>{ name }</li>
                    <li>票房 : { boxOffice }</li>
                </ul>
            </div>
        </div>
    )
}

export default RankingItem