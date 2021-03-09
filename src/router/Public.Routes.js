import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../View/HomeView';
import AboutUsView from '../View/AboutUsView';
import PublicRoute from './HelperRoutes';
import Acceessibility from '../View/AccesibilityView';
import GalleryView from '../View/GalleryView';

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/Home" component={HomeView} />
      <PublicRoute exact path="/AboutUs" component={AboutUsView} />
      <PublicRoute exact path="/AboutUs/Mission" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Vision" component={Acceessibility} />
      <PublicRoute exact path="/Gallery" component={GalleryView} />
      <Redirect path="/" to="/Home" />
    </Switch>
  )
}

export default PublicRoutes;