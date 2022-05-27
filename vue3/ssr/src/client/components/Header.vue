<script>
export default {
  props: ["name", "renderType", "numberOfElements"],
};
</script>

<template>
  <header class="header">
    <h1 class="header-name">
      <span>{{ name }}</span> {{ renderType }}
    </h1>
    <p>
      <strong>{{ Intl.NumberFormat("pl-PL").format(numberOfElements) }}</strong
      >{{ " " }} wyrenderowanych elementów
    </p>
  </header>
</template>
