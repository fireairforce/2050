import React , {Component} from 'react'
import {Button,Form,Input,Radio,Cascader,message} from 'antd'
import styles from './First.less'
import schools from '../../utils/choice'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import axios from 'axios'
const FormItem = Form.Item
const RadioGroup = Radio.Group
let data,province,school
let flag=true

class Second extends Component{
  constructor(props){
    super(props)
    this.state={
      value:"male",
      prov:'',
      scl:''
    }
  }
  onChanges = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  }  
  onChange=(value)=>{
    province=value[0]
    school=value[1]
    this.setState({
        scl:school,
        prov:province
    })
  }
  componentDidMount(){
    
    data=this.props.location.query
    // console.log(data)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(this.state);
        // const { prov } = this.state;
        let sc=school?school.replace(/\d/g, ''):'职场人士'
        if(sc==='其他学校'){
            sc=values.sn
        } 
        let abc = {
          ...values,
          ...data,
          province,
          school: sc,
          college:' 1',
          major:'1 ',
          stu_code:' 1',
          grade:' 1',
          last_name:" 1",
          first_name:' 1',
          email:'1 ',
          sex:this.state.value
        }
        delete abc.sn
        if(flag===true){
           flag=false
        //    console.log("dcsa")
           axios("http://47.75.119.189/2050/baoming",{
            method:'POST',
            data:{...abc}
          }).then((res)=>{
            if(res.data.code!=0){
              message.error(res.data.message)
            }else{
              if(res.status===200){
                message.success("报名成功")
                // console.log(res)
                this.props.dispatch(
                  routerRedux.push({
                     pathname:'/success',
                     query:{...abc,number:res.data.data.users_id}
                  })
                )
              }
            }
          })
       }
        setTimeout( () => {
            flag=true
         }, 6000);
       }
     })
  }
  render(){
   const { scl } = this.state;   
   const {getFieldDecorator} =this.props.form
    return(
      <div className="login-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的姓名' }]
          })(
            <Input  placeholder='请输入你的姓名' />
          )}
        </FormItem>
        {/* <FormItem>
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: '英文姓' }]
          })(
            <Input  placeholder='请输入你的英文姓' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: '英文名' }]
          })(
            <Input  placeholder='请输入你的英文名' />
          )}
        </FormItem> */}
        <div style={{display:"flex",marginBottom:'20px'}}>
         <div>
           性别：
         </div>
         <div>
         <RadioGroup onChange={this.onChanges} value={this.state.value}>
        <Radio value="male">男</Radio>
        <Radio value="female">女</Radio>
       
      </RadioGroup>
         </div>
       </div>
        <FormItem>
          {getFieldDecorator('t_shirt_size', {
            rules: [{ required: true, message: 'T恤大小' }]
          })(
            <Input  placeholder='请输入你的T恤大小' />
          )}
        </FormItem>
        <Cascader options={schools} onChange={this.onChange} placeholder="请选择学校" style={{marginBottom:"30px"}}/>
        {
            scl==='其他学校'?
            <FormItem>
               {getFieldDecorator('sn', {
                    rules: [{ required: true, message: '请输入你学校的名称' }]
                })(
                    <Input  placeholder='请输入你的学校名称' />
                )}
            </FormItem>
        :''}
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请设置密码' }]
          })(
            <Input type="password" placeholder='请设置密码' />
          )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            提交报名
          </Button>
        </FormItem>
          </Form>
      </div>
    )
  }
}
export default connect(({ app }) => ({ app }))(Form.create()(Second));