import React from "react"

function FantasyItem(props) {
    const { img, name, ranking } = props

    return (
        <div className='wide-list' data-aos='fade-up'>
            <div className='wide-img-box'>
                <div className='img-box'>
                    <img src={ img } alt='' />
                </div>
            </div>
            <div className='wide-text-box'>
                <ul>
                    <li>豆瓣评分 : { ranking }</li>
                    <li>{ name }</li>
                </ul>
            </div>
        </div>
    )
}

export default FantasyItem