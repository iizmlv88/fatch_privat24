

const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

async function privatbank(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(res);
    console.log(data);

    const eur = data[0];
    const usd = data[1];

    const table = `
      <table id="table">
        <tr>
          <th>Валюта</th>
          <th>Покупка</th>
          <th>Продаж</th>
        </tr>
        <tr>
          <td>EUR</td>
          <td>${eur.buy}</td>
          <td>${eur.sale}</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>${usd.buy}</td>
          <td>${usd.sale}</td>
        </tr>
      </table>
    `;

    // document.body.innerHTML = table;
    document.getElementById("tableOne").innerHTML = table
    

  } catch (error) {
    console.error(error);
  }
}

privatbank(url);

const urlMore = 'https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014'

async function privatbankMore(urlMore){
    try {
        const resMore = await fetch(urlMore)
        const dataMore = await resMore.json()

        console.log(resMore);
        console.log(dataMore);

        const tableMore = `
            <table>
            <tr>
                <th>Валюта</th>
                <th>Покупка</th>
                <th>Продаж</th>
            </tr>
             <tr>
                <td>USD</td>
                <td>${dataMore.exchangeRate[14].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[14].saleRate}</td>
            </tr>
            <tr>
                <td>EUR</td>
                <td>${dataMore.exchangeRate[16].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[16].saleRate}</td>
            </tr>
            <tr>
                <td>CHF</td>
                <td>${dataMore.exchangeRate[12].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[12].saleRate}</td>
            </tr>
             <tr>
                <td>GBP</td>
                <td>${dataMore.exchangeRate[13].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[13].saleRate}</td>
            </tr>
            <tr>
                <td>PLZ</td>
                <td>${dataMore.exchangeRate[18].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[18].saleRate}</td>
            </tr>
            <tr>
                <td>JPY</td>
                <td>${dataMore.exchangeRate[6].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[6].saleRate}</td>
            </tr>
            <tr>
                <td>CAD</td>
                <td>${dataMore.exchangeRate[1].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[1].saleRate}</td>
            </tr>
            <tr>
                <td>NOK</td>
                <td>${dataMore.exchangeRate[9].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[9].saleRate}</td>
            </tr>

        </table>
        
        `
        document.getElementById('tableMore').innerHTML = tableMore

    } catch (error) {
    console.error(error);
  }
}


// const btn = document.getElementById('btn')
// btn.addEventListener('click', privatbankMore(urlMore))

const btn = document.getElementById('btn');
let isOn = false;

btn.addEventListener('click', function() {
  if (isOn) {
     document.getElementById('tableMore').style.display = "none"
    
    isOn = false;
  } else {
   privatbankMore(urlMore)
    document.getElementById('tableMore').style.display = "contents"
    isOn = true;
  }
});