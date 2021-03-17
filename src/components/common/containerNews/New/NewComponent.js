import React from 'react';
import NewsComponent from '../News/NewsComponent';
import './New.css'

const NewComponent = () => {

  let news = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      img: [
        {
          src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
          src: 'https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
          src: 'https://images.pexels.com/photos/5088180/pexels-photo-5088180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
          src: 'https://images.pexels.com/photos/7137416/pexels-photo-7137416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    }, {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula vitae diam vehicula imperdiet ut vel ligula. Cras viverra ex in erat facilisis, id blandit dui volutpat. Vestibulum ut ligula sem. Aliquam vel felis sollicitudin, aliquam orci in, mattis arcu. Curabitur ultrices mi eu ultricies ullamcorper. ',
      img: [
        {
          src: 'https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
          src: 'https://images.pexels.com/photos/5088180/pexels-photo-5088180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    }, {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula vitae diam vehicula imperdiet ut vel ligula. Cras viverra ex in erat facilisis, id blandit dui volutpat. ',
      img: [
        {
          src: 'https://images.pexels.com/photos/7137416/pexels-photo-7137416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    }
  ]

  return (
    <div className="scroll-container">
      <div className="scroll-page">
        {
          news.map((news, index) => {
            return (
              <div className="mb-2">
                <NewsComponent key={index} {...news} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewComponent;