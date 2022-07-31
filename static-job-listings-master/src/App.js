import React from 'react';
import { Header, JobsList } from './components';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <div className="wrapper">
          <JobsList/>
        </div>
      </main> 
    </>
  );
}

export default App;