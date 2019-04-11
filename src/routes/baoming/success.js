import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
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
    const query = qs.parse(window.location.search || '')
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
    const query = qs.parse(window.location.search || '')

    return (
      <div className='emm'>
        <div className='emm1'>
          您已成功报名。
          <br />
          <p>报名序号：{query.number}</p>
          <p>姓名：{query.name}</p>
          <p>学校：{query.school}</p>
          <p>手机号码：{query.mobile}</p>
          {!!account && [<p>账号：{account}</p>, <p>密码：{password}</p>]}
        </div>
      </div>
    )
  }
}

export default Success
