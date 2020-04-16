import React, { PureComponent } from 'react'
import ReactEcharts from 'echarts-for-react'

class Echarts extends PureComponent {
    
    getOption = () => {
        return {
            title: {
                text: '主要技能',
                // subtext: '',
                x: 'left'
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4']
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [35, 130],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    x: '0',               // for funnel
                    max: 40,                // for funnel
                    sort: 'ascending',     // for funnel
                    data: [
                        { value: 10, name: 'vue' },
                        { value: 8, name: '小程序' },
                        { value: 14, name: 'react' },
                    ]
                }
            ],
            color: ['#FAD860', '#9BCA63', '#FE8463']
        }
    }

    render() {
        return (
            <div className='me-d scroll' data-section="scroll4">
                <div className='me-wrapper'>
                    <h2 className='me-title'>技能说明</h2>
                    <div className='me-echarts'>
                        <ReactEcharts
                            option={this.getOption()}
                            notMerge={true}
                            lazyUpdate={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Echarts