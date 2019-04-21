import React from 'react';
import {
    Form, Icon, Input, Button,message,Alert
  } from 'antd';
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import './index.less'
import axios from 'axios'
const FormItem = Form.Item;
class CheckOne extends React.Component{
   state = {
     document:''
   }
  componentDidMount(){
    axios.get('http://be2050.ccpc.io/document').then(res=>{
       this.setState({
           document:res.data.data.document
         })
      })
  }   
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
          axios.post('http://be2050.ccpc.io/login',{
              ...values
            }).then(res=>{
              if(res.data.code===0&&res.status===200){
                message.success("登录成功")
                this.props.dispatch(
                  routerRedux.push({
                     pathname:'/checkout',
                     query:{ ...res.data.data, name:values.name, mobile:values.phone }
                  })
                )
              }else {
                message.info('后台故障，无法登录')
              }
            })
          
          }
        });
        
      }
    render(){
           const one = 'checkone';
           const { getFieldDecorator } = this.props.form;
    return (
        <div className={`${one}-wrapper`}>
         <div className={`${one}-content`}>
          <Alert
           style={{width:'360px',margin:'0 auto'}}
            message={
                <div>
                   {this.state.document}
                </div>
            }
            type="info"
            showIcon
        />
         
        <Form onSubmit={this.handleSubmit} className={`${one}-login-form`}>
            <FormItem label="姓名">
            {getFieldDecorator('name', {
                rules: [{ required: true, message: '请填写您的姓名!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="姓名" />
            )}
            </FormItem>
            <FormItem label="手机">
            {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号码!' }],
            })(
                <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号"  />
            )}
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                登录
            </Button>
            </FormItem>
        </Form>
      </div>
      </div>
    );
  }
 }
 export default connect(({ app }) => ({ app }))(Form.create()(CheckOne));