import React from 'react';
import LeftNav from './LeftNav';

function Index({value, children}) {
  return (
    <div className={'flex min-h-screen'}>
      <LeftNav/>
      <div className="flex-grow bg-gray-darkTheme">
          {children}
      </div>

    </div>
  );

}

export default Index;