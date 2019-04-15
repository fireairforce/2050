import React, { Component } from 'react'
import axios from 'axios'
import './index.less'

class Success extends Component {
  state = {
    account: '',
    password: ''
  }

  componentDidMount () {
    this.getAccount()
  }

  getAccount = async () => {
    // const { name } = this.state;
    const { query } = this.props.location;
    const { name, mobile } = query
    const res = await axios('http://47.75.119.189/2050/getaccount', {
      method: 'POST',
      data: {
        name,
        mobile
      }
    })
    if (res && res.data && res.data.code === 0) {
      const { account, password } = res.data
      this.setState({ account, password })
    }
  }
   
  render () {


    const { account, password } = this.state
    const { query } = this.props.location; 
   return (
      <div className='emm'>
        <div className='emm1'>
          您已成功报名。
          <br />
          <p>报名序号：{query.number}</p>
          <p>姓名：{query.name}</p>
          <p>学校：{query.school}</p>
          <p>手机号码：{query.mobile}</p>
          <p>群聊号码: 979197486</p>
          {!!account && [<p>账号：{account}</p>, <p>密码：{password}</p>]}
        </div>
      </div>
    )
  }
}

export default Success
