import React from 'react';
import { useParams } from 'react-router-dom';
import './AccessibilityView.css'

const DocumentPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <React.Fragment>
      <div className="container ContentTitleAccessibility">
        <span className="SpanAccessibility"><i className="far fa-edit fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">name Document</h1>
      </div>
      <div className="container pt-4">
        <p className="pt-4 fw-3 pz-2 pDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus turpis. Nullam mattis, mi ut aliquet sodales, ante libero suscipit mauris, sed egestas sem erat sit amet turpis. Praesent elementum erat et elit posuere scelerisque. Vivamus a placerat ligula. Praesent aliquet lectus diam, in varius lectus luctus nec. </p>
        <a href='hfgdghj' rel="noopener noreferrer" target="_blank">descargar aqui</a>
      </div>
    </React.Fragment>
  );
}

export default DocumentPage;