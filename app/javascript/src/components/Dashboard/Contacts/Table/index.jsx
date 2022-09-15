import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { tableColumnData } from "./TableColumn";

import { TABLE_ROW_DATA } from "../constants";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    allowRowClick
    columnData={tableColumnData(setShowDeleteAlert)}
    rowData={TABLE_ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
