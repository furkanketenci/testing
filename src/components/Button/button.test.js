// Testleri Gruplamak
// describe ile testleri gruplayabiliriz. Buradaki amaç yazılan testlerin belirlenen scope içerisinde çalışmasını sağlamaktır. 

describe("Button Component", () => {

    // Eğer ortak bir test yazmak istersek her yere etki etmesini istersek burada yazılabilir.

    describe("When variant primary", () => {
        test("...", () => {})

        test("....", () => {})
    })

    describe("When variant secondary", () => {
        test("...", () => {})

        test("....", () => {})
    })
} )