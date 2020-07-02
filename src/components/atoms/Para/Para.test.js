import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Para from './Para';

describe("Para component",() =>{
    test("Matches the snapshot",() => {
        const para = create(<Para />);
        expect(para.toJSON()).toMatchSnapshot();

    })
    test("Para is rendered",() => {
        const { getByTestId, getByText } = render(<Para/>);
        expect(getByTestId("para")).toBeInTheDocument();
        
    });
   

});