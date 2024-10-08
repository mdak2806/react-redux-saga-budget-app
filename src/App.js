import './App.css';
import {Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';
import {useSelector}  from 'react-redux'; 
// import entriesReducer from './reducers/entries.reducers';
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';


function App() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState();
  const [expenseTotal, setExpenseTotal] = useState();
  const [total, setTotal] = useState();
  const entries = useSelector((state) => state.entries);


  // useEffect runs when the program is initialised
  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId )
      const newEntry = [...entries]; // copy of entries in array
      newEntry[index].description = description;
      newEntry[index].value = value;
      newEntry[index].isExpense = isExpense;
      // setEntries(newEntry);
      resetEntry();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]) // runs everytime isOpen is changed or activated or called
  // const deleteEntry = (id) => {

    // calculating total income
    useEffect(() =>{
      let totalIncome = 0;
      let totalExpense = 0;
      entries.map(entry => {
        if(entry.isExpense){
          return totalExpense += Number(entry.value)
        } else{
          return totalIncome += Number(entry.value)
        }


      });

      setTotal(totalIncome - totalExpense);
      setExpenseTotal(totalExpense);
      setIncomeTotal(totalIncome);
      // console.log('total income is:', totalIncome)
      // console.log('total expense is:', totalExpense)


    }, [entries]);

    function resetEntry(){
      setDescription('');
      setValue('');
      setIsExpense(true);
    };

  // // }
  // function deleteEntry(id){
  //   // filter to get what you want
  //   const result = entries.filter(entry => entry.id !== id)
  //   // console.log('entries :', entries);
  //   // console.log('results =', result);
  //   // setEntries(result);
  // }

  function addEntry(){
    // add to entries array
    const result = entries.concat({id:entries.length+1, description, value, isExpense});
    // console.log('results =', result);
    // console.log('entries :', entries);
    // setEntries(result);
    resetEntry();

  }

  function editEntry(id){
    // console.log('edit entry with id ', id);
    if(id){
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  return (
 <Container > 
    <MainHeader title='budget' type='h2'/>
    <DisplayBalance title="Balance" value={total} color="black" size="small"/>
    <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
    <MainHeader title="History" type="h3" />
    
    <EntryLines 
    entries={entries} 
    // deleteEntry={deleteEntry} 
    editEntry={editEntry}

    />

  <MainHeader 
  title="Add new transaction" 
  type="h3" 
  />

  <NewEntryForm 
  addEntry={addEntry}
  description={description} 
  value={value}
  isExpense={isExpense}
  setDescription={setDescription}
  setValue={setValue}
  setIsExpense={setIsExpense}
  />

<ModelEdit 
isOpen={isOpen} 
setIsOpen={setIsOpen}
addEntry={addEntry}
description={description} 
value={value}
isExpense={isExpense}
setDescription={setDescription}
setValue={setValue}
setIsExpense={setIsExpense}
/>

  </Container> 

  );
}

export default App;

