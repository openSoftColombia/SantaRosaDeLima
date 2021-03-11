import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import HomeView from '../View/HomeView';
import AboutUsView from '../View/AboutUsView';
import PublicRoute from './HelperRoutes';
import Acceessibility from '../View/AccesibilityView';
import GalleryView from '../View/GalleryView';
import CircularView from './../View/CircularView'

const PublicRoutes = () => {
  return (
    <Switch>

      <PublicRoute exact path="/Home" component={HomeView} />

      <PublicRoute exact path="/AboutUs/Mission" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Vision" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/OurValues" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/InsPhilosophy" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Axioma&Coloraria" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Symbols" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/AboutUs" component={Acceessibility} />

      <PublicRoute exact path="/AboutUs/RosistaStaff" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/RosistaPromotions" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Honor&Merit" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/RosistaFamily" component={Acceessibility} />

      <PublicRoute exact path="/AboutUs/SantaRosaDeLima" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/Honor&Merit" component={Acceessibility} />
      <PublicRoute exact path="/AboutUs/GratitudeParty" component={Acceessibility} />

      <PublicRoute exact path="/Communications/Circular" component={CircularView} />
      <PublicRoute exact path="/Communications/Schedule" component={CircularView} />
      <PublicRoute exact path="/Communications/ClassSchedule" component={CircularView} />

      <PublicRoute exact path="/Gallery" component={GalleryView} />

      <Redirect path="/" to="/Home" />

    </Switch>
  )
}

export default PublicRoutes;