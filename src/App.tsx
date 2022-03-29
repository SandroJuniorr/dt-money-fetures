import { useState } from 'react';
import { Dashboard } from './components/Dashbord';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import {GlobalStyle} from './styles/global'
import { TransactionsProvider } from './useTransaction';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClosedModal(){
    setIsOpen(false)
  }
  function handleOpenModal(){
    setIsOpen(true)
  }

  return (
    <TransactionsProvider>
    <Header openModal={handleOpenModal}/>
    <Dashboard/>
    <NewTransactionModal closedModal={handleClosedModal } isOpen={isOpen}/>
    <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
