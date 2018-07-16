<template>
  <div class="W-details">
    <div class="W-img" :style="Wheight">
      <img :src="data[key1].image1[key2]" alt="">
    </div>
    <div class="W-de-nr">
      <span>{{ data[key1].Scenery[key2] }}</span>
      <p>
        {{ data[key1].describe[key2] }}
      </p>
    </div>
    <div class="W-img" :style="Wheight">
      <img :src="data[key1].image2[key2]" alt="">
    </div>

    <div class="W-contact">
      <p>营业时间：8:00am - 19：00pm</p>
      <p>景区地址：{{ data[key1].address[key2] }}</p>
      <p>联系电话：{{ data[key1].phone[key2] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'W-details',
  data () {
    return {
      key1: '',
      key2: '',
      data: '',
      Wheight: {
        height: '200px'
      }
    };
  },
  created () {
    if (this.$route.params.key1 !== undefined) {
      this.key1 = this.$route.params.key1;
      this.key2 = this.$route.params.key2;
      this.data = this.$route.params.data;
      localStorage.setItem('key1', this.$route.params.key1);
      localStorage.setItem('key2', this.$route.params.key2);
      localStorage.setItem('data', JSON.stringify(this.$route.params.data));
    } else {
      this.key1 = localStorage.getItem('key1');
      this.key2 = localStorage.getItem('key2');
      this.data = JSON.parse(localStorage.getItem('data'));
    };
    document.title = this.data[this.key1].Scenery[this.key2];
  },
  computed: {
  }
};
</script>

<style scoped>
  .W-img {
    width: 100%;
    overflow: hidden;
  }
  .W-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .W-de-nr {
    width: 96%;
    margin: 0 auto;
    padding: 10px 0px;
    overflow: hidden;
    color: rgb(43,43,43);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
  }
  .W-de-nr p {
    text-indent: 30px;
    letter-spacing: 2px;
  }
  .W-de-nr span {
    line-height: 30px;
    font-size: 15px;
  }
  .W-contact {
    width: 96%;
    margin: 10px auto;
    font-size: 14px;
  }
  .W-contact p {
    width: 80%;
    margin: 0 auto;
    color: rgb(43,43,43);
    line-height: 20px;
  }
</style>
