<template>
  <div class="eat">
    <div class="W-img">
      <img src="../../assets/img/food_head.png" alt="">
    </div>
    <div class="W-eat-box">
      <listView v-for="(item, index) in EatData" :key="index" :EatData="item" v-on:click.native.stop="listClick(index)"></listView>
      <div style="clear: both;"></div>
    </div>
    <div class="W-complete">
      <span>------- 加载完成 -------</span>
    </div>
  </div>
</template>

<script>
import listView from '../Piecemeal/list';
export default {
  name: 'eat',
  components: {
    listView
  },
  data () {
    return {
      EatData: ''
    };
  },
  created () {
    if (this.$route.params.EatData) {
      this.EatData = this.$route.params.EatData;
      localStorage.setItem('EatData', JSON.stringify(this.$route.params.EatData));
    } else {
      this.EatData = JSON.parse(localStorage.getItem('EatData'));
    };
  },
  methods: {
    listClick (index) {
      window.location.href = this.EatData[index].url;
    }
  }
};
</script>

<style scoped>
  .eat {
    background: rgb(246,246,246);
  }
  .W-eat-box {
    padding: 5px 0;
  }
  .W-img {
    width: 100%;
    height: 200px;
  }
  .W-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
