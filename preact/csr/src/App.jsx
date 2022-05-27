import { data, ELEMENTS } from "../../../config";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
  return (
    <Main>
      <Header name="Preact" renderType="CSR" numberOfElements={ELEMENTS} />

      <Grid>
        {data.counters.map((counter) => (
          <Counter key={counter.id}>{counter.name}</Counter>
        ))}
      </Grid>

      <Table tableRows={data.tableRows} />

      <List>
        {data.listItems.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>

      <Footer name="Preact CSR" />
    </Main>
  );
}

export default App;
