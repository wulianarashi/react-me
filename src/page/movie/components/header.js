import React, { PureComponent } from "react"
import wulianlan from '../../../assets/imgs/wulianlan.png'
import { Link } from 'react-router-dom'

class Header extends PureComponent {

    render() {
        const { flag } = this.props

        return (
            <div className={ flag ? 'header-top on':'header-top' }>
                <div className='header-top-inner'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <img src={wulianlan} alt='' className='wulianlan' />
                            </li>
                            <li>
                                <Link to='/home'><span>交给岚吧</span></Link>
                            </li>
                            <li>
                                <Link to='/me'><span>轮到我了</span></Link>
                            </li>
                            <li>
                                <Link to='/me'><span>vue</span></Link>
                            </li>
                            <li>
                                <Link to='/me'><span>小程序</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header