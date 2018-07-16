<template>
    <div class="box" v-on:click.stop="boxClick()">
      <div class="W-hot-img">
        <span>{{ HotData.text }}</span>
        <img :src="HotData.image" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'box',
  props: ['HotData'],
  methods: {
    boxClick () {
      window.location.href = this.HotData.url;
    }
  }
};
</script>

<style scoped>
  .W-hot-img {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .W-hot-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .W-hot-img span {
    font-size: 20px;
    font-weight: 700;
    width: 90%;
    position: absolute;
    height: 26px;
    line-height: 30px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    top: 70px;
    left: 5%;
    color: #fff;
  }
</style>
