import React from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';

import LogoColegioImg from './../assets/img/LogoColegio.svg';
import './Login.css';

const LogInView = () => {
  return (
    <div className="contentLogin">
      <div className="contentLoginUser">
        <img src={LogoColegioImg} alt="LOGO" className="imgLogin" />
        <form>
          <h6 className="fw-3 mt-2">Usuario</h6>
          <input type="text" className="w-10 inputLogin"></input>
          <h6 className="fw-3 mt-2">Contraseña</h6>
          <input type="password" className="w-10 inputLogin mb-4"></input>
          <div style={{ height: '40px' }}>
            <ButtonComponet name={'Ingresar'} color={'#023e8a'} borderRadius={'2px'} margin={'0px 0px'}
              width={'100%'} size={'4'} colorText={'#fff'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInView;