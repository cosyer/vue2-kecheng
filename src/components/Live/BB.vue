<template>
  <div class="bb">
    <div class="W-hotel" v-for=" (item, index) in DataB" :key="index" v-on:click.stop="bbClick(item.id)">
        <div class="W-hotel-img">
          <img :src="item.image1" alt="">
        </div>
        <div class="W-hotel-nr">
          <div class="W-title">
            <h3>{{ item.title }}</h3>
            <img src="../../assets/img/pic.png" alt="">
          </div>
          <p class="W-describe">
            {{ item.describe }}
          </p>
          <div class="W-qian">
            <p v-if="item.show"><i>¥{{ item.price }}</i>起</p>
            <p v-else><i></i>详情</p>
            <p>{{ item.address }}</p>
          </div>
        </div>
    </div>
    <div class="W-complete">
      <span>------- 加载完成 -------</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-b',
  props: ['DataB'],
  methods: {
    bbClick (index) {
      if (this.DataB[index].url) {
        window.location.href = this.DataB[index].url;
      }
    }
  }
};
</script>

<style scoped>

</style>
