import React from 'react';
import {
    Form, Icon, Input, Button,Radio ,Select,Alert,DatePicker, TimePicker,message
  } from 'antd';
import './index.less'
import axios from 'axios'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class CheckTwo extends React.Component{
    state = {
        flag1:false,
        flag2:false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { school,sex,users_id ,name,mobile} = this.props.location.query;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(Object.values(values).length);
             if(Object.values(values).length===1){
               console.log('');
              axios.post('http://be2050.ccpc.io/baoming',{
                ...values,
                mobile,
                name,
                sex,
                school,
                users_id,
                pi_zhun_jin_e: 0,
                shen_qing_jin_e:0,
                is_award:'否',
                is_passed:'否',
                arrive_car_info:'无',
                arrive_date:'无',
                leave_car_info:'无',
                leave_date:'无',
                beizhu:'无',
                alipay:'无'
            }).then(res=>{
                 if(res.data.code===0){
                   message.success("提交成功")
                 }
            })
              return;
             } else if(Object.values(values).length===8){
               const value = {
                ...values,
                arrive_date:values['arrive_date'].format('YYYY-MM-DD'),
                leave_date: values['leave_date'].format('YYYY-MM-DD'),
              }
              console.log(value);
                axios.post('http://be2050.ccpc.io/baoming',{
                  ...value,
                  mobile,
                  name,
                  sex,
                  school,
                  users_id,
                  shen_qing_jin_e:'无',
                  pi_zhun_jin_e:'无',
              }).then(res=>{
                  if(res.data.code===0){
                    message.success("提交成功")
                  }
              })
              return;
             }
             const value = {
               ...values,
               arrive_date:values['arrive_date'].format('YYYY-MM-DD'),
               leave_date: values['leave_date'].format('YYYY-MM-DD'),
             }

             axios.post('http://be2050.ccpc.io/baoming',{
                 ...value,
                 mobile,
                 name,
                 sex,
                 school,
                 users_id,
                 pi_zhun_jin_e:0
             }).then(res=>{
                  if(res.data.code===0){
                    message.success("提交成功")
                  }
             })
          }
        });
      }
    render(){
           const { school,sex,users_id ,name,mobile} = this.props.location.query;
           const { getFieldDecorator } = this.props.form;
           const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8},
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const two = 'checktwo'
          const { flag1 ,flag2} = this.state;
    return (
        <div className={`${two}-wrapper`}>
        <Alert
           style={{width:'360px',margin:'0 auto'}}
            message={
                <div>
                   <p>报名序号：{users_id}</p>
                   <p>姓名: {name}</p>
                   <p>性别：{sex}</p>
                   <p>手机号: {mobile}</p>
                   <p>学校: {school}</p>
                </div>
            }
            type="success"
            showIcon
        />
         <Form onSubmit={this.handleSubmit} style={{padding:'20px'}}>
         <div className={`${two}-form`}>
              <FormItem
                    label='是否参加团聚'
                    {...formItemLayout}
                    key='tj1' 
                >
                    {getFieldDecorator('is_passed', {
                    rules: [{
                        required: true, message: '是否确认参加团聚'
                    }]
                    })(
                      <RadioGroup name="radiogroup" initialValue={1}>
                        <Radio value={0} onClick={()=>{this.setState({flag1:false})}}>是</Radio>
                        <Radio value={1} onClick={()=>{this.setState({flag1:true})}}>否</Radio>
                      </RadioGroup>
                    )}
                </FormItem>
               {
                   flag1?"":(
                       <div>
                 <FormItem
                    label='Travel Award'
                    {...formItemLayout}
                    key='tj2'
                   
                >
                    {getFieldDecorator('is_award', {
                    rules: [{
                        required: true, message: '是否提交过Travel Award'
                    }]
                    })(
                      <RadioGroup name="radiogroup" initialValue={1}>
                        <Radio value={0} onClick={()=>{this.setState({flag2:false})}}>是</Radio>
                        <Radio value={1} onClick={()=>{this.setState({flag2:true})}}>否</Radio>
                      </RadioGroup>
                    )}
                </FormItem>
                 {
                     flag2?"":(
                         <div>

                        
                        <FormItem
                            label='拟申请金额'
                            {...formItemLayout}
                            key='tj3'
                            >
                            {getFieldDecorator('shen_qing_jin_e', {
                                rules: [{ required: true,message: '请输入拟申请金额' }],
                            })(
                                <Input placeholder="请输入拟申请金额" style={{maxWidth:'300px'}}/>
                            )}
                      </FormItem>
                      </div>
                     )
                 }
               

                <FormItem
                      label='抵达杭州日期'
                      {...formItemLayout}
                      key='tj4'
                      >
                      {getFieldDecorator('arrive_date', {
                            rules: [{ required: true,message: '请输入抵达杭州日期' }],
                      })(
                        //   <Input placeholder="请输入抵达杭州日期" />
                        <DatePicker />
                      )}
                </FormItem>

                <FormItem
                      label='抵达车次信息'
                      {...formItemLayout}
                      key='tj5'
                      >
                      {getFieldDecorator('arrive_car_info', {
                            rules: [{ required: true,message: '请输入车次信息' }],
                      })(
                          <Input placeholder="例如 2月20日T182次3车15号开往杭州" style={{maxWidth:'300px'}}/>
                      )}
                </FormItem>

                <FormItem
                      label='离开杭州日期'
                      {...formItemLayout}
                      key='tj6'
                      >
                      {getFieldDecorator('leave_date', {
                            rules: [{ required: true,message: '请输入离开杭州日期' }],
                      })(
                        <DatePicker />
                      )}
                </FormItem>

                <FormItem
                      label='离开车次信息'
                      {...formItemLayout}
                      key='tj7'
                      >
                      {getFieldDecorator('leave_car_info', {
                            rules: [{ required: true,message: '请输入离开车次信息' }],
                      })(
                          <Input placeholder="例如 2月20日T182次3车15号开往秦皇岛" style={{maxWidth:'300px'}} />
                      )}
                </FormItem>

                <FormItem
                      label='支付包账号'
                      {...formItemLayout}
                      key='tj8'
                      >
                      {getFieldDecorator('alipay', {
                            rules: [{ required: true,message: '请输入支付包账号' }],
                      })(
                          <Input placeholder="请输入支付包账号" style={{maxWidth:'300px'}}/>
                      )}
                </FormItem>

                <FormItem
                      label='备注'
                      {...formItemLayout}
                      key='tj9'
                      >
                      {getFieldDecorator('beizhu', {
                            rules: [{ message: '请输入备注' }],
                      })(
                          <Input placeholder="请输入备注" style={{height:'100px',width:'200px'}} />
                      )}
                </FormItem>
                       </div>
                   )
               }
               </div>

            <FormItem style={{margin:'0 auto'}}>
            <Button type="primary" htmlType="submit"
            style={{width:'30%',minWidth:'360px',marginLeft:'-180px',left:'50%',position:'relative'}}
            >
                提交信息
            </Button>
            </FormItem>
        </Form>
      </div>
    );
  }
 }
CheckTwo = Form.create()(CheckTwo)
 export default CheckTwo