import React from 'react';
import LeftNav from './LeftNav';

function Index({children}) {
  return (
    <div className={'flex min-h-screen'}>
      <LeftNav/>
      <div className="flex-grow bg-gray-active">
          {children}
      </div>

    </div>
  );

}

export default Index;