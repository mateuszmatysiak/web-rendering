<template>
  <button class="counter" @click="count++">
    <p><slot /></p>
    <strong>{{ count }}</strong>
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
