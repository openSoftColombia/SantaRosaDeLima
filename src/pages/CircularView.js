import React from 'react';
import { Link } from 'react-router-dom';
import TableComponent from '../components/common/table/tableCompopnent';

import useFetch from './../hooks/useFetch'
import url from './../config/config'

import './Circular.css'

const CircularView = () => {

  const { data: dataDocument, loading, error } = useFetch(`${url}/notice`);

  return (
    <React.Fragment>
      <div className="container ContentTitleCircular">
        <span className="SpanCircular"><i className="fal fa-book-spells fa-2x"></i></span><h1 className="fw-4 TitleCircular">Circulares</h1>
      </div>
      <div className="container" style={{ alignItems: 'center', textAlign: 'center' }}>
        <TableComponent rows={rows} />
      </div>
    </React.Fragment>
  );
}

export default CircularView;


const rows = [
  {
    Title: 'Circular Metodología Entrega Preventivo Primer Periodo 2021',
    Date: '05 Marzo 2021',
    resourses: [
      {
        src: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/circular-externa-005-de-2020.pdf'
      }, {
        src: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/circular-externa-005-de-2020.pdf'
      }, {
        src: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/circular-externa-005-de-2020.pdf'
      }
    ]
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