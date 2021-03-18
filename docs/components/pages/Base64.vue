<template>
  <div class="base64">
    <el-input type="textarea" clearable :rows="10" v-model="msg" />
    <div class="buttons">
      <el-button @click="encode">encode→</el-button>
      <el-button @click="decode">←decode</el-button>
    </div>
    <el-input type="textarea" clearable :rows="10" v-model="msg2" />
  </div>
</template>
<script>
import { encode, decode } from 'elementui-custom/package/utils/base64'
export default {
  data() {
    return {
      msg: '',
      msg2: ''
    }
  },

  methods: {
    encode() {
      this.msg2 = encode(this.msg)
    },
    decode() {
      this.msg = decode(this.msg2)
    }
  }
}
</script>
<style lang="scss" scoped>
.base64 {
  display: flex;
  flex-direction: row;
  align-items: center;
  .buttons {
    margin: 0 20px;
    .el-button {
      margin-left: 0;
    }
  }
}
</style>
