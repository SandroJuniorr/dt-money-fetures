import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './components/Dashbord';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import {GlobalStyle} from './styles/global'
import { TransactionsProvider } from './useTransaction';
import ligth from './styles/themes/ligth'
import dark from './styles/themes/dark'



function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme,setTheme] = useState(ligth)

  function toogleTheme (){
    setTheme(theme.title === 'ligth' ? dark : ligth)
  }

  function handleClosedModal(){
    setIsOpen(false)
  }
  function handleOpenModal(){
    setIsOpen(true)
  }

  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Header openModal={handleOpenModal} changeTheme={toogleTheme}/>
        <Dashboard/>
        <NewTransactionModal closedModal={handleClosedModal } isOpen={isOpen}/>
        <GlobalStyle/>
      </ThemeProvider>
    </TransactionsProvider>
  );
}

export default App;
