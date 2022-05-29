<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button class="counter" @click="count++">
    <span><slot /></span>
    <span>{{ `[${count}]` }}</span>
  </button>
</template>
