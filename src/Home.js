import React from 'react';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';
import HomeContent from './components/molecules/homeContent/homeContent';
 

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