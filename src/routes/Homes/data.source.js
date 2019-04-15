import React from 'react';
// import axios from 'axios';

// let value;
// axios.get('http://47.75.119.189/2050/count').then(res=>{
//   value = res.data.data.count;
// })



export const Nav01DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo1: { className: 'header0-logo1', children: 'http://ccpc.acmclub.cn/donate.png' },
  logo2: {
     className:'header0-logo2',children:'http://ccpc.acmclub.cn/2050web.png'
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '主页', href: '' } },
      { name: 'item1', a: { children: '注册报名', href: '/first' } },
      { name: 'item2', a: { children: '帐号查看', href: '/account' } },
      { name: 'item3', a: { children: '2050官网', href: 'https://2050.org.cn' } },
      { name: 'contest', a: { children: '2050竞赛会场', href: 'http://2050.acmclub.cn' } },
      // {
      //   name: 'item~ju0pznv84gf',
      //   a: { children: 'Travel Award申请', href: '/login' },
      // },
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
        name:'pic',
        className:'banner3-pic',
        children:(
          <div style={{margin:'0 auto'}}>
             <img src="http://lpf.yywlx.cn/2050.png" alt="pic" />
          </div>
        )
      },
      {
        name: 'name-en',
        className: 'banner3-name-en',
        children: '2050 Programming Competition - Ten Thousand Coders@2019',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '2050编程竞赛  一万人码@2019',
        texty: true,
      },
      {
            name: 'name',
            className: 'banner3-name',
            children: (
              <span>
                <p>2050线下团聚 杭州欢迎您</p>
              </span>
            ),
          },
           //  新的时间
      {
        name: 'name',
        className: 'banner3-time',
        children: (
          <span>
            <p>2019年4月26号-28号</p>
          </span>
        ),
      },
       {
         name:'button3',
         className:'banner3-button'
       },
      /**
       * 以下为2050CCPC报名使用过的源代码
       */
      // { name: 'button2'},
      //  新的时间
      // {
      //   name: 'name',
      //   className: 'banner3-name',
      //   children: (
      //     <span>
      //       <p style={{color:'red'}}>2019年4月13日 19:00-22:00</p>
      //     </span>
      //   ),
      // },
          // 原来时间
      //     {
      //       name: 'name',
      //       className: 'banner3-name',
      //       children: (
      //         <span>
      //           <p style={{textDecoration:'line-through'}}>2019年4月14日 14:00-17:00</p>
      //         </span>
      //       ),
      //     },
      // {
      //   name: 'time',
      //   className: 'banner3-time',
      //   children: (
      //     <span>
      //       <p>报名截止时间：2019年4月13日 00:00:00（北京时间）</p>
      //     </span>
      //   ),
      // },
      // {
      //   name: 'time',
      //   className: 'banner3-time',
      //   children: (
      //     <span>
      //       <p>比赛入口将于开赛前30min公布，请关注本网站更新。</p>
      //     </span>
      //   ),
      // },
      { name: 'button1' },
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
           <p style={{display:'block',width:'80%',margin:'0 auto'}}>
            2050编程竞赛是CCPC与2050志愿者共同发起的面向全球编程爱好者的程序设计竞赛。
           </p>
           <br />
           <p style={{display:'block',width:'80%',margin:'0 auto'}}>
           比赛的宗旨是给广大编程爱好者提供一个学习和交流的平台，提高参赛者分析和解决实际问题的能力，发现并且培养在未来三十年能够通过技术一起改变世界的伙伴。
           </p>
           <br />
           <p style={{display:'block',width:'80%',margin:'0 auto'}}>
           你不必出身名校，不必身经百战，只要对编程充满热爱，对未来充满希望，我们相信你就是我们要找的对的人。
           </p>
           <br />
            <p style={{display:'block',width:'80%',margin:'0 auto'}}>
            2019年4月26日到28日，上万年青人在杭州云栖小镇因科技而团聚。我们希望热爱编程的你们，也能来到2050。
            </p>
            <br />
            <p style={{display:'block',width:'80%',margin:'0 auto'}}>
            在这里，你会遇见另外一个人：你能遇见那些竞赛圈的大神们，听他们说说他们的故事；你能遇见IT科技界的大牛，了解他们今天做的事情；你能遇见那些不会写代码的人们，碰撞出新的火花。
            </p>
            <br />
            <p style={{display:'block',width:'80%',margin:'0 auto'}}>
            在这里，你会看到世界的另一面：编程的你，可以造飞机制丝巾；编程的你，能让这个城市的交通不再堵塞；编程的你，可以帮助人类移民到火星。
            </p>
            <br />
            <p style={{display:'block',width:'80%',margin:'0 auto'}}>
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
        <p style={{fontWeight:'bold'}}>
          参赛须知<br />
        </p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p style={{textAlign:'left'}}>本次比赛为线上个人赛。</p>
        <p style={{textAlign:'left'}}>
          本次比赛所有参赛选手按照解题数多少进行排名，解题数多的排名在前；若解题数相同，再比较总用时，总用时少的排名在前；若解题数和总用时都相同，则排名并列。
          总用时为解出的赛题所用时间之和；每道赛题的用时是从竞赛开始到该题解答被判定为正确的提交时间为止，其间每一次被判为错误的提交将被加罚20分钟时间，没有解出的赛题不记罚时。
        </p>
        <p style={{textAlign:'left'}}>
          参赛者需保证报名信息真实有效并独立完成答题，如有违反将于核实后取消比赛成绩以及参赛资格。
        </p>
        <p style={{textAlign:'left'}}>参赛选手国家/地区不限，年龄不限，参赛选手可为在校学生或职场人士。</p>
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
        <p>奖励机制</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
                <h3 style={{textAlign:'left'}}>一、2050 PASS.</h3>
                <p style={{textAlign:'left'}}>
                  同一个学校，每20个学生参赛，并且比赛成绩最好的同学进入了总排名的前50%，这位同学可获得2050
                  PASS一张。同理，如果能召集40个人比赛，前两名的同学如果能进入总排名的前50%，这两位同学都可获得2050
                  PASS一张。以此类推。
                </p>
                <h3 style={{textAlign:'left'}}>二、Travel award.</h3>
                <p style={{textAlign:'left'}}> a) 申请网站链接：<a target="_blank" href="/login">申请通道</a></p>
                <p style={{textAlign:'left'}}> b) 比赛成绩排名前50%的参赛者的申请会被考虑。</p>
                <p style={{textAlign:'left'}}> c) 申请者需写明: </p>
                <p style={{textAlign:'left'}}>&nbsp; &nbsp; (1)个人经历简短介绍（须包括之前参赛经历）；</p>
                <p style={{textAlign:'left'}}>&nbsp; &nbsp; (2) 为什么想参加2050的线下活动；</p>
                <p style={{textAlign:'left'}}>
                  &nbsp; &nbsp; (3) 申请金额用途明细（可申请2050
                  PASS和部分差旅）；
                </p>
                <p style={{textAlign:'left'}}>&nbsp; &nbsp; (4) 为何需要申请资金资助 。</p>
                <p style={{textAlign:'left'}}>
                  {' '}
                  d) 我们鼓励申请者根据自己的实际情况申请travel
                  award。鼓励个人去承担部分差旅费用。因为我们这次比赛没有任何官方的赞助商。所有的活动都是2050和CCPC的志愿者发起的。
                </p>
                <h3 style={{textAlign:'left'}}>三、纪念t-shirt.</h3>
                <p style={{textAlign:'left'}}>注册尾数为100的整数的同学会获得纪念t-shirt一件。</p>
      </span>
    ),
  },
};
export const Content20DataSources = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'http://ccpc.acmclub.cn/juanzeng2.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>帮助大学生来到2050</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p style={{display:'block',width:'100%',margin:'0 auto'}}>
        本次竞赛是由2050和CCPC志愿者发起，我们希望能帮助更多的爱好编程的大学生们来到2050。帮助他们在2050，遇见另一个人，看到世界的另一面。
        </p>
        <p　style={{display:'block',width:'100%',margin:'0 auto'}}>我们相信，越是不可能见面的两个人越应该见一面。您的帮助可能会改变一个大学生的一生。</p>
        <p　style={{display:'block',width:'100%',margin:'0 auto'}}>
        我们计划为500名大学生提供2050Pass，并为少数西部地区家庭困难的大学生提供全程费用。希望您慷慨解囊，帮助大学生来到2050。
        </p>
        <p　style={{display:'block',width:'100%',margin:'0 auto'}}>
        本次活动所有捐赠款项均由东北大学秦皇岛分校进行财务管理，您的每一分爱心都将用到2050编程竞赛活动中。
        </p>
        <p　style={{display:'block',width:'100%',margin:'0 auto'}}>详情请前往：<a href="/jk">捐赠通道</a></p>

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
            <p style={{fontWeight:'bold'}}>活动安排</p>
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
                <p> 2.嘉宾：谢勇、刘春英、王和兴</p>
                <p> 3.状态：已结束</p>
                <h3>二、比赛经验:</h3>
                <p> 1.时间：2019年4月4号（周四）晚上8:00-9:00</p>
                <p> 2.嘉宾：施韩原、洪华敦、杜瑜皓、吉如一等</p>
                <p> 3.状态：已结束</p>
                <h3>三、职业发展:</h3>
                <p> 1.时间：2019年4月11日(周四）晚上8:30-9:00</p>
                <p> 2.嘉宾：黎珍辉、施韩原、陈尔东等</p>
                <p> 3.链接：<a href='http://live.bilibili.com/21347704' target='_blank' >前往b站直播间</a>
</p>
                <h3>四、赛后经验互动：</h3>
                <p> 1.时间：2019年4月14号（周日）晚上8:00-9:00</p>
                <p> 2.嘉宾：待定</p>
                <p> 3.状态：未开始</p>
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
                <p>2019年4月13日 00:00:00（北京时间）截止</p>
                <h3>Travel award申请时间：</h3>
                <p>2019年4月13日 00:00:00（北京时间) 截止。</p>
                <p>2019年4月15日 公布结果。</p>
                <h3>线上比赛时间：</h3>
                <p>2019年4月13日 19:00-22:00</p>
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
            <p style={{fontWeight:'bold'}}>致谢</p>
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
              <p>感谢下列单位对2050竞赛的大力支持</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content ju0kd3pz8k-editor_css',
          children: (
            <span>
              <p><a target="_blank" href='https://www.intel.cn/content/www/cn/zh/homepage.html'>Intel(因特尔)</a></p>
              <p>青岛泰屹投资发展有限公司</p>
              <p><a target="_blank" href='https://www.kujiale.com'>酷家乐</a></p>
              <p><a target="_blank" href='http://www.neuq.edu.cn'>东北大学秦皇岛分校</a></p>
              <p><a target="_blank" href='http://www.hdu.edu.cn'>杭州电子科技大学</a></p>
              <p>...</p>
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
              <p>感谢志愿者的付出(按姓名拼音排序)</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>陈恒源、何阳、雷鹏飞、黎珍辉、施韩原、吴东、王和兴...(更新中)</p>
            </span>
          ),
        },
      },
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
              <p>联系方式</p>
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
