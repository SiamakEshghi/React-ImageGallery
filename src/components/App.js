import React from 'react';
import Header from 'components/Header';

export default ({ children }) => {
  
    function handleLogin(){

    }
    return (
      <div>
        <Header login={handleLogin}/>
        {children}
      </div>
    );
  };
