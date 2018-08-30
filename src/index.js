import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from 'components/App';
import Album from 'components/Album';
import Upload from 'components/Upload';
import configureStore from 'redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
      <Router>
        <App>
          <Route path="/" exact component={Album}/>
          <Route path="/upload" component={Upload}/>
        </App>
      </Router>
  </Provider>
,
document.querySelector('#root')
);

