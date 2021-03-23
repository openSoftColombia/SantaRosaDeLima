import React from 'react';
import NewsComponent from '../News/NewsComponent';
import './New.css'

const NewComponent = ({ notice }) => {
  return (
    <div className="scroll-container">
      <div className="scroll-page">
        {
          notice.map((notice, index) => {
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