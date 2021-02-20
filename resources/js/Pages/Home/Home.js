import React from 'react';
import Index from '../../Layouts/Index';

function Home() {
  return (
    <>
      <h1>Welcome to Mind Maker</h1>
    </>
  );
}

Home.layout = page => <Index children={page}/>;

export default Home;
