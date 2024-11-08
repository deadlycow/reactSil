import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './breadcrumb.css';

function Breadcrumb() {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((i) => i);

  return (
    <ul>
      <li><Link to='/reactSil/'>Homepage</Link></li>
      {
        pathnames.map((item, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          if (item === 'reactSil') return null
          return (
            <li key={to}>
              { 
                index === pathnames.length - 1 ? (<span>{item.replace(/-/g, ' ')}</span>) :
                  (<Link to={to}>{item.replace(/-/g, ' ')}</Link>)
              }
            </li>
          )
        })
      }
    </ul>
  );
};

export default Breadcrumb;
