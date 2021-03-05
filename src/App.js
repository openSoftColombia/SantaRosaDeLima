import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

//component
import HeaderLayout from './components/layout/header/HeaderLayout';
import MainContent from './components/layout/mainContent/MainContent';
import FooterLayout from './components/layout/footer/FooterLayout';
import PublicRoutes from './router/Public.Routes';
// import PrivateRoutes from './router/Private.Routes';

function App() {
  return (
    <React.Fragment>
      <HeaderLayout />
      <MainContent>
        {
          <PublicRoutes />
        }
        {/* <PrivateRoutes propa={props} /> */}
      </MainContent>
      <FooterLayout />
    </React.Fragment>
  );
}

export default App;
