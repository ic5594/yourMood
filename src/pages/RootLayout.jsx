import { PC, Mobile } from '@/hooks/useResponse.jsx';

import Fixation from '@/pages/Fixation.jsx';
import PcPage from '@/pages/PcPage';

export default function WelcomePage() {
  return (
    <div className="app">
      <PC>
        <PcPage />
        <Fixation />
      </PC>
      <Mobile>
        <Fixation />
      </Mobile>
    </div>
  );
}
