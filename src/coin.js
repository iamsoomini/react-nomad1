// import { useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => {response.json()
//         .then((data) => {
//       console.log(data);
//       setLoading(false);
//   })
// })
// }, []);

//   return (
//     <div>
//       <h1>The Coins!</h1>
//       {loading ? <strong>Loading...</strong> : null}
//     </div>
//   );
// }