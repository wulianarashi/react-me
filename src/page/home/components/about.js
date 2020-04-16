import React from 'react'
import arashi from '../../../assets/imgs/home/index_arashi.png'

function About() {
    return (
        <div className='about'>
            <div className='wrapper'>
                <div className='about-box center'>
                    <div className='about-content'>
                        <h2>交给岚吧<br />介绍</h2>
                        <p>
                            交给岚吧「岚にしやがれ」 是日本电视台的超即兴综艺节目，每期嘉宾和内容全部保密，由2010年4月24日起每周六晚9时（北京时间8时）播出。
                        </p>
                        <img src={ arashi } alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About