import React from 'react';
import ImageContent from './ImageContent';
import me2 from '../../../img/me2.png';

export default { 
    title: 'ImageContent',

};

export const withImg = () => <ImageContent sourceName={me2}/>
