import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { TABLE_COLUMN_DATA } from "./TableColumn";

import { TABLE_ROW_DATA } from "../constants";

const Table = () => (
  <NeetoUITable
    allowRowClick
    columnData={TABLE_COLUMN_DATA}
    rowData={TABLE_ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
