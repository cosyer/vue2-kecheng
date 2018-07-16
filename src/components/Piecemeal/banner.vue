<template>
  <div class="block">
    <el-carousel :interval="interval" :indicator-position="outside" trigger="click" :height="height" :arrow="arrow"  >
      <el-carousel-item >
        <img src="../../assets/img/Tourism_1.png" alt="" ref="img" >
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/img/sleep_head.png" alt="" ref="img">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/img/food_head.png" alt="" ref="img">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../../assets/img/Tourism_1.png" alt="" ref="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      height: '',
      outside: 'outside',
      arrow: 'never',
      interval: 4000
    };
  },
  mounted () {
    this.$refs.img.onload = () => {
      this.height = this.$refs.img.offsetHeight + 'px';
    };
  }
};
</script>

<style>
  .el-carousel__item img {
    width: 100%;
    display: block;
    height: auto;
  }

  .el-carousel__item{
    background-color: #fff;
  }
  .el-carousel__indicators--outside {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
  .el-carousel__indicators--outside {
    text-align: right;
  }
  .el-carousel__indicator .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #fff;
    opacity: 1;
    background: transparent;
  }
  .el-carousel .el-carousel__indicators .is-active button{
    background: #fff;
    opacity: 1;
  }
</style>
