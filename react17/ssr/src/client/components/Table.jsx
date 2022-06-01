import React from "react";

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
          <td>{row.name}</td>
          <td>{row.name}</td>
          <td>{row.name}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
