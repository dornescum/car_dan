import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import Details from "../Details";

test('check for color font', ()=>{
	render(<Details />);
	const Link = screen.getByTestId('li-test');
	expect(Link).toHaveStyle({color:'var(--primary)'})
});
test('check ul color', ()=>{
	render(<Details />);
	// const UL = screen.getByRole('ul');
	const UL = screen.getByTestId('ul-test');
	expect(UL).toHaveStyle({color:'var(--primary)'})

})

afterEach(cleanup);
