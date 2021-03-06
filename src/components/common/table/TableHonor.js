import React, { useState } from 'react';
import { getNumberRoman } from './../../../helpers/getNumberRoman'

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

const TableHonor = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onChangeSearch = async (e) => {
    e.persist();
    setSearch(e.target.value);
    filterElement();
  }

  const filterElement = () => {
    let filter = rows.filter(item => {
      if (item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search)) {
        console.log(item);
        return item;
      }
    })
    setTitle(filter);
  }

  return (
    <React.Fragment>
      <div className="paginationTableTable">
        <TextField id="search" label="Buscar..." className="mb-4" value={search} onChange={onChangeSearch}
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
                      {getNumberRoman(row.id)}
                    </TableCell>
                    <TableCell>
                      {row.year}
                    </TableCell>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {row.promotion}
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

export default TableHonor

const columns = [
  { id: "id", label: "N??" },
  { id: "date", label: "A??o" },
  { id: "name", label: "Estudiante" },
  { id: "promotion", label: "Promocion" },
];

const style = {
  fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif'
}