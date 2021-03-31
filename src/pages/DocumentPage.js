import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AccessibilityView.css'
import LoadingComponent from './../components/common/loading/LoadingComponent'

import axios from 'axios'
import url from './../config/config'

const DocumentPage = () => {
  const [document, setDocument] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getDocumentId()
  }, [])

  const getDocumentId = async () => {
    const { data } = await axios.get(`${url}/document/${id}`)
    setDocument(data)
  }

  return (
    <React.Fragment>
      {document ?
        <React.Fragment>
          <div className="container ContentTitleAccessibility">
            <span className="SpanAccessibility"><i className="far fa-edit fa-2x"></i></span><h1 className="fw-4 fs-2 TitleAccessibility">{document.title}</h1>
          </div>
          <div className="container pt-4">
            <p className="pt-4 fw-3 fs-5 pDescription">{document.description}</p>
            {
              document.resources?.map(x => {
                return (<h6 key={x.id}><a href={x.src} rel="noopener noreferrer" target="_blank">x.name</a></h6>)
              })
            }
          </div>
        </React.Fragment>
        : <LoadingComponent />
      }
    </React.Fragment>
  );
}

export default DocumentPage;