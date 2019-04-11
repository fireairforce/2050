import React ,{Component} from 'react'
import './index.less'
let data={
  number:'',
  name:'',
  school:'',
  mobile:''
}
class Success extends Component
{
    
  
  render(){
    
    return(
      <div className="emm">
        <div className="emm1">
             您已成功报名。<br />
           
                <p>报名序号：{this.props.location.query.number}</p>
                <p>姓名：{this.props.location.query.name}</p>
                <p>学校：{this.props.location.query.school}</p>
                <p>手机号码：{this.props.location.query.mobile}</p>
     
            
        </div>
      </div>  
    )
  }
}

export default Success 