<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="info" class="btn">信息按钮</van-button>
    <p class="text">請輸入：</p>
    <van-field
      readonly
      clickable
      :value="value"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard v-model="value" :show="show" @blur="show = false" />
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>

    <div class="aaa"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value: ""
    };
  }
};
</script>

<style>
.about {
  margin-bottom: 36px;
}
.aaa {
  width: 295px;
  height: 500px;
  background-color: #117dba;
  margin: 0 auto;
}
/* .btn {
  width: 200px;
  height: 100px;
} */
.text {
  font-size: 50px;
}
</style>