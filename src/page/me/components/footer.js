import React from 'react'
import { Link } from 'react-router-dom'

function MeFooter() {
    return (
        <div className='me-footer'>
            <div className='me-wrapper'>
                <div className='nav-list'>
                    <ul>
                        <li>
                            <Link to='/'>交给岚吧</Link>
                        </li>
                        <li>
                            <Link to='/movie'>永远同在</Link>
                        </li>
                        <li>
                            <Link to='/'>vue</Link>
                        </li>
                        <li>
                            <Link to='/'>小程序</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MeFooter