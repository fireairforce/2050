import React, { Component } from 'react'
import { Form, Icon, Input, Button, message,Cascader,Radio } from 'antd'
import 'antd/dist/antd.css'
import './index.less'
import axios from 'axios'
const FormItem=Form.Item
const RadioGroup = Radio.Group;

class App extends Component {

  render() {
 
    return (
      <div className="jk">
         <h1 style={{textAlign:"center",fontSize:22,marginTop:'-10%',marginBottom:'15px'}}>2050编程竞赛捐赠活动</h1>
         <div>
           <p style={{lineHeight:"25px"}}>
           2050编程竞赛是CCPC与2050志愿者共同发起的面向全球编程爱好者的程序设计竞赛。比赛的宗旨是给广大编程爱好者提供一个学习和交流的平台，提高参赛者分析和解决实际问题的能力，发现并且培养在未来三十年能够通过技术一起改变世界的伙伴。你不必出身名校，不必身经百战，只要对编程充满热爱，对未来充满希望，我们相信你就是我们要找的对的人。<br/>
2019年4月26日到28日，上万年青人在杭州云栖小镇因科技而团聚。我们希望热爱编程的你们，也能来到2050。 <br/>
在这里，你会遇见另外一个人：你能遇见那些竞赛圈的大神们，听他们说说他们的故事；你能遇见IT科技界的大牛，了解他们今天做的事情；你能遇见那些不会写代码的人们，碰撞出新的火花。<br/>
在这里，你会看到世界的另一面：编程的你，可以造飞机制丝巾；编程的你，能让这个城市的交通不再堵塞；编程的你，可以帮助人类移民到火星。<br />
浙江卫视《预见2050》的一期节目将实时记录这次万人规模的编程竞赛，以及大家在2050遇见对方的场景。让我们共同创造这一次属于我们编程爱好者的活动。<br/>
所有收到的捐赠资金将在东北大学秦皇岛分校设立专门账户进行管理，用于支持本次2050编程竞赛的相关开支、购买2050 PASS和资助大学生的travel award申请。

           </p>
         </div>
         <div style={{marginTop:"10px",lineHeight:'25px'}}>
           <h3>一、捐赠原则	</h3>
           <h4>1.捐赠遵循自愿的原则；</h4>
           <h4>2.捐赠面向海内外所有关心青年成长的热心人士；	</h4>
           <h4>3.所有捐赠必须遵守法律法规，符合国家和社会公共利益。</h4>
           <h3>二、捐赠金额</h3>
           <p>“2050编程竞赛”捐赠不设定上下限，您的点滴心意将为本次活动的成功举办贡献磅礴力量。</p>
           <h3>三、捐赠方式</h3>
           <h4>（一）大额捐赠（1万元及以上）</h4>
           <p>1万元及以上的大额捐赠将通过张学良教育基金会进行，请联系王和兴老师（18630356775），签订捐赠协议完成捐赠。</p>
           <h4>（二）小额捐赠（1万元以下）通过如下方式进行</h4>
           <p>微信扫描二维码进行捐赠（请备注"2050编程竞赛"）</p>
           <div>
             <img src="http://lpf.yywlx.cn/asd1.jpg" alt="捐款" style={{width:300}} />
           </div>
         <h3>四、 票据、证书</h3>
         <p>1.您的捐赠记录我们将永久留存，我们将根据您的需要单独开具捐赠收据；<br/>
2.通过微信平台捐赠，会获得电子捐赠证书，所有捐赠方式均可申请纸质证书邮寄。
</p>
         <h3>五、注意事项</h3>
         <p>捐赠时请务必注明姓名、联系方式等信息，便于我们与您联系确认和鸣谢，如希望匿名捐赠，亦可注明。</p>
         </div>
         {/* <div style={{marginTop:15}}>
         <h3>六、特别鸣谢：</h3>
         <img src='http://lpf.yywlx.cn/IntelLogo.jpg' alt='Intel' style={{width:80}} />
         </div> */}
      </div>
    );
  }
}
const Apps =Form.create()(App)
export default Apps;

