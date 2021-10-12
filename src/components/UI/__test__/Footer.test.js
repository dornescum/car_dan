import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Footer from "../Footer";



test('show phone button', ()=>{
	const {getByTestId} = render(<Footer />);
	const phoneBtn = getByTestId('phone-btn');
	expect(phoneBtn).toBeInTheDocument()
})
test('phone btn value', ()=>{
	const {getByTestId} = render(<Footer />)
	const btnValue =getByTestId('phone-btn');
	expect(btnValue.textContent).toBe('')
})
test('phone btn value after click', ()=>{
	const {getByTestId} = render(<Footer />)
	const btnValue =getByTestId('phone-btn');
	expect(btnValue.value).toBe('')
	fireEvent.click(btnValue, {
		target: {
			value: '+40 726 722 875'
		}
	})
	expect(btnValue.value).toBe('+40 726 722 875')
})

test('phone btn value after click by role', ()=>{
	const btnValue = screen.getByRole('button', {name: ''});
	expect(btnValue.value).toBe('');
	// event target value
	fireEvent.click(btnValue, {
		target: {
			value:'+40 726 722 875'
		}
	});
	expect(btnValue.value).toBe('+40 726 722 875');
})
// test('email btn value after click', ()=>{
// 	const {getByTestId} = render(<Footer />)
// 	const btnValue =getByTestId('button-email');
// 	expect(btnValue.value).toBe('')
// 	fireEvent.click(btnValue, {
// 		target: {
// 			value: 'cristea.daniel.petrut@gmail.com'
// 		}
// 	})
// 	expect(btnValue.value).toBe('cristea.daniel.petrut@gmail.com')
// })

test('renders 2 buttons', async () => {
	render(<Footer />)
	// const items = await screen.findAllByRole('button')
	// expect(items).toHaveLength(2)
})
afterEach(cleanup);


// test('renders learn react link', () => {
// 	render(<Footer />);
// 	const linkElement = screen.getByText(/dragoste/i);
// 	expect(linkElement).toBeInTheDocument();
// });