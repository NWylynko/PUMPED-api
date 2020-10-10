import { escape } from 'sqlstring';

const objectToSQLupdate = (fields: any) => {
  let sql = '';

  Object.keys(fields).forEach((partName, index, array) => {
    // if the current item is the length of the array then its the last item
    // the last item cant have a comma
    const comma = index === array.length - 1 ? '' : ',';

    sql += `${escape(partName)} = ${escape(fields[partName])}${comma} `;
  });

  return sql;
};

export default objectToSQLupdate;
