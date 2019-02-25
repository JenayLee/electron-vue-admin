<template>
  <div class="custom-login-wraper">
    <x-particles class="custom-particles" :config='particleConfig'></x-particles>
    <a-form :form="form"
            class="custom-login-form"
            @submit="handleSubmit">
      <a-form-item :validate-status="userNameError() ? 'error' : ''"
                   :help="userNameError() || ''">
        <a-input v-decorator="handleDecorator('userName')"
              placeholder="请输入用户名">
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="passwordError() ? 'error' : ''"
                   :help="passwordError() || ''">
        <a-input v-decorator="handleDecorator('password')"
                 placeholder="请输入密码"
                 type="password">
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox>记住我</a-checkbox>
        <a class="custom-form-fogot">忘记密码</a>
        <a-button block
                  type="primary"
                  html-type="submit"
                  :disabled="hasErrors(form.getFieldsError())">登 录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import defConfig from './config/snow.js'
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this),
      particleConfig: {},
      ruleValidate: {
        userName: {rules: [{ required: true, message: '请输入用户名' }]},
        password: {rules: [{required: true, message: '请输入密码'}]}
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.particleConfig = defConfig
      this.form.validateFields()
    })
  },
  methods: {
    userNameError () {
      const {getFieldError, isFieldTouched} = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    passwordError () {
      const {getFieldError, isFieldTouched} = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(`Recevied value of form: ${values}`)
        }
      })
    },
    handleDecorator (field) {
      let arr = []
      arr[0] = field
      arr[1] = this.ruleValidate[field]
      return arr
    }
  }
}
</script>
<style lang="less">
  @import url('./login.less');
</style>

