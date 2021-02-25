import { ChallengesPovider } from '../context/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengesPovider>
        <Component {...pageProps} />
    </ChallengesPovider>
  );
}

export default MyApp;
