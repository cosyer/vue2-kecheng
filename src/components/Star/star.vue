<template>
    <div class="star">
      <BoxView v-for="(item, index) in StarData" :key="index" :HotData="item"></BoxView>
    </div>
</template>

<script>
import BoxView from '../Piecemeal/box';
export default {
  name: 'star',
  components: {
    BoxView
  },
  data () {
    return {
      StarData: [
        {
          'image': require('../../assets/img/6.jpg'),
          'text': '长假豪华线路游',
          'url': 'https://mp.weixin.qq.com/s/xEVMUVWM4EOexWG86x5_yg',
          'id': 0
        },
        {
          'image': require('../../assets/img/7.jpg'),
          'text': '乡村休闲线路游',
          'url': 'https://mp.weixin.qq.com/s/uS8C92UvPS3F3srWcxnPGA',
          'id': 1
        },
        {
          'image': require('../../assets/img/8.jpg'),
          'text': '经典疗养线路游',
          'url': 'https://mp.weixin.qq.com/s/RcRQsjhkR5n5M465Ped7rw',
          'id': 2
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
