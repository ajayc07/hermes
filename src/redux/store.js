import {createStore} from 'redux';
import messageReducer from './reducer';

export const Store = () => {
  const store = createStore(
      messageReducer
    );
  return store;
}

export default Store;