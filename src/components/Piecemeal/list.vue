<template>
  <div class="list">
    <div class="W-eat">
      <ul>
        <li>
          <img :src="EatData.image" alt="">
          <h5>{{ EatData.title }}</h5>
          <p>{{ EatData.business }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['EatData']
};
</script>

<style scoped>
  .list {
    overflow: hidden;
    width: 46%;
    float: left;
    margin: 5px 0 5px 2.7%;
  }
  .W-eat ul li {
    font-size: 14px;
    background: #fff;
    height: 220px;
  }
  .W-eat ul li img {
    width: 100%;
    height: 176px;
    object-fit: cover;
  }
  .W-eat ul li h5,.W-eat ul li p {
    padding-left: 4px;
    line-height: 20px;
  }
  .W-eat ul li h5 {
    color: #000;
  }
  .W-eat ul li p {
    color: #999;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 94%;
  }
</style>
