import React, { PureComponent } from 'react'
import { ScrollTop } from '../../../lib/fn'

class PageTop extends PureComponent {

    pageTop = () => {
        ScrollTop(0, 600)
    }
    
    render() {
        const { flag } = this.props
        
        return (
            <div className={ flag ? "page-top on" : "page-top"} onClick={ this.pageTop } >
                <div className="triangle"><i></i></div>
            </div>
        )
    }
}

export default PageTop