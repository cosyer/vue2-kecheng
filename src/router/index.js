import you from '../components/You/you';
import home from '../components/Home';
import residelist from '../components/Live/live';
import playdDetail from '../components/You/details';
import liveHotel from '../components/Live/HotelDetails';
import eat from '../components/Eat/eat';
import by from '../components/By/by';
import survey from '../components/Survey/survey';
import hot from '../components/Hot/hot';
import star from '../components/Star/star';
const routers = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta: {
      pageTitle: '柯城微网'
    }
  },
  {
    path: '/You',
    name: 'you',
    component: you,
    meta: {
      pageTitle: '游在柯城'
    }
  },
  {
    path: '/reside_list',
    name: 'reside_list',
    component: residelist,
    meta: {
      pageTitle: '住在柯城'
    }
  },
  {
    path: '/play_detail',
    name: 'playdetail',
    component: playdDetail,
    meta: {
      pageTitle: '游在柯城'
    }
  },
  {
    path: '/liveHotel',
    name: 'liveHotel',
    component: liveHotel,
    meta: {
      pageTitle: '住在柯城'
    }
  },
  {
    path: '/eat',
    name: 'eat',
    component: eat,
    meta: {
      pageTitle: '吃在柯城'
    }
  },
  {
    path: '/by',
    name: 'by',
    component: by,
    meta: {
      pageTitle: '购在柯城'
    }
  },
  {
    path: '/survey',
    name: 'survey',
    component: survey,
    meta: {
      pageTitle: '柯城概况'
    }
  },
  {
    path: '/hot',
    name: 'hot',
    component: hot,
    meta: {
      pageTitle: '热门景点'
    }
  },
  {
    path: '/star',
    name: 'star',
    component: star,
    meta: {
      pageTitle: '明星路线'
    }
  }
];
export default routers;
