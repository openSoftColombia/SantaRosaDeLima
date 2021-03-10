import React from 'react';
import TableComponent from '../components/common/table/tableCompopnent';
import './Circular.css'

const CircularView = () => {
  return (
    <React.Fragment>
      <div className="pt-4 container ContentTitleCircular">
        <span className="SpanCircular"><i class="fal fa-book-spells fa-2x"></i></span><h1 className="fw-4 TitleCircular">Circulares</h1>
      </div>
      <div className="container">
        <TableComponent />
      </div>
    </React.Fragment>
  );
}

export default CircularView;