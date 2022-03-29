import ReactModal from "react-modal";
import { Container, RadioBox } from "./styles";

import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import CloseImg from "../../assets/close.svg"
import { FormEvent, useContext, useState } from "react";
import { useTransaction } from "../../useTransaction";

interface NewTransactionModalProps  {
  closedModal: ()=>void,
  isOpen: boolean
}

export function NewTransactionModal({closedModal, isOpen} : NewTransactionModalProps ) {
  const {createdTransaction} = useTransaction()
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [type,setType] = useState('deposit')
  const [category,setCategory] = useState('')

  async function handleCreateNewTransaction(event : FormEvent){
    event.preventDefault()
    createdTransaction({
      title,
      amount,
      type,
      category
    })
    
    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')

    closedModal()

    
  }

  
  
  return (
    <ReactModal
      isOpen={isOpen}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      onRequestClose={closedModal}
    >
      
      <button className="Close-Modal" onClick={closedModal}>
        <img src={CloseImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction} >
        <h1>Cadastrar Transação</h1>
        <input 
          type="text" 
          placeholder="Nome" 
          value={title}
          onChange={event => setTitle(event.target.value)} />
        <input
          type="number" 
          placeholder="Preço" 
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}/>
        <div>
         <RadioBox
          type="button"
          onClick={()=> setType('deposit') }
          className={ type == 'deposit' ? 'active' : ''}
          TransactionType={type}>
          <img src={IncomeImg} alt="entrada" />

           Entrada 
           
            </RadioBox>
         <RadioBox 
          type="button"
          onClick={()=> setType('withdraw')}
          className={ type === 'withdraw' ? 'active' : ''}
          TransactionType={type}>
          <img src={OutcomeImg} alt="Saída" />

           Saída
           
         </RadioBox>
        </div>
        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}/>
        <button 
          type="submit"
          className="registerTransactionButton">
            Cadastrar
        </button>
      </Container>
    </ReactModal>
  );
}
