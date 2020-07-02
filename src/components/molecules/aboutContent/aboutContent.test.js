import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutContent from './aboutContent';

describe("AboutContent component",() =>{
    test("Matches the snapshot",() => {
        const aboutContent = create(<AboutContent/>);
        expect(aboutContent.toJSON()).toMatchSnapshot();

    })
    test("AboutContent is rendered",() => {
        const { getByTestId, getByText } = render(<AboutContent/>);
        expect(getByTestId("aboutContent")).toBeInTheDocument();
        
    });
   

});