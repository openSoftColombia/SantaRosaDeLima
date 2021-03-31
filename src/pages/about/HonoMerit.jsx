import React, { useEffect, useState } from 'react'
import TableHonor from '../../components/common/table/TableHonor'

import HonorJson from './../../config/honor.json'

const HonorMerit = () => {
  const [honor, setHonor] = useState([])

  useEffect(() => {
    setHonor(HonorJson)
  })

  return (
    <React.Fragment>
      <div className='container ContentTitleAccessibility'>
        <h1 className='fs-2 fw-normal'>Honor y Merito</h1>
      </div>
      <div className='container'>
        {honor.length > 0 ? <TableHonor rows={honor} /> : <p>Cargando</p>}
      </div>
    </React.Fragment>
  )
}

export default HonorMerit