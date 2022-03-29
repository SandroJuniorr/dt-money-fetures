import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "./services/api";

 const TransactionsContext = createContext<TransactionContext>({} as TransactionContext)

interface TransactionsProviderPros {
    children: ReactNode
}
interface TransactionContext {
    transactions: Transaction[],
    createdTransaction: (transaction : TransactionInput)=> Promise<void>
}
interface Transaction {
    id: number,
    title: string,
    type: string,
    amount:number,
    category:string,
    createdAt: string,

}
type TransactionInput = Omit <Transaction, 'id'| 'createdAt'>

export function TransactionsProvider({children} : TransactionsProviderPros){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(()=>{
        api.get('/transactions')
        .then(response => {setTransactions(response.data.transactions)})

        
    },[])

    async function createdTransaction(transaction : TransactionInput){

        const response =  await api.post('/transactions', transaction)
        const newTransaction = response.data
        console.log(newTransaction)
        setTransactions([
            ...transactions,
            newTransaction
        ])
    }
    return (
        <TransactionsContext.Provider value={{transactions, createdTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
       
    
}

export function useTransaction(){
    const context = useContext(TransactionsContext)

    return context
}