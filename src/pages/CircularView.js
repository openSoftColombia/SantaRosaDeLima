import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TableComponent from '../components/common/table/tableCompopnent';
import LoadingComponent from './../components/common/loading/LoadingComponent'

import axios from 'axios'
import url from './../config/config'

import './Circular.css'

const CircularView = () => {

  const [document, setDocument] = useState([])
  const [title, setTitle] = useState('')
  const { title: namePage } = useParams();
  console.log(namePage);

  useEffect(() => {
    getDocumentType()
  }, [namePage])

  const getDocumentType = async () => {
    if (namePage == "Circular") {
      const { data } = await axios.get(`${url}/document/type/C`)
      setDocument(data)
      setTitle('Circulares')
    } else if (namePage == "Schedule") {
      const { data } = await axios.get(`${url}/document/type/S`)
      setDocument(data)
      setTitle('Cronograma')
    } else {
      const { data } = await axios.get(`${url}/document/type/H`)
      setDocument(data)
      setTitle('Horarios de clase')
    }
  }

  console.log(document);

  return (
    <React.Fragment>
      <div className="container ContentTitleCircular">
        <span className="SpanCircular"><i className="fal fa-book-spells fa-2x"></i></span><h1 className="fw-4 TitleCircular">{title}</h1>
      </div>
      <div className="container" style={{ alignItems: 'center', textAlign: 'center' }}>
        {document.length > 0 ? <TableComponent rows={document} /> : <LoadingComponent />}
      </div>
    </React.Fragment>
  );
}

export default CircularView;

