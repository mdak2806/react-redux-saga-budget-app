import './App.css';
import {Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
 <Container > 
    <MainHeader title='budget' type='h2'/>
    <DisplayBalance title="Balance" value="24953" color="black" size="small"/>
    <DisplayBalances />
    <MainHeader title="History" type="h3" />
    <EntryLine description="income" value="$10"/>
    <EntryLine description="expense" value="$10" isExpense/>
    <EntryLine description="income" value="$30" />
    <MainHeader title="Add new transaction" type="h3" />
  <NewEntryForm />
  </Container> 

  );
}

export default App;
