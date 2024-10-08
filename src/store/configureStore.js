import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import Redux DevTools
import entriesReducers from '../reducers/entries.reducers';

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducers,
    }),
    // composeWithDevTools() // Add this to enable Redux DevTools
  );
};

export default configureStore;
