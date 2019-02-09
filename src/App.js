import React from 'react';
import Hooks from './Hooks';
import EasyPeasy from './EasyPeasy';
import Rematch from './Rematch';

export default function(props) {
  return (
    <section>
      <h1>flux utils counter comparison</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Hooks />
        <EasyPeasy />
        <Rematch />
      </div>
    </section>
  );
}
