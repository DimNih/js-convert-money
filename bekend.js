document.getElementById("converter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // get
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const resultContainer = document.getElementById("result");
    const errorContainer = document.getElementById("error");

    const apiKey = "cd3dde4ebc16ba067a9403a4"; //api key ExchangeRate
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    // Reset//
    resultContainer.classList.remove("visible");
    errorContainer.classList.remove("visible");

    // Validasi 

    if (isNaN(amount) || amount <= 0) {
        errorContainer.textContent = "Masukkan jumlah yang valid.";
        errorContainer.classList.add("visible");
        return;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.result !== "success") {
              throw new Error("Gagal mengambil nilai tukar. Coba lagi nanti.");
          }

          const rate = data.conversion_rates[toCurrency];

          if (!rate) {
              throw new Error(`Kurs untuk ${toCurrency} tidak tersedia.`);
          }

          const convertedAmount = (amount * rate).toFixed(2);
          // Format IDR
          const formattedAmount = new Intl.NumberFormat("id-ID").format(amount);
          const formattedConverted = new Intl.NumberFormat("id-ID").format(convertedAmount);

          document.getElementById("converted-amount").textContent = 
              `${formattedAmount} ${fromCurrency} = ${formattedConverted} ${toCurrency}`;
          
          resultContainer.classList.add("visible");
      })
      .catch(error => {
          errorContainer.textContent = error.message;
          errorContainer.classList.add("visible");
      });
});


// tukar nilai sellect
document.querySelector(".fa-exchange-alt").addEventListener("click", function () {
    let fromCurrency = document.getElementById("from-currency");
    let toCurrency = document.getElementById("to-currency");

    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];

});

// test 

/*document.getElementById("converter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // get
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const resultContainer = document.getElementById("result");
    const errorContainer = document.getElementById("error");

    const apiKey = "cd3dde4ebc16ba067a9403a4"; //api key ExchangeRate
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    // Reset//
    resultContainer.classList.remove("visible");
    errorContainer.classList.remove("visible");

    // Validasi 

    if (isNaN(amount) || amount <= 0) {
        errorContainer.textContent = "Masukkan jumlah yang valid.";
        errorContainer.classList.add("visible");
        return;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.result !== "success") {
              throw new Error("Gagal mengambil nilai tukar. Coba lagi nanti.");
          }

          const rate = data.conversion_rates[toCurrency];

          if (!rate) {
              throw new Error(`Kurs untuk ${toCurrency} tidak tersedia.`);
          }

          const convertedAmount = (amount * rate).toFixed(2);
          // Format IDR
          const formattedAmount = new Intl.NumberFormat("id-ID").format(amount);
          const formattedConverted = new Intl.NumberFormat("id-ID").format(convertedAmount);

          document.getElementById("converted-amount").textContent = 
              `${formattedAmount} ${fromCurrency} = ${formattedConverted} ${toCurrency}`;
          
          resultContainer.classList.add("visible");
      })
      .catch(error => {
          errorContainer.textContent = error.message;
          errorContainer.classList.add("visible");
      });
});


// tukar nilai sellect
document.querySelector(".fa-exchange-alt").addEventListener("click", function () {
    let fromCurrency = document.getElementById("from-currency");
    let toCurrency = document.getElementById("to-currency");

    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];

});

// test 

document.getElementById("converter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // get
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const resultContainer = document.getElementById("result");
    const errorContainer = document.getElementById("error");

    const apiKey = "cd3dde4ebc16ba067a9403a4"; //api key ExchangeRate
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    // Reset//
    resultContainer.classList.remove("visible");
    errorContainer.classList.remove("visible");

    // Validasi 

    if (isNaN(amount) || amount <= 0) {
        errorContainer.textContent = "Masukkan jumlah yang valid.";
        errorContainer.classList.add("visible");
        return;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.result !== "success") {
              throw new Error("Gagal mengambil nilai tukar. Coba lagi nanti.");
          }

          const rate = data.conversion_rates[toCurrency];

          if (!rate) {
              throw new Error(`Kurs untuk ${toCurrency} tidak tersedia.`);
          }

          const convertedAmount = (amount * rate).toFixed(2);
          // Format IDR
          const formattedAmount = new Intl.NumberFormat("id-ID").format(amount);
          const formattedConverted = new Intl.NumberFormat("id-ID").format(convertedAmount);

          document.getElementById("converted-amount").textContent = 
              `${formattedAmount} ${fromCurrency} = ${formattedConverted} ${toCurrency}`;
          
          resultContainer.classList.add("visible");
      })
      .catch(error => {
          errorContainer.textContent = error.message;
          errorContainer.classList.add("visible");
      });
});


// tukar nilai sellect
document.querySelector(".fa-exchange-alt").addEventListener("click", function () {
    let fromCurrency = document.getElementById("from-currency");
    let toCurrency = document.getElementById("to-currency");

    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];

});
