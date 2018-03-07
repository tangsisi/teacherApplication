<template>
  <div class="advantage-cards">
    <div class="advantage-card"  v-for="card in cards" :key="card.title">
      <div class="advantage-card-icon">
        <img :src="card.src" />
      </div>
      <div class="advantage-card-text">
        <div class="advantage-card-title">{{card.title}}</div>
        <div class="advantage-card-content">{{card.content}}</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageCard',
  props: {
    cards: {
      type: Array
    }
  }
}
</script>

<style>
.advantage-cards {
  width: 1200px;
  height: 600px;
  /* 屏幕小于1240px就产生滚动条，避免贴壁 */
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.advantage-card-icon {
  width: 106px;
  height: 106px;
  line-height: 132px;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  background-color: #5ac7b4; 
}
.advantage-card-icon img {
  width: 54px;
}
.advantage-card-text {
  width: 276px;
  height: 260px;
  background-color: #5ac7b4;
  margin-top: -28px;
  border-radius: 12px;
  color: #fff;
}
.advantage-card-title {
  height: 45px;
  font-size: 20px;
  text-align: center;
  padding: 20px 30px 10px 30px;
}
.advantage-card-content {
  line-height: 24px;
  padding: 0 20px;
}
</style>

