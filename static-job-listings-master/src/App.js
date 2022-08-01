import React from 'react';
import { useSelector } from 'react-redux';

import { Header, JobsList, Filter } from './components';

function App() {
  const {tags} = useSelector(state => state);

  return (
    <>
      <Header/>
      <main className="main">
        <div className="wrapper">
          {tags?.length > 0 && <Filter/>}
          <JobsList/>
        </div>
      </main> 
    </>
  );
}

export default App;