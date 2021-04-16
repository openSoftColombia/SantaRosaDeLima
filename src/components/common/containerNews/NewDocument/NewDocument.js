import React from 'react'
import { getNameDocument } from './../../../../helpers/getNameDocument'
import DocumentImg from './../../../../assets/img/translation.svg'

const NewDocument = ({ res }) => {
  return (
    res.map(x => {
      let name = getNameDocument(x.src)
      return (
        <div key={x.id} className='conatinerDoc mt-3'>
          <img src={DocumentImg} alt="documento" className="imgDoc" />
          <a href={x.src} rel="noopener noreferrer" target="_blank">{name}</a>
        </div>
      )
    })
  )
}

export default NewDocument