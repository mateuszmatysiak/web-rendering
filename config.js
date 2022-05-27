export const ELEMENTS = 24000;

export const data = {
  listItems: new Array(ELEMENTS / 3).fill(null).map((_, index) => ({
    id: `LIST_ITEM_ID-${index + 1}`,
    name: `Element listy ${index + 1}`,
  })),
  tableRows: new Array(ELEMENTS / 3).fill(null).map((_, index) => ({
    id: `TABLE_ROW_ID-${index + 1}`,
    name: `Wiersz ${index + 1}`,
  })),
  counters: new Array(ELEMENTS / 3).fill(null).map((_, index) => ({
    id: `COUNTER_ID-${index + 1}`,
    name: `Licznik ${index + 1}`,
  })),
};
