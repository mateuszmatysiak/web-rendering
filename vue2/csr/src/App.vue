<script>
import { data, ELEMENTS } from "../../../config";
import Counter from "./components/Counter.vue";
import Footer from "./components/Footer.vue";
import Grid from "./components/Grid.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import ListItem from "./components/ListItem.vue";
import Main from "./components/Main.vue";
import Table from "./components/Table.vue";
import "./index.css";

export default {
  data() {
    return {
      listItems: data.listItems,
      tableRows: data.tableRows,
      counters: data.counters,
      ELEMENTS,
    };
  },
  components: {
    Main,
    List,
    ListItem,
    Header,
    Footer,
    Table,
    Grid,
    Counter,
  },
};
</script>

<template>
  <Main>
    <Header :name="'Vue 2'" :renderType="'CSR'" :numberOfElements="ELEMENTS" />

    <div class="grid" style="grid-template-columns: repeat(3, 1fr)">
      <Grid>
        <Counter v-for="counter in counters" :key="counter.id">
          {{ counter.name }}
        </Counter>
      </Grid>

      <Table :tableRows="tableRows" />

      <List>
        <ListItem v-for="item in listItems" :key="item.id">
          {{ item.name }}
        </ListItem>
      </List>
    </div>

    <Footer name="Vue 2 CSR" />
  </Main>
</template>
