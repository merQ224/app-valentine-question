import './App.css'
import { useValentineState } from './hooks/useValentineState';
import { ValentineQuestion } from './components/questionPage/valentineQuestion';
import { SuccessPage } from './components/successPage/successPage';

/*
* App: Main application that manages the Valentine's Day question and state.
*/

function App() {
  const { hasAccepted, yesScale, acceptOnlyChoice, shouldDodge, handleNoClick, handleYesClick } = useValentineState();

  if (hasAccepted) {
    return <SuccessPage />;
  }

  return (
    <div>
      <ValentineQuestion
          yesScale={yesScale}
          acceptOnlyChoice={acceptOnlyChoice}
          shouldDodge={shouldDodge}
          handleNoClick={handleNoClick}
          handleYesClick={handleYesClick}
        />
    </div>
  );
}

export default App
