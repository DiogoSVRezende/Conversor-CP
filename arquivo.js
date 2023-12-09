const convertButton = document.querySelector(".button-convert")
const convertSelect = document.querySelector(".currency-select")
const convertSelectA = document.querySelector(".currency-select-a")




function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-convert")// real
    const currencyValueConvertd = document.querySelector(".currency-value")//dmais moedas



    console.log(convertSelectA.value)
    console.log(convertSelect.value)

    
    const dolar = 5
    const Euro = 6.8
    const Libra = 7.2
    const Bitcoin = 200000.000

    const libraPdolar = 1.2
    const EuroPdolar = 1.1
    const BitcoinPdolar = 40000.0000
    const RealPdolar = 5
    // valor moeda base dolar

    const libraPEuro = 1.09
    const DolarPEuro = 0.90
    const BitcoinPEuro = 36000.363
    const RealPEuro = 6.8
    //valor base Euro

    const EuroPLibra = 0.91
    const DolarPLibra = 0.83
    const BitcoinPLibra = 33000.333
    const RealPLibra = 7.2
    // valor base libra

    const EuroPBit = 36000.000
    const DolarPBit = 33000.000
    const LibraPbit =  40000.000
    const RealPBit = 200000.000
    // valor base bitcoin


    // Real brasieleiro//

    if (convertSelect.value == "Real" & convertSelectA.value == "Real") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (convertSelect.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }
    
    if (convertSelect.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / Euro)
    }
    if (convertSelect.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / Bitcoin)
    }
    if (convertSelect.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / Libra)
    }


                        // dolar



    if (convertSelect.value == "dolar" & convertSelectA.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "Euro" & convertSelectA.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroPdolar)
    }
    if (convertSelect.value == "Libra" & convertSelectA.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraPdolar)
    }

    if (convertSelect.value == "Bitcoin" & convertSelectA.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinPdolar)
    }
    if (convertSelect.value == "Real" & convertSelectA.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * RealPdolar)
    }


                    //libra


    if (convertSelect.value == "Libra" & convertSelectA.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "dolar" & convertSelectA.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarPLibra)
    }
    if (convertSelect.value == "Euro" & convertSelectA.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroPLibra)
    }
    if (convertSelect.value == "Bitcoin" & convertSelectA.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinPLibra)
    }
    if (convertSelect.value == "Real" & convertSelectA.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * Libra)
    }


                        //Euro


    if (convertSelect.value == "Euro" & convertSelectA.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "dolar" & convertSelectA.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarPEuro)
    }
    if (convertSelect.value == "Libra" & convertSelectA.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraPEuro)
    }

    if (convertSelect.value == "Bitcoin" & convertSelectA.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinPEuro)
    }

    if (convertSelect.value == "Real" & convertSelectA.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * RealPEuro)
    }

                       //Bitcoin


    if (convertSelect.value == "Bitcoin" & convertSelectA.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (convertSelect.value == "Real" & convertSelectA.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * RealPBit)
    }
    if (convertSelect.value == "dolar" & convertSelectA.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * DolarPBit)
    }
    if (convertSelect.value == "Euro" & convertSelectA.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * EuroPBit)
    }
    if (convertSelect.value == "Libra" & convertSelectA.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * LibraPbit)
    }

                      // SELEÇAO

   if (convertSelectA.value == "Real"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
   }
   if (convertSelectA.value == "dolar"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
   }
   if (convertSelectA.value == "Euro"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
   }
    
   if (convertSelectA.value == "Bitcoin"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)
   }

   if (convertSelectA.value == "Libra"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
   }


}

function changecurency() {

    const currencyName = document.getElementById("valor-dolar")
    const tela = document.querySelector(".tela")

    if (convertSelect.value == "Real") {
        currencyName.innerHTML = " Real "
        tela.src = "assets/Real.png "
    }


    if (convertSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        tela.src = "assets/Dolar.png"
    }

    if (convertSelect.value == "Libra") {
        currencyName.innerHTML = " Libra"
        tela.src = "assets/Libra.png "
    }

    if (convertSelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        tela.src = "assets/Euro.png "
    }
    if (convertSelect.value == "Bitcoin") {
        currencyName.innerHTML = "BTC"
        tela.src = "assets/Bitcoin.png "
    }




    convertValues()

}


function trocaimagen() {

    const telaTela = document.querySelector(".tela-tela")
    const valorReal = document.getElementById("valor-real")



    if (convertSelectA.value == "Real") {
        valorReal.innerHTML = "Real"
        telaTela.src = "assets/Real.png"
    }

    if (convertSelectA.value == "dolar") {
        valorReal.innerHTML = "Dólar "
        telaTela.src = "assets/Dolar.png"
    }

    if (convertSelectA.value == "Libra") {
        valorReal.innerHTML = "Libra "
        telaTela.src = "assets/Libra.png"
    }

    if (convertSelectA.value == "Euro") {
        valorReal.innerHTML = "Euro"
        telaTela.src = "assets/Euro.png"
    }

    if (convertSelectA.value == "Bitcoin") {
        valorReal.innerHTML = "BTC"
        telaTela.src = "assets/Bitcoin.png"
    }



    convertValues()
}


convertSelectA.addEventListener("change", trocaimagen)
convertSelect.addEventListener("change", changecurency)
convertButton.addEventListener("click", convertValues)
