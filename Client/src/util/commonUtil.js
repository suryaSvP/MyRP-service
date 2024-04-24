export const getField = (tableDef, row) => {
  let value = "";
  if (tableDef.field instanceof Array) {
    tableDef.field.forEach((item) => {
      value += row[item] + " ";
    });
  } else {
    value = row[tableDef.field];
  }
  return value instanceof String ? value.trim() : value;
};
