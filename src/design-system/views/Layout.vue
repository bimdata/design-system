<template>
  <div style="display: flex">
    <Aside />
    <router-view />
  </div>
</template>

<script>
import Aside from "./Aside.vue";

export default {
  components: {
    Aside
  }
}
</script>