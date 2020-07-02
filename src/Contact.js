import React from 'react';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';
import Content from './components/molecules/contactContent/contactContent';

 
const Contact = () => {
    return (
       <div>

        <PageTemplate
            header={ <Navigation/> }
            content={ <Content/> }
        />

       </div>
    );
}
 
export default Contact;