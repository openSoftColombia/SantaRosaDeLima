import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/* 
  Autenticacion
  Se espera un componente y opciones
*/
export const PrivateRoute = ({ component, ...options }) => {
  const isAuth = true;
  if (!isAuth) return <Route {...options} component={component} />
  return <Redirect to="/login" />
}

/* 
  Se espera un componente y opciones
*/
export const PublicRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={component} />
  return <Redirect to="/" />
}

export default PublicRoute;