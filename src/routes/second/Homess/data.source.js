import React from 'react';
export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: { className: 'header0-logo', children: 'http://lpf.yywlx.cn/2050.png' },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '主页', href: '' } },
      { name: 'item1', a: { children: '注册报名', href: '' } },
      { name: 'item2', a: { children: '申请自助', href: '' } },
      { name: 'item3', a: { children: '在线捐赠', href: '' } },
      {
        name: 'item~ju0pznv84gf',
        a: { children: 'Travel Award申请', href: '' },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span>
            <p>2050编程竞赛 一万人码@2019</p>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '2050 Programming Competition - Ten Thousand Coders@2019',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <p>2019年4月14日 14:00-17:00</p>
          </span>
        ),
      },
      { name: 'button', className: 'banner3-button', children: '在线捐赠' },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <span>
            <p>报名截止时间：2019年4月13日 23:59:59（北京时间）</p>
          </span>
        ),
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>活动概要</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>
              2050编程竞赛是CCPC与2050志愿者共同发起的面向全球编程爱好者的程序设计竞赛。
            </p>
            <p>
              <span>
                比赛的宗旨是给广大编程爱好者提供一个学习和交流的平台，提高参赛者分析和解决实际问题的能力，发现并且培养在未来三十年能够通过技术一起改变世界的伙伴。
              </span>
            </p>
            <p>
              <span>
                你不必出身名校，不必身经百战，只要对编程充满热爱，对未来充满希望，我们相信你就是我们要找的对的人。
              </span>
            </p>
            <p>
              2019年4月26-28日，上万年青人会在杭州云栖小镇因科技而团聚。我们希望热爱编程的你们，也能来到2050。
            </p>
            <p>
              &nbsp;在这里，你会遇见另外一个人：你能遇见那些竞赛的大神们，听他们说说他们的故事；你能遇见IT科技界的技术大牛，告诉你他们今天在干什么。
            </p>
            <p>
              在这里，你会看到世界的另一面：写程序的你，可以造飞机；写程序的你，能让这个城市的交通不再堵塞；写程序的你，可以帮助人类移民到火星。
            </p>
            <p>
              浙江卫视《预见2050》的一期节目实时记录这次万人规模的编程竞赛，以及大家在2050遇见对方的场景。让我们共同创造这一次属于我们编程爱好者的活动。
            </p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
};
export const Content11DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>
          赛制及计分规则<br />
        </p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>本次比赛为个人赛。</p>
        <p>
          本次比赛所有参赛选手按照解题数多少进行排名，解题数多的排名在前；若解题数相同，再比较总用时，总用时少的排名在前；若解题数和总用时都相同，则排名并列。
          总用时为解出的赛题所用时间之和；每道赛题的用时是从竞赛开始到该题解答被判定为正确的提交时间为止，其间每一次被判为错误的提交将被加罚20分钟时间，没有解出的赛题不记罚时。
        </p>
      </span>
    ),
  },
};
export const Content20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>参赛须知</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          参赛者需保证报名信息真实有效并独立完成答题，如有违反将于核实后取消比赛成绩以及参赛资格。
        </p>
        <p>参赛选手国家/地区不限，年龄不限，参赛选手可为在校学生或职场人士。</p>
        <p>最终解释权归大赛组委会所有。</p>
      </span>
    ),
  },
};
export const Content71DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>赛事详细信息</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <span>
                <p>赛前线上互动</p>
              </span>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'contacts' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>一、教练互动:</h3>
                <p> 1.时间：2019年4月3号 （周三）晚上8:00-9:00</p>
                <p> 2.嘉宾：3-5个教练</p>
                <p> 3.链接：</p>
                <h3>二、比赛经验:</h3>
                <p> 1.时间：2019年4月4号（周四）晚上8:00-9:00</p>
                <p> 2.嘉宾：3-5个退役队员</p>
                <p> 3.链接：</p>
                <h3>三、职业发展:</h3>
                <p> 1.时间：2019年4月10号（周三）晚上8:00-9:00</p>
                <p> 2.嘉宾：3-5个退役队员</p>
                <p> 3.链接：</p>
                <h3>四、赛后经验互动：</h3>
                <p> 1.时间：2019年4月14号（周日）晚上8:00-9:00</p>
                <p> 2.嘉宾：现役队员</p>
                <p> 3.链接：</p>
                <h3 />
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'global' },
          text: {
            className: 'content7-tag-name',
            children: (
              <span>
                <p>活动时间和地点</p>
              </span>
            ),
          },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>线上注册时间：</h3>
                <p>2019年4月13日 23:59:59（北京时间）截止</p>
                <h3>Travel award申请时间：</h3>
                <p>2019年4月13日 23:59:59（北京时间) 截止。</p>
                <p>2019年4月15日 公布结果。</p>
                <h3>线上比赛时间：</h3>
                <p>2019年4月14日 14:00-17:00</p>
                <h3>线下2050活动：</h3>
                <p>时间：2019年4月26日-28日</p>
                <p>地点：杭州云栖小镇</p>
                <p>主题：年轻人因科技而团聚</p>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <span>
                <p>奖励机制</p>
              </span>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'money-collect' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>一、2050 PASS.</h3>
                <p>
                  同一个学校，每20个学生参赛，并且比赛成绩最好的同学进入了总排名的前50%，这位同学可获得2050
                  PASS一张。同理，如果能召集40个人比赛，前两名的同学如果能进入总排名的前50%，这两位同学都可获得2050
                  PASS一张。以此类推。
                </p>
                <h3>二、Travel award.</h3>
                <p> a) 申请网站连接：</p>
                <p> b) 比赛成绩排名前50%的参赛者的申请会被考虑。</p>
                <p> c) 申请者需写明: </p>
                <p>&nbsp; &nbsp; (1)个人经历简短介绍（须包括之前参赛经历）；</p>
                <p>&nbsp; &nbsp; (2) 为什么想参加2050的线下活动；</p>
                <p>
                  &nbsp; &nbsp; (3) 申请金额用途明细（可申请2050
                  PASS和部分差旅）；
                </p>
                <p>&nbsp; &nbsp; (4) 为何需要申请资金资助 。</p>
                <p>
                  {' '}
                  d) 我们鼓励申请者根据自己的实际情况申请travel
                  award。鼓励个人去承担部分差旅费用。因为我们这次比赛没有任何官方的赞助商。所有的活动都是2050和CCPC的志愿者发起的。
                </p>
                <h3>三、纪念t-shirt.</h3>
                <p>注册尾数为100的整数的同学会获得纪念t-shirt一件。</p>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content60DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              <br />
            </p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>l联系方式</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content ju0k7luzmib-editor_css',
          children: (
            <span>
              <p>programming2050@aliyun.com</p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>在线捐赠</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content ju0kd3pz8k-editor_css',
          children: (
            <span>
              <p>捐赠链接</p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>致谢志愿者</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>陈恒源， 雷鹏飞， 黎珍辉， 施韩原， 王和兴</p>
            </span>
          ),
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'content2',
        children: (
          <span>
            <p>我们在这里遇见，一起预见2050</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
  },
};
