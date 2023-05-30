import "./App.css";
import Balance from "./Components/Balance";
import Header  from './Components/Header'
import IncomeExpensise from "./Components/IncomeExpensise";
import Transaction from "./Components/Transaction";
import TransactionsList from "./Components/TransactionsList";
import { GlobalProvider } from "./Context/GlobalStates";




function App() {
  return (
    <GlobalProvider className="App">
     <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpensise/>
        <TransactionsList/>
        <Transaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
