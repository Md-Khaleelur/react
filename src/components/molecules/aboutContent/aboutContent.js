import React from 'react';
import Title from '../../atoms/Title/Title';
import Para from '../../atoms/Para/Para'


export default function aboutContent() {
    return (
        <div      
        data-testid="aboutContent"
        >
            
          <Title title="About US"/>
          <Para paragraph="About US page body content"/>

        </div>
    )
}
