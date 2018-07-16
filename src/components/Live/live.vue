<template>
  <div class="live">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="酒店" name="first" v-on:click.stop="handleClick1">
        <HotelView :DataJ="j"></HotelView>
      </el-tab-pane>
      <el-tab-pane label="民宿" name="second">
        <BbView :DataB="m"></BbView>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HotelView from './hotel';
import BbView from './BB';
export default {
  name: 'Live',
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
      // console.log(event.target.getAttribute('id'))
    }
  },
  data () {
    return {
      activeName2: 'first',
      j: [
        {
          'image1': require('../../assets/img/20171019170923_7648.jpg'),
          'image2': require('../../assets/img/20171019170930_3948.jpg'),
          'title': '东方大酒店（西区店）',
          'describe': '2016 年开业  204 间房   电话0570-8058888 传真0570-8058667',
          'price': 328.00,
          'conent': '东方大酒店（衢州西区店）坐落于白云中大道 66 号，位于衢州市西区，集行政办公、文化教育、商贸金融、会展商务、休闲居住等功能为一体的衢州城市新中心，毗邻市政府，与西区大草原、鹿鸣公园等风景优美的景点相邻，环境优美，酒店距新火车站 7KM，与杭金衢高速公路连接线临近，交通便利。酒店由浙江衢州东方集团投资建造，总建筑面积 3.3 万平方，个性鲜明，别具特色。餐饮观景包厢 8 个，集大型宴会厅。配有大小会议室 5 个，最大会议室可同时容纳 1000 余人，另有可同时容纳 600 余人的特色宴会厅。是集住宿、餐饮、休闲、娱乐为一体的大型现代化豪华酒店。其优越的地理位置，优雅的环境，必将成为衢州西区酒店业一道亮丽而独特的风景线。',
          'address': '白云中大道 66 号',
          'phone': '0570-8058888',
          'id': 0,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/6549036.html#ctm_ref=hod_hp_sb_lst',
          'show': true
        },
        {
          'image1': require('../../assets/img/20171019170710_0413.jpg'),
          'image2': require('../../assets/img/20171019170717_7166.jpg'),
          'title': '衢州冠发君悦大酒店',
          'describe': '2011 年开业  216 间房   2011 年开业  216 间房',
          'price': 268.00,
          'conent': '衢州冠发君悦大酒店位于柯城区西区九华北大道，毗邻衢州学院、衢州市公安柯城分局，交通便利。 衢州冠发君悦大酒店集住宿、餐饮、娱乐、商务、购物为一体，拥有各式精致客房，并分设无烟楼层、温馨楼层、绿色楼层及独立行政楼层。 酒店餐饮设有开放式餐厅、大型专业宴会厅及高端餐饮包厢；多功能会议中心能满足各类大型会议和高端商务洽谈的需要；富豪娱乐拥有豪华演艺厅及各类 KTV 包厢；金都休闲会所具备超一流的健康水疗及各种规格包厢，各类配套设施齐全，满足顾客吃、住、行、娱、购的各种需求。',
          'address': '柯城区 西区九华北大道 185 号',
          'phone': '暂无',
          'id': 1,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/1703010.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019170212_9232.jpg'),
          'image2': require('../../assets/img/20171019170220_3800.jpg'),
          'title': '衢州柏丽大酒店',
          'describe': '2012 年开业  110 间房   电话0570-8022222 传真0570-8068755',
          'price': 418.00,
          'conent': '衢州柏丽大酒店位于西区行政金融中心，毗邻市政府、市民公园、江滨公园、衢州学院，周边大型购物中心一应俱全，出行便利。 衢州柏丽大酒店是一家以星级标准打造的主题式景观酒店，总建筑面积达 15000 多平方米，内设各式舒适客房，附设大、中、小会议室 3 间。 酒店具有欧陆风格的中西餐厅设有豪华包厢 22 间，可同时容纳 800 位宾客就餐，并提供衢州地方风味菜、中西自助营养早餐，为忙碌的您全方位考虑，令您的衢州之行充满活力！',
          'address': '柯城区 紫薇中路 1 号',
          'phone': '0570-8022222',
          'id': 2,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/534623.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019165242_1494.jpg'),
          'image2': require('../../assets/img/20171019165305_8303.jpg'),
          'title': '衢州柯城万豪大酒店',
          'describe': '2004 年开业  66 间房   电话0570-8282888 传真0570-8282999',
          'price': 118.00,
          'conent': '衢州柯城万豪大酒店位于衢州市荷四路与荷花西路交汇处东侧路南，邻近衢州火车站，地理位置优越，交通十分便捷。酒店拥有 2 万多平方米的休闲后花园及 100 多个泊车位。酒店拥有各类客房，包括商务单间、豪华标间、商务标间等，房间配套设施齐全，可满足宾客的不同要求。衢州柯城万豪大酒店是一家集住宿、餐饮、、为一体的商务酒店，是政府会议和培训定点饭店之一，酒店注重 “点点滴滴服务情，真真切切万豪心” 的企业文化，做到宾客至上的满意服务。',
          'address': '衢州 柯城区 荷四路 395 号',
          'phone': '0570-8282888',
          'id': 3,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/1615995.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019164921_4707.jpg'),
          'image2': require('../../assets/img/20171019164941_6415.jpg'),
          'title': '衢州帝京大酒店',
          'describe': '2008 年开业  2016 年装修  142 间房   电话0570-8890888 传真0570-8890999',
          'price': 259.00,
          'conent': '衢州帝京大酒店地处衢城中心区域，距机场、高速公路入口、火车站均在 15 分钟车程内，交通十分便利。 酒店系衢州市柯城区人民政府第一招待所，曾荣获 “五常法” 管理达标单位、衢州市 “十佳婚庆酒店”、衢州市 “特色餐饮名店”、衢州市诚信企业、衢州市餐饮消费评价优胜单位、浙江省卫生 A 级单位、国家 “银叶级绿色旅游饭店” 等荣誉称号。 衢州帝京大酒店集住宿、餐饮、娱乐、会议、商务为一体，总建筑面积 23000 平方米，拥有各式精美客房，均配备高档电脑、电信高速光缆网络，让您随时掌握第一手资讯。 酒店风格典雅的宴会厅、中西餐厅和各式包厢，提供各类中西美食，能同时满足 1500 人的用餐；豪华气派的各类会议室和贵宾接待室功能现代，设施完备，具备同时接待 680 人会议的能力。 酒店康乐设施齐备，配设丰富多彩的桑拿、健身、乒乓球、台球、多功能娱乐、美容美发等；精品店、旅行社、行政酒廊、医务室等设置近若 “家中”；充裕的室内外泊车位能同时泊车 160 辆，随时迎候尊驾光临。',
          'address': '柯城区 通荷路 168 号',
          'phone': '0570-8890888',
          'id': 4,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/608220.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019164400_9681.jpg'),
          'image2': require('../../assets/img/20171019164408_2533.jpg'),
          'title': '衢州友好饭店',
          'describe': '1999 年开业  2009 年装修  228 间房   电话0570-3051888 传真0570-3022128',
          'price': 350.00,
          'conent': '衢州友好饭店位于市区最繁华的上下街，毗邻孔庙、府山公园、汽车南站，交通便利。 衢州友好饭店拥有各式精致客房，并设有棋牌室、健身室、KTV 等多种配套服务设施。时尚奢华的简欧装饰与专业的酒店服务，令您满意加惊喜，让您心动和感动！',
          'address': '柯城区上街 127 号',
          'phone': '0570-3051888',
          'id': 5,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/512480.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019163852_0252.jpg'),
          'image2': require('../../assets/img/20171019163902_8984.jpg'),
          'title': '衢州东方大酒店',
          'describe': '1994 年开业  2015 年装修  204 间房   电话0570-3035118/3058100',
          'price': 298.00,
          'conent': '衢州东方大酒店位于衢州繁华商业区黄金地段，南临南湖广场，北靠秀美的衢州南湖，交通便利，酒店内设星巴克。 衢州东方大酒店拥有各式精致客房，附设风格各异的餐厅包厢 16 个，其中四季厅、明珠厅是浙西地区最豪华的中式餐厅。酒店另外设有设施完备、功能齐全的各种多功能厅 8 个，可同时容纳 1000 余名宾客用餐。',
          'address': '市区南湖广场',
          'phone': '0570-3035118/3058100',
          'id': 6,
          'show': true,
          'OrderUrl': false,
        },
        {
          'image1': require('../../assets/img/20171019163607_7881.jpg'),
          'image2': require('../../assets/img/20171019163615_3229.jpg'),
          'title': '衢州国际大酒店',
          'describe': '2004 年开业  2014 年装修  144 间房   电话0570-8889888 传真0570-8030044',
          'price': 0.00,
          'conent': '衢州国际大酒店建于 2004 年 9 月。建筑面积达 22000㎡，是一家省内知名的星级旅游饭店。酒店地处衢州市繁华地段（三衢路 127 号），交通便利。酒店拥有各类客房百余间，餐位 1200 余个。2014 年，酒店投资 1200 余万元对客房和餐饮设施进行了全面改造，成为当地一家高端精品商务型酒店。多年来，酒店一直致力于精细管理和注重酒店品牌的塑造，本着 “顾客就是衣食父母” 的服务理念和 “真诚、热情、耐心、细致、周到” 的服务准则，赢得了社会各界的一致好评，先后获得了 “浙江省百佳诚信旅游企业”、“浙江省最佳星级饭店”、“浙江省优秀品质饭店” 等荣誉称号，连续多年被评为 “衢州市十佳优秀旅游饭店”。酒店将本着 “品质至上，让酒店真正成为让宾客获得体贴关怀和舒适款待的地方” 的管理目标，始终坚持以一流的服务设施、高水准的服务品质为每一个宾客营造温馨、舒适的家外之家。无论数九寒冬还是三伏酷暑，酒店都将致力于为您创造一个四季如春的世界。',
          'address': '衢州 柯城区 三衢路 127 号 ，近通荷路，杭金衢高速西出口下。',
          'phone': '0570-8889888',
          'id': 7,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/474049.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019163232_0709.jpg'),
          'image2': require('../../assets/img/20171019163238_2797.jpg'),
          'title': '衢州饭店',
          'describe': '2000 年开业  2010 年装修  186 间房   电话0570-3081818 传真0570-3083080',
          'price': 0.00,
          'conent': '衢州饭店地处衢州市中心，近南宋孔氏家庙，距离长途客运站、衢州博物馆都仅需 2 公里，交通十分便利。 饭店大小不同、风格迥异的华美包厢提炼美食精粹，为客人提供粤菜、台湾菜、铁板烧、本帮菜为主的各类中式菜肴，展现中国厨艺的大家风范。 雍容华贵的宴会厅，四处洋溢着一种高贵、优雅的格调；与大自然亲密接触的大堂酒吧，使您在美妙的音乐声中尽享快乐时光。 衢州饭店完善、现代的设施及一流、热情的服务，必能使客人身心愉悦，体验前所未有的欢畅感受。',
          'address': '柯城区 三衢路 189 号 ，近通荷路',
          'phone': '0570-3081818',
          'id': 8,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/469260.html#ctm_ref=hod_hp_sb_lst'
        },
        {
          'image1': require('../../assets/img/20171019165538_8353.jpg'),
          'image2': require('../../assets/img/20171019165546_5105.jpg'),
          'title': '衢州市柯城京汉国际大酒店',
          'describe': '2009 年开业  2010 年装修  115 间房   电话0570-8766666',
          'price': 151.00,
          'conent': '衢州饭店地处衢州市中心，近南宋孔氏家庙，距离长途客运站、衢州博物馆都仅需 2 公里，交通十分便利。 饭店大小不同、风格迥异的华美包厢提炼美食精粹，为客人提供粤菜、台湾菜、铁板烧、本帮菜为主的各类中式菜肴，展现中国厨艺的大家风范。 雍容华贵的宴会厅，四处洋溢着一种高贵、优雅的格调；与大自然亲密接触的大堂酒吧，使您在美妙的音乐声中尽享快乐时光。 衢州饭店完善、现代的设施及一流、热情的服务，必能使客人身心愉悦，体验前所未有的欢畅感受。',
          'address': '柯城区 三衢路 495 号',
          'phone': '0570-8766666',
          'id': 9,
          'show': true,
          'OrderUrl': 'http://m.ctrip.com/webapp/Hotel/HotelDetail/1615968.html#ctm_ref=hod_hp_sb_lst'
        }
      ],
      m: [
        {
          'image1': require('../../assets/img/20171019154730_5206.jpg'),
          'title': '七里祥云阁',
          'describe': '预约电话：15057009526',
          'address': '柯城区七里乡大头村上村 28 号',
          'id': 0,
          'show': false,
          'url': 'https://mp.weixin.qq.com/s/rEYVE4f2lHcVgjleiBpi0A'
        },
        {
          'image1': require('../../assets/img/20171019154212_6232.jpg'),
          'title': '七里天光云景',
          'describe': '预约电话：0570-8761188、8761118',
          'address': '柯城区七里乡大头村新店新村',
          'id': 1,
          'show': false,
          'url': 'https://mp.weixin.qq.com/s/Uu8ha2ibRJnbHVF6CostSA'
        },
        {
          'image1': require('../../assets/img/20171019154030_0218.jpg'),
          'title': '七里幽篁里',
          'describe': '预约电话：15957039990',
          'address': '柯城区七里乡大头村（游客接待中心对面）',
          'id': 2,
          'show': false,
          'url': 'https://m.sohu.com/a/136170770_179598/?pvid=000115_3w_a'
        },
        {
          'image1': require('../../assets/img/20171019153304_8594.jpg'),
          'title': '九华庙源溪墅',
          'describe': '预约电话：18906708718',
          'address': '九华乡茶铺村',
          'id': 3,
          'show': false,
          'url': 'http://kcly.attach.0570w.cn/image/20171031/20171031110915_2705.bmp'
        },
        {
          'image1': require('../../assets/img/20171019153450_8304.jpg'),
          'title': '九华关西山房',
          'describe': '预约电话：13282077051',
          'address': '九华乡关溪村',
          'id': 4,
          'show': false,
          'url': 'http://kcly.attach.0570w.cn/image/20171031/20171031110753_7447.bmp'
        },
        {
          'image1': require('../../assets/img/20171019153734_7867.jpg'),
          'title': '九华溢舍',
          'describe': '预约电话：18005701118',
          'address': '九华乡妙源村寺坞自然村',
          'id': 5,
          'show': false,
          'url': 'https://mp.weixin.qq.com/s/FIyu2Z5u2z9t7Reun91-_A'
        },
        {
          'image1': require('../../assets/img/20171019155159_1530.jpg'),
          'title': '沟溪园素',
          'describe': '预约电话：13305708788',
          'address': '柯城区沟溪乡余东村',
          'id': 6,
          'show': false,
          'url': 'https://mp.weixin.qq.com/s/13C_0yNEZVVJTjbt4S6GiA'
        },
        {
          'image1': require('../../assets/img/20171019155819_5129.jpg'),
          'title': '万田荷塘宜兰',
          'describe': '预约电话：13059726699',
          'address': '柯城区万田乡荷塘村',
          'id': 7,
          'show': false,
          'url': 'https://mp.weixin.qq.com/s/VFsquzffeMDMApmh6f5jtg'
        },
        {
          'image1': require('../../assets/img/20171019152706_4332.jpg'),
          'title': '九华九宫格',
          'describe': '预约电话：13059726999',
          'address': '九华乡坞口村外寮口自然村 179 号',
          'id': 8,
          'show': false,
          'url': 'http://kcly.attach.0570w.cn/image/20171031/20171031103714_1739.bmp'
        },
        {
          'image1': require('../../assets/img/20171019155051_7297.jpg'),
          'title': '沟溪润谷 · 山背',
          'describe': '柯城区沟溪乡碗东村 预约电话：13567020881',
          'address': '柯城区沟溪乡碗东村',
          'id': 9,
          'show': false,
          'url': 'https://m.sohu.com/a/160902857_179598/?pvid=000115_3w_a'
        }
      ]
    };
  },
  components: {
    HotelView,
    BbView
  }
};
</script>

