import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const children = dataSource.textWrapper.children.map((item) => {
      const { name, texty, ...$item } = item;
      if(name.match('button3')){
        return(
          <div>
            <Button type="primary" key={'button1'} {...$item} style={{width:'130px',height:'50px'}}><a href="https://shimo.im/docs/qm4W0bqZS2UJoIls/read" target="__blank">点击了解详情</a></Button>
          </div>
        )
      }
      // if(name.match('button2')){
      //   return(
      //     <div>
      //       <Button type="primary" key={'button1'} {...$item} style={{marginBottom:'30px',width:'460px',height:'50px',fontSize:'25px',backgroundColor:'white',color:'red'}}><a href="http://ccpc.acmclub.cn/2050-problems.zip">题册下载(密码:NEUQ-CCPC-2050)</a></Button>
      //     </div>
      //   )
      // }
      // else if (name.match('button1')) {
      //   return (
      //     <div style={{margin:'-40px auto 0px'}}>
      //       <Button type="primary" key={'button1'} {...$item} style={{ display: 'inline-block', overflow:'hidden',width:'130px',height:'50px'}}>
      //         <a href={'/first'}>立即报名</a>
      //       </Button>
      //       <Button type="primary" key={'button2'} {...$item} style={{ display: 'inline-block', marginLeft: 10, overflow:'hidden',width:'150px',height:'50px'}}>
      //         <a href={'/account'}>查询账号＆参加比赛</a>
      //         {/* 'http://2050.acmclub.cn */}
      //       </Button>
      //     </div>
      //   );
      // }
      return (
        <div key={name} {...$item}>
          {texty ? (
            <Texty type="mask-bottom">{item.children}</Texty>
          ) : (
            item.children
          )}
        </div>
      );
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          style={{fontSize:'58px'}}
          {...dataSource.textWrapper}
        >
          {children}
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
