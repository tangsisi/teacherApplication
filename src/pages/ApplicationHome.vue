<template>
  <div class="application-home">

    <div class="banner">
      <div class="banner-img">
        <img src="../../static/images/home-hn.jpg" />
      </div>
      <div class="banner-nav">
        <nav-menu></nav-menu>
      </div>
      <div class="banner-section">
        <router-link to="/job" class="banner-btn">Apply for this Job</router-link>
        <div class="banner-text">Get started on your path to teaching Chinese children online</div>
      </div> 
    </div>

    <div class="are-nyse">
      <div class="are">
        <div class="title"><span class="distinct">W</span>ho we are</div>
        <div class="content">{{Contenta}}</div>
      </div>
      <div class="nyse"></div>
    </div>

    <div class="work-do">
      <div class="work">
        <img src="../../static/images/work.jpg" />
      </div>
      <div class="do">
        <div class="title"><span class="distinct">W</span>hat we do</div>
        <div class="content">{{Contentb}}</div>
      </div>
    </div> 

    <div class="advantage">
      <div class="advantage-title">How we Help you Succeed</div>
      <advantage-card :cards="cardsArray"></advantage-card>
    </div>

    <div class="responsibility-wrap">
      <div class="job-responsibility">
        <div class="job">
          <div class="title"><span class="distinct">J</span>ob Responsibilities</div>
          <div class="content">
            <div>You will be responsible for preparing engaging lessons using our curriculum.</div>
            <div>You will teach one to one, and group classes to young English learners aged between 5 and 12.</div>
            <div>You will be responsible for providing lesson reports based on students’ strengths, areas for improvement and recommendations.</div>
            <div>You will undergo regular training and work to improve your teaching skills.</div>
          </div>
        </div>
        <div class="responsibility">
          <img src="../../static/images/responsibility.jpg" />
        </div>
      </div>
    </div>

    <div class="banner2">
      <div class="banner2-img">
        <img src="../../static/images/ready.jpg" />
      </div>
      <div class="banner2-section">
        <div class="banner2-text">Are you ready ? </div>
        <router-link to="/job" class="banner2-btn">Apply Now</router-link> 
      </div>    
    </div>

    <div class="partner">
      <div class="partner-title">Partners</div>
      <div class="partner-logo">
        <a class="partner-logo-xdf" href="http://www.neworiental.org/english/index.html" target="_blank">
          <img src="../../static/images/xdf-logo-m.png" />
        </a>
        <a class="partner-logo-koolearn" href="http://login.koolearn.com/sso/toLogin.do?next_page=http://timetabling.koolearn.com/login/index" target="_blank">
          <img src="../../static/images/koolearn-logo.png" />
        </a>
        <a class="partner-logo-classin" href="http://www.eeo.cn/download.html" target="_blank">
          <img src="../../static/images/classin-logo.png" />
        </a>
      </div> 
    </div>

    <dark-footer></dark-footer>
  </div>  
</template>

<script>
import NavMenu from '../components/NavMenu'
import AdvantageCard from '../components/AdvantageCard'
import DarkFooter from '../components/DarkFooter'

export default {
  name: 'ApplicationHome',
  components: {
    NavMenu,
    AdvantageCard,
    DarkFooter
  },
  data () {
    return {
      Contenta: 'New Oriental is publicly traded on the NYSE [ EDU ]. At New Oriental, our mission is to inspire Chinese students of all ages to improve their lives and expand their horizons through a lifelong commitment to learning. By empowering students to achieve their potential, build self-confidence, and develop a global vision encompassing both traditional Chinese values and modern thinking, New Oriental is committed to training a new generation of business and community leaders.',
      Contentb: 'We are dedicated in molding high-quality online courses through inter-linking the most excellent teachers all over the world and Chinese children with enthusiasm in language learning, so as to provide equally high-quality English education toward children all over China and initiate infinite possibilities for their future.',
      cardsArray: [{
          title: 'Stable Income',
          src: '../../static/images/wallet.png',
          content: 'Life as an English teacher at New Oriental is both challenging and rewarding. We provide teachers with competitive local wages.'
        },{
          title: 'Convenient Working Environment',
          src: '../../static/images/home.png',
          content: 'As long as you have a computer and a link to the network, you can work at home. You will teach regular schedules for each week. This means that you can get into a regular schedule and plan your days off.'
        },{
          title: 'Mold the Life of a Child',
          src: '../../static/images/magic.png',
          content: 'Teach English to kids online and start a job with a difference.  As the online teaching industry is fairly new, you can be at the forefront of change and help shape how kids learn online for years to come.'
        },{
          title: 'Professional Support',
          src: '../../static/images/nice.png',
          content: 'As soon as you join us, we will give you all the training you need to get you up to speed, and using the latest technology to deliver captivating lessons on our industry leading online platform.'
        }]
    }
  }
}
</script>


