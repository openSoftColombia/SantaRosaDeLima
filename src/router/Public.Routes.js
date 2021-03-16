import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../View/HomeView';
import { PublicRoute } from './HelperRoutes';
import Acceessibility from '../View/AccesibilityView';
import GalleryView from '../View/GalleryView';
import CircularView from './../View/CircularView'
import LogInView from '../View/LogInView';

const PublicRoutes = () => {
  return (
    <Switch>

      <PublicRoute exact path="/Home" component={HomeView} />

      <PublicRoute exact path="/AboutUs/:Seccion" component={Acceessibility} />

      <PublicRoute exact path="/Communications/:tipe" component={CircularView} />

      <PublicRoute exact path="/Gallery" component={GalleryView} />
      <PublicRoute exact path="/Gallery/:title" component={GalleryView} />

      <PublicRoute exact path="/StudentWelfare/:title" component={GalleryView} />

      <PublicRoute exact path="/LogIn" component={LogInView} />

      <Redirect path="/" to="/Home" />

    </Switch>
  )
}

export default PublicRoutes;