<template>
  <div>

  </div>
  <n-table :data="dataList">
    <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) of dataList" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.gender }}</td>
    </tr>
    </tbody>
  </n-table>

</template>

<script setup>
import { useUserStore } from '@/store/modules/user'
import {reactive} from "vue";

const userStore = useUserStore()


const dataList = reactive([{
  name: "nihao",
  age: 12,
  gender: "难",
}]);

</script>
