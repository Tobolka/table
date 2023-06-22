import React from "react";
import { AgGridReact } from "ag-grid-react";

import "./theme.scss";

const generateColumnDefs = () => [
  {
    headerName: "Country",
    field: "country",
    enableRowGroup: false,
 
    width: 200,
    rowDrag: false,
  },
  ..."ABCE"
    .split("")
    .map((letter) => ({ field: letter })),
];



const generateRowData = (columnDefs) => {
  const rowData = [];
  const countries = [
    "United Kingdom",
    "Ireland",
    "United States",
    "India",
    "Brazil",
    "China",
    "Russia",
  ];

  for (var i = 0; i < 100; i++) {
    var item = {};

    item.country = countries[i % countries.length];

    for (var j = 1; j < columnDefs.length; j++) {
      var colDef = columnDefs[j];
      item[colDef.field] = Math.floor(Math.random() * 100000);
    }

    rowData.push(item);
  }

  return rowData;
};
const columnDefs = generateColumnDefs();
const rowData = generateRowData(columnDefs);
const gridOptions = {
  suppressMenuHide: true,
sortable:true,
  animateRows: false,
  enableRangeSelection: false,
  rowDragManaged: true,
  headerHeight: 56,
  rowHeight: 56,
  rowGroupPanelShow: "always",
  pivotPanelShow: "always",
  pivotColumnGroupTotals: "before",
  pivotRowTotals: "before",
  columnDefs,
  rowData,
  enableFillHandle: true,
};
const App = () => {
  return (
    <div className="ag-theme-custom" style={{ height: "100%", width: "100%" }}>
      <AgGridReact {...gridOptions}></AgGridReact>
    </div>
  );
};

export { App };
