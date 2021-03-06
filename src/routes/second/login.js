import React , {Component} from 'react'
import { connect } from 'dva'
import { Form, Input, Row, Col,message } from 'antd'
import { randomNum, calculateWidth } from '../../utils/utils'
import PromptBox from './test'
import axios from 'axios'
import { routerRedux } from 'dva/router';
let  time=true;

class Login extends Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
    code: ''         //验证码
  }

  componentDidMount () {
    this.createCode()
  }

  /**
   * 生成验证码
   */
  createCode = () => {
    const ctx = this.canvas.getContext('2d')
    const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let code = ''
    ctx.clearRect(0, 0, 80, 39)
    for (let i = 0; i < 4; i++) {
      const char = chars[randomNum(0, 57)]
      code += char
      ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
      ctx.fillStyle = '#D3D7F7'
      ctx.textBaseline = 'middle'
      ctx.shadowOffsetX = randomNum(-3, 3)
      ctx.shadowOffsetY = randomNum(-3, 3)
      ctx.shadowBlur = randomNum(-3, 3)
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      let x = 80 / 5 * (i + 1)
      let y = 39 / 2
      let deg = randomNum(-25, 25)
      /**设置旋转角度和坐标原点**/
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(char, 0, 0)
      /**恢复旋转角度和坐标原点**/
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    }
    this.setState({
      code
    })
  }
   // 2、节流函数体
   throttle=(fn)=> {
    // 4、通过闭包保存一个标记
    let canRun = true;
    
    return function() {
      // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
      if(!canRun) {
        return;
      }
      // 6、将 canRun 设置为 false，防止执行之前再被执行
      canRun = false;
      
      // 7、定时器
      setTimeout( () => {
        fn.call(this, arguments);
        // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
        canRun = true;
      }, 6000);
    };
  }

  // 3、需要节流的事件
 getData(values){
   console.log("ca")
   
    
    axios('http://47.75.119.189/2050/login',{
      method:'POST',
      data:{mobile:values.mobile,password:values.password}
    }).then(res=>{
      console.log(res)
      if(res.data.code!=0){
        message.error(res.data.message)
      }else{
        if(res.status===200){
          
          this.props.dispatch(
            routerRedux.push({
               pathname:'/sq',
               query:{
                 token:res.data.code===0?res.data.token:'',
                 mobile:values.mobile,
                 pathname:'/login'
               }
            })
          )
        }
      }
    })
    console.log("csd")
   
 }
  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 表单登录时，若验证码长度小于4则不会验证，所以我们这里要手动验证一次，线上的未修复
        if (this.state.code.toUpperCase() !== values.verification.toUpperCase()) {
          this.props.form.setFields({
            verification: {
              value: values.verification,
              errors: [new Error('验证码错误')]
            }
          })
          return
        }
      
      if(time===true){
        time=false
        console.log("csd")
        axios('http://47.75.119.189/2050/login',{
          method:'POST',
          data:{mobile:values.mobile,password:values.password}
        }).then(res=>{
          console.log(res)
          if(res.data.code!=0){
            message.error(res.data.message)
          }else{
            if(res.status===200){
              
              this.props.dispatch(
                routerRedux.push({
                   pathname:'/sq',
                   query:{
                     token:res.data.code===0?res.data.token:'',
                     mobile:values.mobile
                     
                   }
                })
              )
            }
          }
        })
      }else{
        return
      }
      
      setTimeout( () => {
       time=true
      }, 6000);
       
      }
    })
  }
  register = () => {
    this.props.switchShowBox('register')
    setTimeout(() => this.props.form.resetFields(), 500)
  }
  render () {
    const {getFieldDecorator, getFieldError} = this.props.form
    const {focusItem, code} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>用户登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item help={getFieldError('mobile') &&
          <PromptBox info={getFieldError('mobile')} width={calculateWidth(getFieldError('mobilenpm '))}/>}>
            {getFieldDecorator('mobile', {
              rules: [{required: true, message: '请输入手机号码'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='手机号码'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('password') &&
          <PromptBox info={getFieldError('password')} width={calculateWidth(getFieldError('password'))}/>}>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('verification') &&
          <PromptBox info={getFieldError('verification')} width={calculateWidth(getFieldError('verification'))}/>}>
            {getFieldDecorator('verification', {
              validateFirst: true,
              rules: [
                {required: true, message: '请输入验证码'},
                {
                  validator: (rule, value, callback) => {
                    if (value.length >= 4 && code.toUpperCase() !== value.toUpperCase()) {
                      callback('验证码错误')
                    }
                    callback()
                  }
                }
              ]
            })(
              <Row>
                <Col span={15}>
                  <Input
                    onFocus={() => this.setState({focusItem: 2})}
                    onBlur={() => this.setState({focusItem: -1})}
                    maxLength={4}
                    placeholder='验证码'
                    addonBefore={<span className='iconfont icon-securityCode-b'
                                       style={focusItem === 2 ? styles.focus : {}}/>}/>
                </Col>
                <Col span={9}>
                  <canvas onClick={this.createCode} width="80" height='39' ref={el => this.canvas = el}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录'/>
            <span className='registerBtn' onClick={this.register}>忘记密码</span>
          </div>
        </Form>
        {/* <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div> */}
      </div>
    )
  }
}



const styles = {
  focus: {
    width: '20px',
    opacity: 1
  },
}
export default connect(({ app }) => ({ app }))(Form.create()(Login))