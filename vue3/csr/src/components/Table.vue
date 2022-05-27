<script>
export default {
  props: ["tableRows"],
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Kolumna 1</th>
        <th>Kolumna 2</th>
        <th>Kolumna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableRows" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
