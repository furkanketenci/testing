/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import { useEffect, useState } from 'react';

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

function MultipleElementQueryExampleComponent({products}) {
  
  return(
    <ul>
      {
        products.map((product, index) => (
          <li key={index}>{product}</li>
        ))
      }
    </ul>
  )
}

function TextMatchingExampleComponent({suffix}) {
  return(
    <div>
      TextMatchingExampleText : {suffix}
    </div>
  )
}

function QueryByEmptyCaseExampleComponent({suffix}){
  return(
    <div>
      {suffix && <p>{suffix}</p>}
      {!suffix && <p>Suffix yok</p>}
    </div>
  )
}

function FindByExampleComponent() {
  const [message, setMessage] = useState("Ahmet")

  useEffect(() => {
  setTimeout(() => {
    setMessage("Ali")
  }, [300])
  }, [])
  return(
    <div>
      <p>{message}</p>
    </div>
  )
}

function WaitForExampleComponent() {
  const [message, setMessage] = useState("Ahmet")

  useEffect(() => {
  setTimeout(() => {
    setMessage("Ali")
  }, [300])
  }, [])

  return(
    <div>
      <p>{message}</p>
    </div>
  )

}

function DomQuerySelectorExample() {
 return(
  <div className='dom-query'>
  Testing
</div>
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


// Multiple Element Query Kullanımı : product içerisine kaç tane element verirsem o kadar "li" elementinin render olduğunu görmek istiyorum.

it("multiple element kullanımı" , () => {
  const products = ["product-1","product-2","product-3"]
  render(<MultipleElementQueryExampleComponent products={products}/>)
  expect(screen.getAllByRole("listitem")).toHaveLength(products.length)
})

// Text Matching Yöntemleri : Text içerisinde ne yazdığını bilmiyorsak tam olarak text'i match edemiyorsak 2.parametre içerisinde "exact:false" kullanabiliriz. Bu sayede birebir aynı metin işe match etme işlemini kapatmış oluruz.
it("text matching yöntemleri", () => {
  render(<TextMatchingExampleComponent suffix={"testSuffix"}/>)
  expect(screen.getByText("Suffix", {
    exact:false
  })).toBeInTheDocument()
})



// queryBy ile ögenin olup olmadığını kontrol etmek için queryByText kullanırız ve bununla birlikte "not" kullanırız.
it("elementin var olup olmadığını kontrol etmeliyiz", () => {
  render(<QueryByEmptyCaseExampleComponent/>)
  expect(screen.queryByText("suffix yok")).not.toBeInTheDocument();
})


// findBy kullanımı : getBy ve queryBy kullanımından farklı asenkron çalışmasıdır. getBy ve queryBy DOM içerisinde ne görüyorsa onu dikkate alırken eğer bir değişiklik anını dikkate almak istiyorsak findBy kullanırız.

it("element içerisinde isim değişikliği dikkate alınmalı", async () => {
  render(<FindByExampleComponent/>)
  expect(await screen.findByText("Ali")).toBeInTheDocument()
})


// waitFor kullanımı : findBy ile aynı çalışma mantığı aynıdır. Herhangi bir noktada DOM update'i beklediğimizde ve o istediğimiz update "gerçekleşmediğinde" waitFor'u kullanmamız faydalı olabilir.
// waitFor kullanırken bir elementin içerisindeki text'in var olup olmadığını kontrol ederken "getBy" kullanabiliriz. Normalde queryBy kullanırdık. Fark burada.

it("element içerisinde isim değişikliğini gözlemleyecepiz", async () => {
 render(<WaitForExampleComponent/>);
 await waitFor(() => {
  expect(screen.getByText("Ali")).toBeInTheDocument();
 });
 await waitFor(() => {
  expect(screen.queryByText('Ahmet')).not.toBeInTheDocument();
 });
});


// waitForElementToBeRemoved : Herhangi bir elementi kaldırdığımızdan emin olmak için kullanırız. async - await yapıya sahiptir.

// Aşağıdaki örneğin açıklaması;
// 1-  State içerisinde ilk önce yazan isim Ahmet idi. 500ms sonrasında Ahmet ismi Ali ile değiştirildi. 
// 2- waitFor ile ekranda Ali ismi var mı yok mu diye kontrol ettik. Ekranda Ali olduğunu biliyoruz çünkü useEffect içerisinde bu işlemi yaptık.
// 3- waitForElementToBeRemoved ise ekranda Ahmet ismi var mı diye bakıyor fakat yok. Çünkü isim Ali olarak çoktan değişti. DOM üzerinde elementin var olup olmadığından emin olmak için waitForElementToBeRemoved kullanırız.
it("element kaldırıldı mı bunu kontrol edeceğiz" , async() => {
  render(<WaitForExampleComponent/>)
  // await waitFor(() => {
  //   expect(screen.getByText("Ali")).toBeInTheDocument();
  // })
  await waitForElementToBeRemoved(() => screen.queryByText("Ahmet"));
})


// DOM Query Selector : Halihazırda var olan query'lerin hiçbirisi ile elemente erişemiyorsak kullanırız. (Tavsiye edilmez mecbur kalmadıkça kullanılmaz.)

  it("classname seçip ulasacagız", () => {
    const {container} = render(<DomQuerySelectorExample/>);
  
    // eslint-disable-next-line testing-library/no-container
    const element = container.querySelector('.dom-query');

    expect(element).toBeInTheDocument();
    
  })



  // Debugging - DOM'u yazdırmak : Render ettiğimiz şey üzerinde başarılı bir test sağlayamıyorsak ve hata alıyorsak ne render ettiğimizi kontrol etmek isteyebiliriz.
  // console.log ne ise test yazarken screen.debug() odur.

  it("debugging yapıp render ettiğimiz html elementlerine erişmeyi hedefliyoruz", () => {
    render(<DomQuerySelectorExample/>)
    screen.debug();
    expect(screen.getByText("Testing")).toBeInTheDocument()
    screen.debug();
  })

  