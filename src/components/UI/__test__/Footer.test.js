import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Footer from "../Footer";


// test('renders learn react link', () => {
// 	render(<Footer />);
// 	const linkElement = screen.getByText(/dragoste/i);
// 	expect(linkElement).toBeInTheDocument();
// });
test('show phone button', ()=>{
	const {getByTestId} = render(<Footer />);
	const phoneBtn = getByTestId('button-telefon');
	expect(phoneBtn).toBeInTheDocument()
})
test('phone btn value', ()=>{
	const {getByTestId} = render(<Footer />)
	const btnValue =getByTestId('button-telefon');
	expect(btnValue.textContent).toBe('')
})
test('phone btn value after click', ()=>{
	const {getByTestId} = render(<Footer />)
	const btnValue =getByTestId('button-telefon');
	fireEvent.click(btnValue, {
		target: {
			value: '+40 726 722 875'
		}
	})
	expect(btnValue.value).toBe('+40 726 722 875')
})

test('renders 2 buttons', async () => {
	render(<Footer />)
	const items = await screen.findAllByRole('button')
	expect(items).toHaveLength(2)
})
afterEach(cleanup)