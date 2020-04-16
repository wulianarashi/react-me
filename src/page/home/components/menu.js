import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Menu extends PureComponent {

    changeShow = (flag) => {
        this.props.menuToggle(!flag)
    }

    componentWillUnmount() {
        this.props.menuToggle(false)
    }

    render() {
        const { flag } = this.props

        return (
            <div className='column-sub'>
                <div className='nav'>
                    <div className={ flag ? 'toggle active':'toggle' } onClick={ () => this.changeShow(flag) }>
                        <div><span></span><span></span><span></span></div>
                    </div>
                    <div className={ flag ? 'menu':'menu hide' }>
                        <div className='menu-nav'>
                            <div className='menu-area'>
                                <div className='menu-title'>
                                    <h2>无脸岚的个人向网站</h2>
                                </div>
                                <div className='menu-content'>
                                    <dl>
                                        <dt>导航</dt>
                                        <dd><Link to='/movie'>永远同在</Link></dd>
                                        <dd><Link to='/me'>轮到我了</Link></dd>
                                    </dl>
                                    <dl>
                                        <dt>相关</dt>
                                        <dd>vue</dd>
                                        <dd>小程序</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu