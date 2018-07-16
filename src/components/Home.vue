<template>
    <div class="home">
      <BannerView></BannerView>
      <div id="W_nav">
        <div class="W-nav-nr">
          <ul>
            <li>
              <router-link to="/you" class="router-link">
                <strong>游在柯城</strong>
                <img src="../assets/img/20171031164751_6564.jpg" alt="">
              </router-link>
            </li>
            <li>
              <router-link to="/reside_list" class="router-link">
                <strong>住在柯城</strong>
                <img src="../assets/img/20171019153304_8594.jpg" alt="">
              </router-link>
            </li>
          </ul>
        </div>

        <div class="W-nav-nr">
          <ul>
            <li>
              <router-link :to="{ name: 'eat', params: { EatData: EatData }}" class="router-link">
                <strong>吃在柯城</strong>
                <img src="../assets/img/20171030161046_0109.jpg" alt="">
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'by', params: { ByData: ByData }}" class="router-link">
                <strong>购在柯城</strong>
                <img src="../assets/img/20171019170710_0413.jpg" alt="">
              </router-link>
            </li>
          </ul>
        </div>

        <div class="W-ge"></div>

        <div class="W-nav-nr W-nav-nr-er">
          <ul>
            <li>
              <router-link to="/survey">
                <img src="../assets/img/20171031163422_8261.jpg" alt="">
                <p>
                  {{ survey }}
                </p>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/hot">
                <img src="../assets/img/20171031163548_4703.jpg" alt="">
                <p>
                  {{ scenicSpot }}
                </p>
              </router-link>
            </li>
            <li>
              <router-link to="/star">
                <img src="../assets/img/20171031163927_5727.jpg" alt="">
                <p>
                  {{ route }}
                </p>
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
</template>
<script>
import BannerView from './Piecemeal/banner';
export default {
  components: {
    BannerView
  },
  name: 'banner',
  data () {
    return {
      survey: '柯城概况',
      scenicSpot: '热门景点',
      route: '明星路线',
      EatData: [
        {
          'title': '水晶糕',
          'business': '水晶糕晶莹透亮，色白润滑，糯软耐嚼，食之甘美，清凉爽口。',
          'image': require('../assets/img/20171030161445_0345.jpg'),
          'url': 'https://mp.weixin.qq.com/s/tw230FU8v_vFDjXXfWOdOA'
        },
        {
          'title': '兰溪煎饺',
          'business': '推荐商家：钟楼底煎饺',
          'image': require('../assets/img/20171030153335_3786.jpg'),
          'url': 'https://mp.weixin.qq.com/s/9OLVFiiclk__JunnovB8XQ'
        },
        {
          'title': '衢州酥饼',
          'business': '推荐商家：巨化项家酥饼',
          'image': require('../assets/img/20171030155858_5028.jpg'),
          'url': 'https://mp.weixin.qq.com/s/Ct-2J8YxsmDvGrC8jHp0_Q'
        },
        {
          'title': '三头一掌',
          'business': '推荐商家：一粒志',
          'image': require('../assets/img/20171030155925_6469.jpg'),
          'url': 'http://baike.sogou.com/m/fullLemma?ch=wx.item&lid=46681809&src=wechat&from=singlemessage&isappinstalled=0'
        },
        {
          'title': '白糖饼（阿子糖）',
          'business': '推荐商家：水亭门',
          'image': require('../assets/img/20171031114249_7042.jpg'),
          'url': 'https://mp.weixin.qq.com/s/kBdeFnKcHeQ2xZ7_OqaWPg'
        },
        {
          'title': '阿子糖',
          'business': '推荐商家：暂无',
          'image': require('../assets/img/20171030165112_4859.jpg'),
          'url': 'https://mp.weixin.qq.com/s/-xQBHo5XdgmKJkGj5kM9cQ'
        },
        {
          'title': '面馆',
          'business': '推荐商家：大嘴巴面馆、口口乐面馆',
          'image': require('../assets/img/20171031115009_9994.jpg'),
          'url': 'https://mp.weixin.qq.com/s/19OH4SAmVZ5upkfU6sVVAA'
        }
      ],
      ByData: [
        {
          'title': '大俱源石门笋干',
          'business': '大俱源石门笋干',
          'image': require('../assets/img/yi.jpg'),
          'url': 'http://i.meituan.com/s/-%E8%B4%AD%E7%89%A9/'
        },
        {
          'title': '张西茶叶',
          'business': '张西茶叶',
          'image': require('../assets/img/u=3066413225,1813750531&fm=27&gp=0.jpg'),
          'url': 'http://i.meituan.com/s/-%E8%B4%AD%E7%89%A9/'
        }
      ]
    };
  }
};
</script>

<style>
  #W_nav {
    width: 100%;
    padding-bottom: 0;
    overflow: hidden;
  }
  .W-nav-nr{
    padding: 12px 5px;
    overflow: hidden;
  }

  .W-nav-nr:nth-child(1) {
    padding: 12px 5px;
  }
  .W-nav-nr:nth-child(2) {
    padding: 0px 5px 12px 5px;
  }
  .W-nav-nr ul {
    width: 100%;
    overflow: hidden;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  .W-nav-nr ul li {
    flex: 0 0 46%;
    width: 100%;
    background: #ccc;
    height: 90px;
    position: relative;
    border-radius: 5px;
  }
  .W-nav-nr ul li img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
  .W-nav-nr:nth-child(1) li:nth-child(1) {
    background: #e5e5e5;
  }
  .W-nav-nr:nth-child(1) li:nth-child(2) {
    background: #e2eae7;
  }
  .W-nav-nr:nth-child(2) li:nth-child(1) {
    background: #ebe8de;
  }
  .W-nav-nr:nth-child(2) li:nth-child(2) {
    background: #e7e3ea;
  }
  .W-nav-nr ul li strong {
    font-size: 15px;
    line-height: 35px;
    padding-left: 8px;
    color: #000;
  }
  .W-ge {
    background: rgb(246,246,246);
    height: 14px;
    width: 100%;
  }
  .W-nav-nr-er ul:nth-child(1) li:nth-child(1) {
    height: 200px;
  }
  .W-nav-nr-er {
    display: flex;
    justify-content: space-around;
  }
  .W-nav-nr-er ul {
    flex: 0 0 46%;
    justify-content: space-between;
  }
  .W-nav-nr-er ul:nth-child(1) li {
    flex: 1;
  }
  .W-nav-nr-er ul:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .W-nav-nr-er ul:nth-child(2) li {
    height: 90px;
  }
  .W-nav-nr-er ul li img {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 5px;
    object-fit: cover;
  }
  .W-nav-nr-er ul li p {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 32px;
    background: rgba(0,0,0,.5);
    font-size: 14px;
    text-align: center;
    color: #fff;
    line-height: 32px;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 940px) {
  }
</style>
