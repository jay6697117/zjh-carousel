import React, { Component } from 'react'

import Carousel from 'rc-carousel'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
          <img src="https://mn-duoshanghu.oss-cn-beijing.aliyuncs.com/xndj/01431202111011216072739.png" alt="1" />
          <img src="https://mn-duoshanghu.oss-cn-beijing.aliyuncs.com/xndj/4a98a202111011216122704.png" alt="2" />
          <img src="https://mn-duoshanghu.oss-cn-beijing.aliyuncs.com/xndj/79406202111011216222635.png" alt="3" />
          <img src="https://mn-duoshanghu.oss-cn-beijing.aliyuncs.com/xndj/b329220211101121627398.png" alt="1" />
        </Carousel>
      </div>
    )
  }
}
