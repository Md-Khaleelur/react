import React from 'react';
import Title from '../../atoms/Title/Title';

import Para from '../../atoms/Para/Para'

export default function contactContent() {
    return (
        <div       
        data-testid="contactContent"
        >

          <Title title="Contact US"/>
          <Para paragraph="Contact US page body content"/>
            
        </div>
    )
}
