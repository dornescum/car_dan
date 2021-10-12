import {cleanup, fireEvent, getAllByRole, getByRole, render, screen} from '@testing-library/react';
import NewInfo from '../NewInfo';

test('check if input is checked', ()=>{
	render(<NewInfo />);
	const inputCheckbox =screen.getByTestId('check-btn');
	expect(inputCheckbox).toBeEnabled();
})
afterEach(cleanup)