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
      if (name.match('button1')) {
        return (
          <div style={{margin:'-40px auto 0px'}}>
            <Button type="primary" key={'button1'} {...$item} style={{ display: 'inline-block', overflow:'hidden',width:'130px',height:'50px'}}>
              <a href={'/first'}>立即报名</a>
            </Button>
            <Button type="primary" key={'button2'} {...$item} style={{ display: 'inline-block', marginLeft: 10, overflow:'hidden',width:'130px',height:'50px'}}>
              <a href='http://2050.acmclub.cn'>前往竞赛</a>
            </Button>
          </div>
        );
      }
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
