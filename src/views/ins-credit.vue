<template>
  <div id="ins-credit">
    <van-nav-bar
      title="INS CREDIT"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main-content">
      <img src="../assets/no-card.png" alt="" />
      <div>
        <p>You also bind the payment card,</p>
        <p>please bind it first</p>
      </div>
      <div class="submit">
        <span>Immediately tied card</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {}
  }
};
</script>

<style>
#ins-credit .van-nav-bar {
  height: 44px;
  line-height: 44px;
}
#ins-credit .van-nav-bar__title {
  color: #1dcf9f;
  height: 44px;
  line-height: 44px;
  font-family: SFProText-Regular;
}
#ins-credit .van-nav-bar__left i {
  color: #1dcf9f;
}
#ins-credit .main-content {
  width: 100%;
  height: 100%;
}
#ins-credit .main-content img {
  width: 64px;
  height: 64px;
  padding-top: 60px;
  padding-bottom: 4px;
  display: block;
  margin: 0 auto;
}
#ins-credit .main-content p {
  text-align: center;
  line-height: 22px;
  margin: 0;
  font-family: SFProText-Regular;
  font-size: 14px;
  color: #919191;
}
#ins-credit .main-content .submit {
  width: 203px;
  height: 48px;
  margin: 28px auto 0;
  border: 0.5px solid #8497a4;
  border-radius: 5px;
  cursor: pointer;
}
#ins-credit .main-content .submit span {
  font-family: SFProText-Regular;
  font-size: 16px;
  color: #515f68;
  text-align: center;
  line-height: 48px;
}
</style>