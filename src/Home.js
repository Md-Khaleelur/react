import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';
import HomeContent from './components/molecules/homeContent';
 

const home = () => {

    return (
    <div>
        <PageTemplate
            header={ <Navigation/> }
            content={ <HomeContent/> }
        />
    </div>
    );
}

 
export default home;