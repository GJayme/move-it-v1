import { ChallengesPovider } from '../context/ChallengesContext';
import { useState } from 'react';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengesPovider>
      <Component {...pageProps} />
    </ChallengesPovider>
  );
}

export default MyApp;