<style >
  .el-tabs__item {
    flex: 1;
    text-align: center;
    padding: 0;
    letter-spacing: 2px;
  }
  .el-tabs__nav-wrap.is-scrollable{
    padding: 0;
  }
  .el-tabs__nav {
    display: flex;
    width: 100%;
  }
  .el-tabs__nav-next,.el-tabs__nav-prev {
    display: none;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom: 3px solid #000;
  }
  .el-tabs__item.is-active {
    color: #000;
    font-weight: bold;
  }
  .el-tabs--bottom .el-tabs--left .el-tabs__item:nth-child(2),
  .el-tabs--bottom .el-tabs--right .el-tabs__item:nth-child(2),
  .el-tabs--bottom.el-tabs--border-card .el-tabs__item:nth-child(2),
  .el-tabs--bottom.el-tabs--card .el-tabs__item:nth-child(2), .el-tabs--top
  .el-tabs--left .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs--right
  .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--border-card .el-tabs__item:nth-child(2),
  .el-tabs--top.el-tabs--card .el-tabs__item:nth-child(2) {
    padding: 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-left: none;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none;
  }
  #tab-second:after {
    width: 1px;
    background: #e4e7ed;
    height: 20px;
    position: absolute;
    left: 0;
    top: 10px;
    content: '';
  }
  .el-tabs__header {
    margin: 0;
  }
</style>
