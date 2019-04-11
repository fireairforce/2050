import React, { Component } from 'react'
import { Form, Input, Button, Icon, Alert, message } from 'antd'
import './index.less'
import axios from 'axios'

@Form.create()
class Account extends Component {
  state = {
    loading: false,
    success: false,
    message: '',
    account: '',
    password: ''
  }

  handleAccount = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.getAccount(values)
      }
    })
  }

  getAccount = async data => {
    this.setState({ loading: true })
    const res = await axios('http://47.75.119.189/2050/getaccount', {
      method: 'POST',
      data: data
    })

    if (res && res.data && res.data.code === 0) {
      const { account, password } = res.data
      this.setState({ success: true, loading: false, account, password })
    } else {
      this.setState({ message: res.data.message, success: false })
    }
    this.setState({ loading: false })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { loading, success, account, password, message } = this.state

    return (
      <div className='account-warp'>
        <h3 className='account-warp-title'>比赛账号查询</h3>
        <Form onSubmit={this.handleAccount}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入姓名!' }]
            })(<Input prefix={<Icon type='user' />} placeholder='请输入姓名' />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: '请输入手机号!' }]
            })(<Input prefix={<Icon type='mobile' />} placeholder='请输入手机号码' />)}
          </Form.Item>
          <Button type='primary' loading={loading} htmlType='submit' className='account-check-button'>
            {loading ? '查询中' : '查询账号'}
          </Button>
          {success && (
            <Alert
              message={
                <div>
                  <p>账号：{account}</p>
                  <p>密码：{password}</p>
                </div>
              }
              type='success'
              showIcon
            />
          )}
          {!success && !!message && <Alert message={message} type='error' showIcon />}
        </Form>
      </div>
    )
  }
}

export default Account
