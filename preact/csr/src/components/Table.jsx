import { h } from "preact";

const Table = ({ tableRows }) => {
  return (
    <table>
      <tr>
        <th>Kolumna 1</th>
        <th>Kolumna 2</th>
        <th>Kolumna 3</th>
      </tr>

      {tableRows.map((row) => (
        <tr key={row.id}>
          <th>{row.name}</th>
          <th>{row.name}</th>
          <th>{row.name}</th>
        </tr>
      ))}
    </table>
  );
};

export default Table;
