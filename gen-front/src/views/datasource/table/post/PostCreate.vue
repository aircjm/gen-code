<template>
  <div p-24>
    <div h-60 pl-20 pr-20 flex items-center bg-white>
      <input
        v-model="post.title"
        class="flex-1 pt-15 pb-15 mr-20 text-20 font-bold color-primary"
        type="text"
        placeholder="输入数据源名称" />
      <n-button type="primary" style="width: 80px" :loading="btnLoading" @click="handleSavePost">保存</n-button>
    </div>
    <n-form ref="formRef" :model="post">
      <n-form-item label="ip/domain">
        <n-input v-model:value="post.ip" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item label="port">
        <n-input-number v-model:value="post.port" clearable />
      </n-form-item>
      <n-form-item label="username">
        <n-input v-model:value="post.username" @keydown.enter.prevent />

      </n-form-item>
      <n-form-item label="password">
        <n-input v-model:value="post.password" @keydown.enter.prevent />
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const router = useRouter()

// refs
let post = ref({})
let btnLoading = ref(false);
const formRef = ref(null)


function handleSavePost(e) {
  btnLoading.value = true
  $message.loading('正在保存...')
  console.log(JSON.stringify(post.value))

  post.password = "password"
  console.log(JSON.stringify(post.value))

  setTimeout(() => {
    $message.success('保存成功')
    btnLoading.value = false
    router.push('/datasource/table/post')
  }, 2000)
}
</script>

<style lang="scss">
.md-preview {
  ul,
  ol {
    list-style: revert;
  }
}
</style>
