import React, { PureComponent } from 'react'

class Arashi extends PureComponent {

    initText = () => {
        const { about } = this.props
        const str = about.desc
        let newStr = []
        if(str !== undefined) {
            newStr = str.split('，')
            return (
                <>
                    { newStr[0] } 
                    <br />
                    { newStr[1] }
                </>
            )
        }else {
            return null
        }
    }

    render() {
        const { about } = this.props
        return (
            <div className='arashi'>
                <h2>{ about.title }<br />介绍</h2>
                <p>{ this.initText() }</p>
                <div className='content-box'>
                    <div className='half'>
                        <div className='half-main'>
                            <h3>{ about.subTitle }</h3>
                            <p>{ about.subDesc }</p>
                        </div>
                    </div>
                    <div className='half'>
                        <img src={ about.img } className='r-50' width='516' height='386' alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arashi