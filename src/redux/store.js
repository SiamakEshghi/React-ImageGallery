import { createStore, applyMiddleware } from 'redux';
import reducers from 'redux/reducers';
import reduxThunk from 'redux-thunk';


export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('redux/reducers', () => {
      const nextReducer = require('redux/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}