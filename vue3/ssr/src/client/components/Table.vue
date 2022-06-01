<template>
  <table>
    <tr>
      <th>Kolumna 1</th>
      <th>Kolumna 2</th>
      <th>Kolumna 3</th>
    </tr>

    <tr v-for="row in tableRows" :key="row.id">
      <td>{{ row.name }}</td>
      <td>{{ row.name }}</td>
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["tableRows"],
};
</script>
