import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeContent from './homeContent';

describe("HomeContent component",() =>{
    test("Matches the snapshot",() => {
        const homeContent = create(<HomeContent/>);
        expect(homeContent.toJSON()).toMatchSnapshot();

    })
    test("HomeContent is rendered",() => {
        const { getByTestId, getByText } = render(<HomeContent/>);
        expect(getByTestId("homeContent")).toBeInTheDocument();
        
    });
   

});