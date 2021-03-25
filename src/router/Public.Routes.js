import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../pages/HomeView';
import { PublicRoute } from './HelperRoutes';
import Acceessibility from '../pages/AccesibilityView';
import GalleryView from '../pages/GalleryView';
import CircularView from './../pages/CircularView'
import DocumentPage from './../pages/DocumentPage'
import ContactView from './../pages/ContactView'

const PublicRoutes = () => {
  return (
    <Switch>

      <PublicRoute exact path="/Home" component={HomeView} />

      <PublicRoute exact path="/AboutUs/:Seccion" component={Acceessibility} />

      <PublicRoute exact path="/Communications/:title" component={CircularView} />

      <PublicRoute exact path="/Communications/document/:id" component={DocumentPage} />

      <PublicRoute exact path="/Gallery/:id" component={GalleryView} />

      <PublicRoute exact path="/Contact" component={ContactView} />

      <Redirect path="/" to="/Home" />

    </Switch>
  )
}

export default PublicRoutes;