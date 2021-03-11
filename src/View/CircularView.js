import React from 'react';
import TableComponent from '../components/common/table/tableCompopnent';
import './Circular.css'

const CircularView = () => {
  return (
    <React.Fragment>
      <div className="container ContentTitleCircular">
        <span className="SpanCircular"><i class="fal fa-book-spells fa-2x"></i></span><h1 className="fw-4 TitleCircular">Gallery</h1>
      </div>
      <div className="container" style={{ alignItems: 'center', textAlign: 'center' }}>
        <TableComponent />
      </div>
    </React.Fragment>
  );
}

export default CircularView;