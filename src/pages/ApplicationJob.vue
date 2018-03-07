<template>
  <div class="application-job">
    <div class="banner">
      <div class="banner-img">
        <img src="../../static/images/job-hn.jpg" />
      </div>
      <div class="banner-nav">
        <nav-menu></nav-menu>
      </div>
      <div class="banner-section">
        <div class="banner-title">If you are</div>
        <ul>
          <li>Native speaker</li>
          <li>A university degree</li>
          <li>Minimum 1 years' experience teaching English preferably as a second language. TESL/CELTA/TEFL certificate would be an advantage.</li>
          <li>Reliable cable Internet connection, Headset (headphones and a microphone) and Webcam</li>
        </ul>
      </div> 
    </div>

    <step-flow></step-flow>

    <fill-form></fill-form>

    <dark-footer></dark-footer>
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu'
import StepFlow from '../components/StepFlow'
import DarkFooter from '../components/DarkFooter'
import FillForm from '../components/FillForm'

export default {
  name: 'ApplicationJob',
  components: {
    NavMenu,
    DarkFooter,
    StepFlow,
    FillForm
  }
}
</script>

<style>
/* -----------banner begin--------- */
/* 用来定位导航栏和按钮 */
.application-job .banner {
  position: relative;
}
.application-job .banner .banner-img img {
  /* 图片等比缩放，最小宽度1200px，若屏幕小于1200px则出现滚动条 */
  width: 100%;
  min-width: 1200px;
  /* 图片下面有间隙的解决方案 */
  display: block;
}
/* 导航栏始终相对于图片位置 */
.application-job .banner .banner-nav {
  position: absolute;
  top: 50px;
  margin-left: 18.75%;
}
.application-job .banner .banner-section {
  position: absolute;
  left: 18.75%;
  bottom: 10%;
}
.application-job .banner .banner-section .banner-title {
  font-size: 32px;
  color: #fff;
}
.application-job .banner .banner-section ul {
  width: 480px;
  color: #fff;
  margin-left: -20px;
  font-size: 20px;
}
.application-job .banner .banner-section ul li {
  line-height: 32px;
}
@media screen and (max-width: 1620px) {
  .application-job .banner .banner-section {
    bottom: 7%;
  }
  .application-job .banner .banner-section ul {
    width: 640px;
    font-size: 18px;
  }
  .application-job .banner .banner-section ul li {
    line-height: 28px;
  }
}
/* -----------banner end--------- */
</style>

