/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner3 from './Banner3';
import Content13 from './Content13';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3'
import Content7 from './Content7';
import Content6 from './Content6';
import Content11 from './Content11';

import {
  Nav01DataSource,
  Banner30DataSource,
  Content130DataSource,
  Content11DataSource,
  Content20DataSource,
  Content20DataSources,
  Content71DataSource,
  Content60DataSource,
  Content110DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import { Redirect } from 'react-router';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_1"
        key="Nav0_1"
        dataSource={Nav01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_1"
        key="Content1_1"
        dataSource={Content11DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content2
        id="Content2_0"
        key="Content2_0"
        dataSource={Content20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_1"
        key="Content7_1"
        dataSource={Content71DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
      id="Content2_0"
      key="Content2_0"
      dataSource={Content20DataSources}
      isMobile={this.state.isMobile}
    />,
      <Content6
        id="Content6_0"
        key="Content6_0"
        dataSource={Content60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content11
        id="Content11_0"
        key="Content11_0"
        dataSource={Content110DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <Redirect to='shimo' />
      // <div
      //   className="templates-wrapper"
      //   ref={(d) => {
      //     this.dom = d;
      //   }}
      // >
      //   {this.state.show && children}
      // </div>
    );
  }
}
