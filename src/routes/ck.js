import React, {Component} from 'react'
import { Card,message } from 'antd'
import {connect} from 'dva'
import axios from 'axios'
import { routerRedux } from '../../node_modules/dva/router';

class Ck extends Component{
  
 
  handleSubmit = () => {
    this.props.dispatch(
      routerRedux.push({
        pathname:'/sq',
         query:{
            token:this.props.location.query.token,
          mobile:this.props.location.query.mobile
        }
      })
    )
  }
  
  render(){
    
   
    return(
      <div className="login-form">
       <Card
      title="帐号查看"
      extra={<span onClick={this.handleSubmit}>资助申请</span>}
      style={{ width: 300 }}
    >
     <p>帐号为：{this.props.location.query.data.account}</p>
     <p>密码为：{this.props.location.query.data.password}</p>
    </Card>
      </div>
    )
  }
}
export default connect(({ app }) => ({ app }))(Ck);