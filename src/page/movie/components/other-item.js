import React from "react"

function OtherItem(props) {
    const { img, ranking, name } = props
    
    return (
        <div className='movie-item'>
            <div className='img-box' style={{height:'272px'}}>
                <img src={ img } alt=''></img>
            </div>
            <div className="movie-text">
                <ul className='ul-list'>
                    <li>{ name }</li>
                    <li>豆瓣评分 : { ranking }</li>
                </ul>
            </div>
        </div>
    )
}

export default OtherItem