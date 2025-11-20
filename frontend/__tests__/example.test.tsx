import Home from "../app/page"
import {render, screen} from "@testing-library/react";
const { expect } = require('@jest/globals');


describe("example jest test", () => {
    it('example test', () => {
        render(<Home />);
        expect(screen.getByText('aplikacja dla weterynarii')).toBeInTheDocument();
    })

})