<style>
/* -----------banner begin--------- */
/* 用来定位导航栏和按钮 */
.application-home .banner {
  position: relative;
  margin-bottom: 50px;
}
.application-home .banner .banner-img img {
  /* 图片等比缩放，最小宽度1200px，若屏幕小于1200px则出现滚动条 */
  width: 100%;
  min-width: 1200px;
}
/* 导航栏始终相对于图片位置 */
.application-home .banner .banner-nav {
  position: absolute;
  top: 50px;
  margin-left: 18.75%;
}
.application-home .banner .banner-section {
  position: absolute;
  right: 20.8%;
  bottom: 21.6%;
  text-align: right;
}
.application-home .banner .banner-section .banner-btn {
  /* router-link自动渲染成a标签 */
  display: inline-block;
  width: 400px;
  height: 80px;
  font-size: 36px;
  line-height: 80px;
  margin-bottom: 25px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #40BBA4;
  border-color: #40BBA4;
  border-radius: 12px;
}
.application-home .banner .banner-section .banner-btn:hover {
  background: rgb(102, 201, 182);
  border-color: rgb(102, 201, 182);
}
.application-home .banner .banner-section .banner-text {
  font-size: 26px;
  color: #fff;
}
/* -----------banner end--------- */


/* -----------are-nyse begin--------- */
.application-home .are-nyse {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
}
.application-home .are-nyse .are {
  float: left;
  width: 560px;
  height: 460px;
  padding: 20px 40px 20px 20px;
}
.application-home .are-nyse .are .title {
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
}
.title .distinct {
  color: #40BBA4;
  font-size: 42px;
}
.content {
  font-size: 20px;
  line-height: 44px;
}
.application-home .are-nyse .nyse {
  float: left;
  width: 580px;
  height: 500px;
  background: url(../../static/images/nyse.jpg) center center no-repeat;
  background-size: cover;
}
/* -----------are-nyse end--------- */


/* -----------work-do begin--------- */
.application-home .work-do {
  width: 1200px;
  height: 500px;
  margin: 0 auto 50px;
}
.application-home .work-do .work {
  float: left;
  width: 620px;
  height: 500px;
}
.application-home .work-do .work img {
  float: right;
}
.application-home .work-do .do {
  float: left;
  width: 520px;
  height: 460px;
  padding: 20px 20px 20px 40px;
}
.application-home .work-do .do .title {
  font-size: 30px;
  padding-top: 60px;
  padding-bottom: 40px;
  font-weight: bold;
}
/* -----------work-do end--------- */


.application-home .advantage {
  height: 600px;
  background-color: #f8f8f8;
}
.application-home .advantage  .advantage-title {
  height: 180px;
  font-size: 36px;
  line-height: 180px;
  font-weight: bold;
  text-align: center;
}


/* -----------job-responsibility begin--------- */
.application-home .responsibility-wrap {
  width: 100%;
  overflow: hidden;
}
.application-home .job-responsibility {
  width: 1200px;
  height: 560px;
  margin: 50px auto 50px;
}
.application-home .job-responsibility .job {
  float: left;
  width: 465px;
  height: 520px;
  padding: 20px 40px 20px 20px;
}
.application-home .job-responsibility .job .title {
  font-size: 30px;
  line-height: 90px;
  font-weight: bold;
}
.application-home .job-responsibility .responsibility {
  float: left;
  width: 665px;
  height: 560px;
}
.application-home .job-responsibility .responsibility img{
  float: left;
}
/* -----------job-responsibility end--------- */


/* -----------banner begin--------- */
/* 用来定位导航栏和按钮 */
.application-home .banner2 {
  position: relative;
}
.application-home .banner2 .banner2-img img {
  /* 图片等比缩放，最小宽度1200px，若屏幕小于1200px则出现滚动条 */
  width: 100%;
  min-width: 1200px;
}
.application-home .banner2 .banner2-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.application-home .banner2 .banner2-section .banner2-btn {
  /* router-link自动渲染成a标签 */
  display: inline-block;
  width: 400px;
  height: 80px;
  font-size: 36px;
  line-height: 80px;
  margin-bottom: 25px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #40BBA4;
  border-color: #40BBA4;
  border-radius: 12px;
}
.application-home .banner2 .banner2-section .banner2-btn:hover {
  background: rgb(102, 201, 182);
  border-color: rgb(102, 201, 182);
}
.application-home .banner2 .banner2-section .banner2-text {
  font-size: 62px;
  margin-bottom: 60px;
}
/* -----------banner end--------- */


/* -----------partner begin--------- */
.application-home .partner {
  width: 800PX;
  height: 200px;
  margin: 0 auto;
}
.application-home .partner .partner-title {
  font-size: 32px;
  line-height: 80px;
  font-weight: bold;
  text-align: center;
}
.application-home .partner .partner-logo {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.application-home .partner .partner-logo-xdf img {
  width: 104px;
}
.application-home .partner .partner-logo-koolearn img {
  width: 115px;
}
.application-home .partner .partner-logo-classin img {
  width: 136px;
}
/* -----------partner end--------- */
</style>

