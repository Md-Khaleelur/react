import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from './Title';

describe("Title component",() =>{
    test("Matches the snapshot",() => {
        const title = create(<Title/>);
        expect(title.toJSON()).toMatchSnapshot();

    })
    test("Title is rendered",() => {
        const { getByTestId, getByText } = render(<Title/>);
        expect(getByTestId("title")).toBeInTheDocument();
        
    });
   

});