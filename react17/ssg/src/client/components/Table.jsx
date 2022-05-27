import React from "react";

const Table = ({ tableRows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Kolumna 1</th>
          <th>Kolumna 2</th>
          <th>Kolumna 3</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row) => (
          <tr key={row.id}>
            <th>{row.name}</th>
            <th>{row.name}</th>
            <th>{row.name}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
