import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';

import {DataProvider} from './components/DataProvider'

function App() {
  return (
    <div className="App">

      <DataProvider>
        <header className="App-header">

          <FormInput />
          <List />
          <Footer />
          
        </header>

      </DataProvider>
    </div>
  );
}

export default App;
