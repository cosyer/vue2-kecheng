<template>
    <div class="Hot">
      <BoxView v-for="(item, index) in HotData" :key="index" :HotData="item"></BoxView>
    </div>
</template>

<script>
import BoxView from '../Piecemeal/box';
export default {
  name: 'hot',
  data () {
    return {
      HotData: [
        {
          'image': require('../../assets/img/1.jpg'),
          'text': '柯城这4个AAA景区村庄你去过那几个呢？',
          'url': 'https://mp.weixin.qq.com/s/jJKeDx1Atw3cssB8ViyfRg',
          'id': 0
        },
        {
          'image': require('../../assets/img/4.jpg'),
          'text': '史上最全柯城中高端民宿合集！',
          'url': 'https://mp.weixin.qq.com/s/vUs3H50CDHfbLuwVAyBQLQ',
          'id': 1
        },
        {
          'image': require('../../assets/img/3.jpg'),
          'text': '珍藏￨这可能是一份“最文艺”的七里旅游攻略！',
          'url': 'https://mp.weixin.qq.com/s/H1XlCtg8FhtaAUTd80gZHA',
          'id': 2
        }
      ]
    };
  },
  components: {
    BoxView
  }
};
</script>

<style scoped>

</style>
