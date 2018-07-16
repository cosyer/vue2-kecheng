<template>
    <div class="HotelDetails">
      <div class="W-img">
        <img :src="DataJ[id].image2" alt="">
      </div>
      <div class="W-de-box">
        <div class="W-de-nr">
          <h3>{{ DataJ[id].title }}</h3>
          <p>地 &nbsp;&nbsp; 址：{{ DataJ[id].address }}</p>
          <p>联系电话：{{ DataJ[id].phone }}</p>
        </div>
      </div>
      <div class="W-conent">
        <p>{{ DataJ[id].conent }}</p>
      </div>
      <div class="W-ding" v-on:click.stop="DingClick(id)">
        订
      </div>
      <el-button v-show="Xiao" :plain="true" @click="open">消息</el-button>
    </div>
</template>

<script>
export default {
  name: 'hotel-details',
  data () {
    return {
      DataJ: '',
      id: '',
      Xiao: false
    };
  },
  created () {
    if (this.$route.params.id !== undefined) {
      this.DataJ = this.$route.params.DataJ;
      this.id = this.$route.params.id;
      localStorage.setItem('id', this.$route.params.id);
      localStorage.setItem('DataJ', JSON.stringify(this.$route.params.DataJ));
    } else {
      this.DataJ = JSON.parse(localStorage.getItem('DataJ'));
      this.id = localStorage.getItem('id');
    };
    document.title = this.DataJ[this.id].title;
  },
  methods: {
    DingClick (index) {
      if (this.DataJ[this.id].OrderUrl) {
        window.location.href = this.DataJ[this.id].OrderUrl;
      } else {
        this.open();
      }
    },
    open () {
      this.$message({
        message: '暂无购票信息！',
        center: true
      });
    },
  }
};
</script>

<style scoped>
  .W-img {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .W-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .W-de-box {
    width: 100%;
    padding: 10px 0;
    overflow: hidden;
  }
  .W-de-nr {
    width: 96%;
    margin: 0 auto;
    padding: 0 0 2% 1%;
    overflow: hidden;
    border-bottom: 1px solid rgb(228,228,228);
  }
  .W-de-nr p {
    font-size: 14px;
    line-height: 22px;
  }
  .W-conent {
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
  }
  .W-conent p {
    width: 96%;
    margin: 0 auto;
    line-height:20px;
    text-indent: 30px;
    font-size: 14px;
    color: rgb(84,84,84);
    padding-bottom: 50px;
    letter-spacing: 2px;
  }
  .W-ding {
    width: 100% ;
    height: 40px;
    background: rgb(255,102,0);
    position: fixed;
    bottom: 0px;
    left: 0px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
  }
</style>
