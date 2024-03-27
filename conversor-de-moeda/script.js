const button = document.querySelector(".converter");
const selectConverterPara = document.querySelector(".converter-para");
const selectConverterDe = document.getElementById("converter-de");
function botaoConverter() {
  const valorDoInput = document.querySelector(".pegar-valor-input").value;
  const pValorDoInput = document.querySelector(".valor-que-veio-doinput");
  const pValorConvertido = document.querySelector(".valor-convertido");
  //Objeto com os valores de quanto esta a moeda hoje.
  const moedasRealpara = {
    dolar: 4.98,
    euro: 5.39,
    bitcoin: 344.117,
    libra: 6.28,
  };
  const moedasDolarpara = {
    dolarparareal: 4.98,
    dolarparaeuro: 0.92,
    dolarparalibbra: 0.79,
    dolarparabitcoin: 0.15,
  };
  const moedaseuropara = {
    europaradolar: 1.08,
    europarareal: 5.39,
    europarabitcoin: 0.16,
    europaralibra: 0.86,
  };

  // Bloco conversão REAL BRASILEIRO para as outras moedas:
  if (
    selectConverterDe.value == "real-de" &&
    selectConverterPara.value == "dolar"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput / moedasRealpara.dolar);
  }
  if (
    selectConverterDe.value == "real-de" &&
    selectConverterPara.value == "euro"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput / moedasRealpara.euro);
  }
  if (
    selectConverterDe.value == "real-de" &&
    selectConverterPara.value == "bitcoin"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(valorDoInput / moedasRealpara.bitcoin);
  }
  if (
    selectConverterDe.value == "real-de" &&
    selectConverterPara.value == "libra"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorDoInput / moedasRealpara.libra);
  }

  // bloco converçao do DOLAR para as outras moedas
  if (
    selectConverterDe.value == "dolar-de" &&
    selectConverterPara.value == "real"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput * moedasDolarpara.dolarparareal);
  }
  if (
    selectConverterDe.value == "dolar-de" &&
    selectConverterPara.value == "euro"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput / moedasDolarpara.dolarparaeuro);
  }
  if (
    selectConverterDe.value == "dolar-de" &&
    selectConverterPara.value == "bitcoin"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(valorDoInput / moedasDolarpara.dolarparabitcoin);
  }
  if (
    selectConverterDe.value == "dolar-de" &&
    selectConverterPara.value == "libra"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorDoInput / moedasDolarpara.dolarparalibbra);
  }

  // BLOCO DE CONVERSÃO DO EURO PARA OUTRAS MOEDAS :
  if (
    selectConverterDe.value == "euro-de" &&
    selectConverterPara.value == "dolar"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDoInput / moedaseuropara.europaradolar);
  }
  if (
    selectConverterDe.value == "euro-de" &&
    selectConverterPara.value == "real"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorDoInput * moedaseuropara.europarareal);
  }
  if (
    selectConverterDe.value == "euro-de" &&
    selectConverterPara.value == "bitcoin"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(valorDoInput / moedaseuropara.europarabitcoin);
  }
  if (
    selectConverterDe.value == "euro-de" &&
    selectConverterPara.value == "libra"
  ) {
    pValorDoInput.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoInput);
    pValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorDoInput * moedaseuropara.europaralibra);
  }
}
function trocaDemoeda() {
  const nomeDaMoeda = document.querySelector(".nome-da-moeda");
  const imgMoeda = document.querySelector(".img-outros-paises");

  if (selectConverterPara.value == "dolar") {
    imgMoeda.src = "assets/estados-unidos (1) 1.png";
    nomeDaMoeda.innerHTML = "Dólar Americano";
  }
  if (selectConverterPara.value == "euro") {
    imgMoeda.src = "assets/Design sem nome 3.png";
    nomeDaMoeda.innerHTML = "Euro";
  }
  if (selectConverterPara.value == "bitcoin") {
    imgMoeda.src = "assets/bitcoin 1.png";
    nomeDaMoeda.innerHTML = "Bitcoin";
  }
  if (selectConverterPara.value == "libra") {
    imgMoeda.src = "assets/libra 1.png";
    nomeDaMoeda.innerHTML = "Libra";
  }
  if (selectConverterPara.value == "real") {
    imgMoeda.src = "assets/brasil 2.png";
    nomeDaMoeda.innerHTML = "Real";
  }
  botaoConverter();
}
function trocaConverterDe() {
  const nomeDaMoedaConvert = document.querySelector(".nome-moeda-aconverte");
  const imgMoedaConvert = document.querySelector(".img-paises");
  if (selectConverterDe.value == "dolar-de") {
    imgMoedaConvert.src = "assets/estados-unidos (1) 1.png";
    nomeDaMoedaConvert.innerHTML = "Dólar Americano";
  }

  if (selectConverterDe.value == "euro-de") {
    imgMoedaConvert.src = "assets/Design sem nome 3.png";
    nomeDaMoedaConvert.innerHTML = "Euro";
  }

  if (selectConverterDe.value == "real-de") {
    imgMoedaConvert.src = "assets/brasil 2.png";
    nomeDaMoedaConvert.innerHTML = "Real Brasileiro";
  }

  if (selectConverterDe.value == "bitcoin-de") {
    imgMoedaConvert.src = "assets/bitcoin 1.png";
    nomeDaMoedaConvert.innerHTML = "Bitcoin";
  }
  if (selectConverterDe.value == "libra-de") {
    imgMoedaConvert.src = "assets/libra 1.png";
    nomeDaMoedaConvert.innerHTML = "Libra";
  }
  botaoConverter();
}

selectConverterPara.addEventListener("change", trocaDemoeda);
selectConverterDe.addEventListener("change", trocaConverterDe);
button.addEventListener("click", botaoConverter);
