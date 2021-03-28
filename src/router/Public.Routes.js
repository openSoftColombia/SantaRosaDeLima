import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../pages/HomeView';
import { PublicRoute } from './HelperRoutes';
import GalleryView from '../pages/GalleryView';
import CircularView from './../pages/CircularView'
import DocumentPage from './../pages/DocumentPage'
import ContactView from './../pages/ContactView'
import VisionMission from '../pages/about/VisionMission';
import InstitutionalPhilosophy from '../pages/about/InstitutionalPhilosophy';
import AxiomaColorario from '../pages/about/AxiomaColorario';

const PublicRoutes = () => {
  return (
    <Switch>

      <PublicRoute exact path="/Home" component={HomeView} />

      <PublicRoute exact path="/AboutUs/Vision&Mission" component={VisionMission} />
      <PublicRoute exact path="/AboutUs/InstitutionalPhilosophy" component={InstitutionalPhilosophy} />
      <PublicRoute exact path="/AboutUs/Axioma&Colorario" component={AxiomaColorario} />

      <PublicRoute exact path="/Communications/:title" component={CircularView} />

      <PublicRoute exact path="/Communications/document/:id" component={DocumentPage} />

      <PublicRoute exact path="/Gallery/:id" component={GalleryView} />

      <PublicRoute exact path="/Contact" component={ContactView} />

      <PublicRoute exact path="/Vision&Mission" component={VisionMission} />

      <Redirect path="/" to="/Home" />

    </Switch>
  )
}

export default PublicRoutes;