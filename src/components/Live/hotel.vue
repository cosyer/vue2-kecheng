<template>
    <div class="hotel">
      <div class="W-hotel" v-for=" (item, index) in DataJ" :key="index">
        <router-link class="router-link1" :to="{name: 'liveHotel', params: {id: item.id, DataJ: DataJ}}">
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
        </router-link>
      </div>
      <div class="W-complete">
        <span>------- 加载完成 -------</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hotel',
  props: ['DataJ']
};
</script>

<style>
  .W-hotel {
    width: 96%;
    margin: 0 auto;
    height: 110px;
    padding: 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #e4e7ed;
    display: flex;
    flex-direction: row;
  }
  .W-hotel-img {
    width: 25%;
    height: 110px;
  }
  .W-hotel-nr {
    width: 70%;
    padding: 5px 2.5%;
    font-size: 14px;
    color: #999999;
  }
  .W-describe {
    margin-top: 4px;
    line-height: 19px;
    height: 38px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .W-hotel-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .W-title {
    display: flex;
    flex-direction: row;
  }
  .W-title img {
    width: 20px;
    height: 20px;
  }
  .W-title h3 {
    overflow: hidden;
    text-overflow:ellipsis;
    height: 25px;
    white-space: nowrap;
  }
  .W-qian {
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .W-qian p {
    letter-spacing: normal;
    white-space: nowrap;
  }
  .W-qian p:nth-child(1) i {
    color: red;
    font-size: 18px;
    font-weight: lighter;
  }
  .W-qian p:nth-child(2) {
    margin-top: 10px;
    white-space: normal;
  }
  .router-link1 {
    display: flex;
    flex-direction: row;
  }
</style>
