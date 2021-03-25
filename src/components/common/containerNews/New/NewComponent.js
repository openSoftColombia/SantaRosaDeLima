import React from 'react';
import NewsComponent from '../News/NewsComponent';
import './New.css'

import useFetch from './../../../../hooks/useFetch'
import url from './../../../../config/config'

const NewComponent = () => {
  const { data: dataNotices } = useFetch(`${url}/notice`);
  return (
    <div className="scroll-container">
      <div className="scroll-page">
        {
          dataNotices.map((notice, index) => {
            return (
              <div className="mb-2" key={index}>
                <NewsComponent {...notice} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewComponent;