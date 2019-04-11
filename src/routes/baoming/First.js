import React , {Component} from 'react'
import {Form,Input,Button,message} from 'antd'
import {connect} from 'dva'
import { withRouter, routerRedux } from 'dva/router'
const FormItem=Form.Item
import 'antd/dist/antd.css'
import axios from 'axios'
import styles from './First.less'
let flag=true

class First extends Component {
  constructor(props){
    super(props)
    this.state={
      phone:false,
      count:60,
      flag:false
    }
  }
  countDown=() =>{
    const {count} = this.state;
    if (count === 1) {
      this.setState({
        count: 60,
        phone: false,
        flag:false
      })    
    } else {
      this.setState({
        count: count - 1,
        phone: true,
      })   
      setTimeout(this.countDown, 1000);
    }
  }
  getPhone = (e) => {
    const {phone} = this.state;
    if (phone) {
      return
    }
    
   if(this.state.count===60){
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if(!err){
        this.countDown()
        console.log(values)
        axios("http://47.75.119.189/2050/mobileauth",{
          method:'POST',
          data:{
            mobile:values.mobile
          }
        }).then(res=>{
          console.log(res)
          if(res.data.code===0){
           
            if(res.status===200){
              message.success("验证码已发送")
            }
          }else{
            message.error(res.data.message)
          }
        })
      }
    })
   }
  
  };
  handleSubmit = (e) => {
    this.setState({
      flag:true
    })
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        if(flag===true){
          
          flag=false
          axios("http://47.75.119.189/2050/checkauthcode",{
          method:'POST',
          data:{...values}
        }).then((res)=>{
          console.log(res)
          if( res.data.code !=0){
            message.error(res.data.message)
          } else if (res.data.code === 0) {
            this.props.dispatch(
              routerRedux.push({
                pathname: '/second',
                query: {...values}
              })
            )
          }
        })
        }
        setTimeout( () => {
          flag=true
          }, 6000);
       }
     })
  }
  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="login-form">
         <h1 style={{textAlign:"center",marginBottom:"30px"}}>欢迎报名参加2050编程竞赛</h1>
         <Form onSubmit={this.handleSubmit} className='login-form'>
         <div style={{display:'flex'}}>
         <div>
         <FormItem>
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: '请输入你的手机号' }]
          })(
            <Input  placeholder='请输入你的手机号' style={{width:'140px'}}/>
          )}
        </FormItem>
         </div>
         <div style={{paddingLeft:'50px'}} className="yzm">
           <Button type="primary"   onClick={this.getPhone}>{this.state.phone?`${this.state.count}秒重发`:"获取验证码"}</Button>
         </div>
       </div>
       <FormItem>
          {getFieldDecorator('auth_code', {
            rules: [{ required: this.state.flag, message: '请输入验证码' }]
          })(
            <Input  placeholder='请输入验证码' />
          )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            下一步
          </Button>
        </FormItem>

         </Form>
      </div>
    )
  }
}
export default connect(({ app }) => ({ app }))(Form.create()(First));
