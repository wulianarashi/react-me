import React from 'react'

function SwiperItem(props) {
    const { url } = props
    
    return (
        <div className="swiper-slide">
            <img className='swiper-img' src={ url } alt='' />
        </div>
    )
}

export default SwiperItem