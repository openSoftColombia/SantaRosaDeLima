import React from 'react'
import Card from 'react-bootstrap/Card';

const RosistaStaff = () => {

  const PersonCard = ({ src, name, email, position }) => (
    <Card style={{ width: '30rem', height: '32rem' }}>
      <Card.Img style={styleImg} alt='card' variant="top" src={src} />
      <Card.Body>
        <Card.Title> {position} </Card.Title>
        <Card.Text style={{ maxWidth: '300px', height: '90px', textOverflow: 'ellipsis', whiteSpace: 'inherit', overflow: 'hidden' }}> {`${name} ${email}`} </Card.Text>
      </Card.Body>
    </Card>
  )

  return (
    <React.Fragment>
      <div className='container ContentTitleAccessibility'>
        <h1 className='fs-2 fw-normal'>Personal Rosista</h1>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {prueba.map((x, index) => {
            return (
              <div key={index} className='col-sm-6 row justify-content-around'>
                <PersonCard {...x} />
              </div>
            )
          })}

          {prueba2.map((x, index) => {
            return (
              <div key={index} className='col row justify-content-around'>
                <PersonCard {...x} />
              </div>
            )
          })}

        </div>
      </div>

    </React.Fragment >
  )
}

export default RosistaStaff
const styleImg = {
  width: '100%',
  height: '100%'
}

const prueba = [
  {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  },
]

const prueba2 = [
  {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  }, {
    src: 'https://images.pexels.com/photos/3152225/pexels-photo-3152225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Leonardo Altamar',
    position: 'Rector',
    email: 'leo@gmail.com'
  },
]

