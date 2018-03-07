<template>
  <div class="step-flow">
    <div class="step-innerwrap">
      <div class="step">
        <div class="step-circle pen">
        </div>
        <div class="step-title">Fill out the application</div>
        <div class="step-content">It takes less than five minutes to change your life.Teach English to kids online.</div>
      </div>
      <div class="stepto"></div>
      <div class="step">
        <div class="step-circle user-computer">
        </div>
        <div class="step-title">Interview</div>
        <div class="step-content">We will contact the most qualified applicants within a few days to schedule an interview.</div>
      </div>
      <div class="stepto"></div>
      <div class="step">
        <div class="step-circle user-check">
        </div>
        <div class="step-title">Offer</div>
        <div class="step-content">Shortly thereafter, we will notify successful applicants and begin the placement process.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepFlow'
}
</script>


<style>
  .step-flow {
    background-color: #f8f8f8;
  }
  .step-flow .step-innerwrap {
    width: 1200px;
    height: 336px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .step-flow .step {
    width: 350px;
    text-align: center;
  }
  .step-flow .stepto {
    width: 20px;
    height: 36px;
    background: url(../../static/images/stepto.png) center center no-repeat;
  }
  .step-flow .step .step-circle {
    width: 114px;
    height: 114px;
    margin: 0 auto;
    border: 3px solid #40BBA4;
    border-radius: 50%;  
  }
  .step-flow .step .pen {
    background: url(../../static/images/pen.png) center center no-repeat;
    background-size: 62% 62%;
  }
  .step-flow .step .user-computer {
    background: url(../../static/images/user-computer.png) center center no-repeat;
    background-size: 62% 62%;
  }
  .step-flow .step .user-check {
    background: url(../../static/images/user-check.png) center center no-repeat;
    background-size: 62% 62%;
  }
  .step-flow .step .step-title {
    font-size: 22px;
    line-height: 36px;
    padding-top: 10px;
  }
  .step-flow .step .step-content {
    line-height: 25px;
  }
</style>
