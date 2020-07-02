import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactContent from './contactContent';

describe("ContactContent component",() =>{
    test("Matches the snapshot",() => {
        const contactContent = create(<ContactContent/>);
        expect(contactContent.toJSON()).toMatchSnapshot();

    })
    test("ContactContent is rendered",() => {
        const { getByTestId, getByText } = render(<ContactContent/>);
        expect(getByTestId("contactContent")).toBeInTheDocument();
        
    });
   

});