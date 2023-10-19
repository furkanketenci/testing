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


function GetByRoleExampleComponent() {
  return(
   <>
    <button>test1</button>
    <button>test2</button>
   </>
  )
}

function GetByLabelTextExampleComponent() {
  return(
    <>          
    <label for="user-name">Username:</label>
    <input id="user-name" />
    </>
  )
}

function ByPlaceholderTextExampleComponent() {
  return(
    <>          
    <input placeholder='examplePlaceholderText' />
    </>
  )
}

function ByTextExampleComponent() {
  return(
    <div> Modern Testing Tools </div>
  )
}

function ByDisplayValueExampleComponent() {
  return(
    <input value="ExampleValueText"></input>
  )
}

function ByAltTextExampleComponent() {
  return(
    <img alt="ExampleImageAltText" />
  )
}

function ByTitleExampleComponent() {
  return(
    <div title='titleExampleText'>ByTitleExampleText</div>
  )
}

function ByTestIdExampleComponent() {
  return(
    <div data-testid="exampleTestIdText">ByTestIdExample</div>
  )
}

// Queries
// getBy, getAllBy => DOM içerisinde var olduğundan eminsek eğer get kullanırız çünkü hata(error) vermesini isteriz.
// queryBy, queryAll => Eğer bir elementin DOM içerisinde olmadığını kontrol etmek istersek queryBy kullanırız. Herhangi bir hata mesajı vermez.
// findBy, findAllBy => findBy getBy gibi eğer bir hata varsa bize hata(error) mesajı verir. findBy kullanımının farklı async await yapıda çalışmasıdır. (Örn: Bir elementin butona tıklanıldığında DOM içerisinde render edilmesini istiyoruz. Basar basmaz render olmayacak yani beklememiz gereken bir işlem var. Tam olarak bu noktada findBy kullanırız.)


// 1- getByRole : Elementi HTML rolüne göre seçmemizi sağlar.
it("component başarılı bir sekilde render edilmeli ", () => {
  render(<GetByRoleExampleComponent />)
  expect(screen.getByRole('button', {
    name:"test2"
  })).toBeInTheDocument();
});

// 2-ByLabelText : Form elementleri içerisinde label kullandığımız zaman o label ile ilişkilendirilmiş olan form elementini bize verir.

it("label'a bakarak içerisindeki input'a erişmeliyim", () => {
  render(<GetByLabelTextExampleComponent/>)
  expect(screen.getByLabelText("Username:")).toBeInTheDocument()
})

// 3-ByPlaceholderText : Placeholder'in sahip olduğu input'u bize verir. Sadece inputlar için kullanabiliriz.

it("placeholder'a bakarak içerisindeki input'a erişmek", () => {
  render(<ByPlaceholderTextExampleComponent/>)
  expect(screen.getByPlaceholderText("examplePlaceholderText")).toBeInTheDocument()
})


// 4-getByText : İçerisinde herhangi bir "text" e sahip olan elementi buluyor.

it("elementin içerisindeki text'e bakarak elemente erişmek", () => {
  render(<ByTextExampleComponent />)
  expect(screen.getByText("Modern Testing Tools")).toBeInTheDocument()
})

// 5-getByDisplayValue : Input, TextArea, Select gibi elementlerin içerisini doldurduğumuzda içerisindeki value ile elementi seçmemizi sağlar.
it("element içerisindeki value değerinden elemente erişmeliyim" , () => {
  render(<ByDisplayValueExampleComponent/>)
  expect(screen.getByDisplayValue("ExampleValueText")).toBeInTheDocument()
})

// 6-getByAltText : image elementine verdiğimiz alt text'i ile image elementini seçmemizi sağlar.

it("image elementi içerisinde alt text'e bakarak image elementine erişmeliyim", () => {
  render(<ByAltTextExampleComponent/>)
  expect(screen.getByAltText("ExampleImageAltText")).toBeInTheDocument()
})

// 7-getByTitle : title elementine sahip olan html elementlerini seçmemizi sağlar.
it("elementin title text'ine bakarak elemente erişmek", () => {
  render(<ByTitleExampleComponent/>)
  expect(screen.getByTitle("titleExampleText")).toBeInTheDocument()
})

// 7-getByTestId : elemente semantic olarak erişemediğimiz nadir durumlarda kullanırız.

it("elementin data-testid'sine bakarak elemente erişmek", () => {
  render(<ByTestIdExampleComponent/>)
  expect(screen.getByTestId("exampleTestIdText")).toBeInTheDocument()
})