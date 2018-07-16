<template>
    <div class="survey">
      <div class="W-su-img">
        <img src="../../assets/img/sleep_head.png" alt="">
      </div>
      <div class="W-su-nr">
        <span>概况介绍</span>
        <p>
          柯城区，是浙江省衢州市的市辖区，是衢州的经济、政治、文化、商业等中心。柯城区位于浙江省西部，钱塘江上游，东靠衢江区、西临常山县、西南与江山市接壤。
          柯城区总面积609平方公里，人口46.45万人（2010年），下辖2个镇、7个乡、8个街道，310个行政村、30个社区居委会。柯城区是国务院批准国家级历史文化名城之一。2013年柯城区实现生产总值112.4亿元。
        </p>
        <p>
          柯城区属亚热带季风气候区。全年四季分明，冬夏长、春秋短，光热充足、降水丰沛、气温适中、无霜期长，具有“春早秋短、夏冬长，温适、光足，旱涝明显”的特征。全年冬季风强于夏季风，最多风向市区、常山为东北偏东风向，龙游、江山为东北风，开化为北风。境内地貌多样，春夏之交，复杂的地形条件有助于静止锋的滞留，增加降水机遇。盛夏之际，台风较难深入境内，影响较小，静热天气较多。
        </p>
        <p>
          · 国家休闲区创建十点城市 <br>
          · 国家级历史文化名城 <br>
          · 中国有限旅游城市 <br>
          · 中国十大特色休闲城市国家森林城市 <br>
          · 国家园林城市 <br>
          · 国家卫生城市 <br>
          · 孔氏大宗第二故乡
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'survey',
};
</script>

<style scoped>
  .W-su-img {
    width: 100%;
    overflow: hidden;
    height: 200px;
  }
  .W-su-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .W-su-nr {
    width: 96%;
    margin: 0 auto;
    padding: 10px 0;
    overflow: hidden;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .W-su-nr span:nth-child(1) {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    line-height: 20px;
    height: 18px;
  }
  .W-su-nr span:nth-child(1):before {
    width: 5px;
    height: 100%;
    margin-right: 7px;
    background: rgb(102,153,204);
    content: '';
    display: inline-block;
  }
  .W-su-nr p {
    color: #444;
    line-height: 20px;
    margin-top: 5px;
  }
  .W-su-nr p:nth-child(2), .W-su-nr p:nth-child(3) {
    text-indent: 30px;
  }
  .W-su-nr p:nth-child(4){
    padding-left: 30px;
  }
</style>
