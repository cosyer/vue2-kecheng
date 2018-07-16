<template>
    <div class="by">
      <BannerView></BannerView>
      <div class="W-wu">
        <listView v-bind:EatData="item" v-for="(item, index) in ByData" :key="index" v-on:click.native.stop="BylistClick(index)"></listView>
        <div style="clear: both;"></div>
        <div class="W-complete">
          <span>------- 加载完成 -------</span>
        </div>
      </div>

    </div>
</template>

<script>
import BannerView from '../Piecemeal/banner';
import listView from '../Piecemeal/list';
export default {
  name: 'by',
  data () {
    return {
      ByData: ''
    };
  },
  components: {
    BannerView,
    listView
  },
  created () {
    if (this.$route.params.ByData) {
      this.ByData = this.$route.params.ByData;
      localStorage.setItem('ByData', JSON.stringify(this.$route.params.ByData));
    } else {
      this.ByData = JSON.parse(localStorage.getItem('ByData'));
    };
  },
  methods: {
    BylistClick (index) {
      window.location.href = this.ByData[index].url;
    }
  }
};
</script>

<style scoped>
  .by {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgb(246,246,246);
  }
  .W-wu {
    width: 100%;
    padding: 5px 0;
    overflow: hidden;
  }
</style>
