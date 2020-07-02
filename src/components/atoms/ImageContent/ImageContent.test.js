import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageContent from './ImageContent';

describe("ImageContent component",() =>{
    test("Matches the snapshot",() => {
        const imageContent = create(<ImageContent/>);
        expect(imageContent.toJSON()).toMatchSnapshot();

    })
    test("ImageContent is rendered",() => {
        const { getByTestId, getByText } = render(<ImageContent/>);
        expect(getByTestId("imageContent")).toBeInTheDocument();
        
    });
   

});