import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import './table.css';

const TableComponent = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [title, setTitle] = useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const filterElement = (value) => {
    let filter = rows.filter(item => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return item
      }
    })
    setTitle(filter);
  }

  return (
    <React.Fragment>
      <div className="paginationTableTable">
        <TextField id="search" label="Buscar..." className="mb-4" onChange={(e) => filterElement(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <i className="fal fa-search"></i>
              </InputAdornment>
            )
          }} />

        <TablePagination labelRowsPerPage="Fila por pagina" rowsPerPageOptions={[5, 10, 25, 100, { label: "All", value: -1 }]} component="div" count={title.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} className="mt-2" />
      </div>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table" style={{ backgroundColor: 'transparent' }}>

            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {title.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>
                      <Link to={`/Communications/document/${row.id}`}>{row.title}</Link>
                    </TableCell>
                    <TableCell>
                      {new Date(row.createdAt).toLocaleDateString("en-US")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

          </Table>
        </TableContainer>


      </Paper>
    </React.Fragment>
  );
}

export default TableComponent;

const columns = [
  { id: "Title", label: "Titulo", minWidth: 150 },
  { id: "Date", label: "Fecha de publicacion", minWidth: 90 }
];

