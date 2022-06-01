import { data, ELEMENTS } from "../../../../config";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Main from "./components/Main";
import Table from "./components/Table";
import { h } from "preact";

function App() {
  return (
    <Main>
      <Header name="Preact" renderType="SSR" numberOfElements={ELEMENTS} />

      <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
      </div>

      <Footer name="Preact SSR" />
    </Main>
  );
}

export default App;
