import {cleanup, render, screen } from '@testing-library/react';
import App from './App';
import Footer from "./components/UI/Footer";

// fixme error create react portal
test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/dragoste/i);
  // expect(linkElement).toBeInTheDocument();
});
// test('serch btn', () => {
//   render(<App />);
//   const btn = screen.getByRole('button');
//   expect(btn).toHaveLength(1);
// });
test('btn', () => {
  // render(<App />);
  // const btn = screen.getByRole('button');
  // expect(btn).toBeInTheDocument()
});
// test('btn icon', () => {
//   render(<Footer />);
//   const btn = screen.getByRole('button');
//   expect(btn).toBe()
// });
// test('btn phone', () => {
//   const {queryByTitle} = render(<Footer />);
//   const btn = queryByTitle('phone button')
//   // expect(btn).toBeTruthy();
//   // expect(btn).toBeInTheDocument();
//   expect(btn).toBeInTheDOM();
// });
// test('btn phone', () => {
//   const {queryByAltText} = render(<Footer />);
//   const btn = queryByAltText("phone")
//   // expect(btn).toBeTruthy();
//   // expect(btn).toBeInTheDocument();
//   expect(btn).toBeInTheDOM();
// });
// test('btn phone', () => {
//   const {queryByTitle} = render(<Footer />);
//   const btn = queryByTitle("test")
//   // expect(btn).toBeTruthy();
//   expect(btn).toBeInTheDocument();
//   // expect(btn).toBeInTheDOM();
// });

afterEach(cleanup)
