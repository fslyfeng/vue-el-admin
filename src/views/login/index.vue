<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9 col-md-7 col-lg-5 m-auto pt-5">
          <div class="card mt-5">
            <div class="card-header bg-white">
              <h3 class="text-center mb-0 text-secondary">UNI-ADMIN</h3>
            </div>
            <div class="card-body">
              <el-form :model="form" ref="form">
                <el-form-item>
                  <el-input
                    v-model="form.username"
                    placeholder="请输入用户名称"
                    size="medium"
                  ></el-input
                ></el-form-item>
                <el-form-item>
                  <el-input
                    v-model="form.password"
                    placeholder="请输入密码"
                    size="medium"
                  ></el-input>
                </el-form-item>
                <el-orm-item>
                  <el-button type="primary" size="medium" class="w-100"> 立即登录</el-button>
                </el-orm-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { form: { username: "", password: "" } };
  },
};
</script>

<style lang="scss" scoped></style>
