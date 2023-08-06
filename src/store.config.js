import { createStore, combineReducers } from "redux";
import {ReactFormReducer} from './redux-form/react-form.reducer';

const rootReducer = combineReducers({
  ReactFormReducer,
});



export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
