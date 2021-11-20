import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div>
    <h1>404 - Pagina no encontrada</h1>
    <Link to="/">Ir al Home</Link>
  </div>
)

export default Error404;