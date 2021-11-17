import {cleanup, fireEvent, getAllByRole, getByRole, render, screen} from '@testing-library/react';
import Description from "../Description";

test('check if text Opel Astra G Hatchback din 2009 exits', ()=>{
	render(<Description />);
	const checkTest = screen.getByText('Opel Astra G Hatchback din 2009');
	expect(checkTest.textContent).toBe('Opel Astra G Hatchback din 2009');

})
test('check for bold text', ()=>{
	render(<Description />);
	const checkFont = screen.getByTestId('bold-font');
	// expect(checkFont).toHaveStyle({backgroundColor: "red"});
	expect(checkFont).toHaveStyle({fontWeight: "bold"});
})
afterEach(cleanup);
