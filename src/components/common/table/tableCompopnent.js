import React, { useState } from 'react';

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

const columns = [
  { id: "Title", label: "Titulo", minWidth: 200 },
  { id: "Date", label: "Fecha de publicacion", minWidth: 300 },
  { id: "Action", label: "Acctiones", minWidth: 140 }
];

const rows = [
  {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021'
  }, {
    Title: 'jose maria',
    Date: '05 Marzo 2021'
  }, {
    Title: 'jose maria',
    Date: '05 Marzo 2021'
  }, {
    Title: 'jose maria',
    Date: '05 Marzo 2021'
  }, {
    Title: 'jose maria',
    Date: '05 Marzo 2021'
  }, {
    Title: 'jose maria',
    Date: '05 Marzo 2021'
  },
];

const TableComponent = () => {
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
    console.log(search);
    filterElement();
  }

  const filterElement = () => {
    let filter = rows.filter(item => {
      if (item.Title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search)) {
        return item;
      }
    })
    console.log(filter);
    setTitle(filter);
  }

  return (
    <React.Fragment>
      <div className="paginationTableTable">
        <TextField id="search" label="Buscar..." className="mb-4" value={search} onChange={onChangeSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <i class="fal fa-search"></i>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>
                      {row.Title}
                    </TableCell>
                    <TableCell>
                      {row.Date}
                    </TableCell>
                    <TableCell>
                      <i class="fas fa-download" style={{ color: 'Tomato' }}></i>
                      <i class="far fa-eye" style={{ color: 'dodgerblue', marginLeft: '10px' }}></i>
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
