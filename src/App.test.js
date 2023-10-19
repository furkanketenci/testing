import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />); // Arrange aşaması denilebilir.
//   const linkElement = screen.getByText(/learn react/i); // Act aşaması denilebilir. (Bir butona tıklamak örnek verilebilir.)
//   expect(linkElement).toBeInTheDocument(); // assertion aşaması denilebilir.
// });

test(
  "test'in ilk parametresidir ve string bir değer alır. Bu kısımda test gerçekleştiğinde neyi amaçlıyorsak onu yazarız. (Testin açıklaması)",
  () => {"testin ikinci parametresi ise bir function. Bu function içerisinde test'in çalışmasını sağlayan bir function yazarız."},
)


it("component başarılı bir sekilde render edilmeli", () =>{
  render(<App />) // App componentini render et.
  expect(screen.getByText("Testing")).toBeInTheDocument(); 
  // getByText ile div içerisindeki yazıyı alıyorum.
  // ekranda div içerisinde "Testing" yazmasını bekliyorum. Eğer yazıyorsa sorun yok yazmıyorsa test "fail" oluyor.
}) 