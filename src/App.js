import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => {response.json()
        .then((data) => {
      setCoins(data)
      setLoading(false);
  })
})
}, []);

  const onMymoney = (event) => {
    setAmount(event.target.value);
  }
  const onExchange = (event) => {
    if(amount === "") return alert("변환할 숫자를 입력하세요.");
    const coin = JSON.parse(event.target.value);
    setResult(Math.round((coin.quotes.USD.price / amount)*100)/100 + " " + coin.symbol);
  }

  return (
    <div>
      <h1>The Coins! {loading? "" : `(${coins.length})`}</h1>
      <div>
      <input type="number" placeholder="I want to exchange" value={amount} onChange={onMymoney} />USD
     </div>
      
      {loading ? 
      <strong>Loading...</strong> : 
      <select onChange={onExchange}>
       {coins.map((coin) => (<option value={JSON.stringify(coin)} key={coin.id}>{coin.name} ({coin.symbol}:({coin.quotes.USD.price})) </option>))}
      </select>}
      <div>
      <input value={result} readOnly/>
      </div>
      
    </div>
  );
}

export default App;