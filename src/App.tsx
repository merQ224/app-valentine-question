import './App.css'
import { useValentineState } from './hooks/useValentineState';
import { ValentineQuestion } from './components/questionPage/valentineQuestion';
import { SuccessPage } from './components/successPage/successPage';

/*
* App: Main application that manages the Valentine's Day question and state.
*/

function App() {
  const { noCount, hasAccepted, yesScale, acceptOnlyChoice, shouldDodge, rejectMsg, handleNoClick, handleYesClick } = useValentineState();

  if (hasAccepted) {
    return <SuccessPage />;
  }

  return (
    <div>
      <ValentineQuestion
          noCount={noCount}
          yesScale={yesScale}
          acceptOnlyChoice={acceptOnlyChoice}
          shouldDodge={shouldDodge}
          rejectMsg={rejectMsg}
          handleNoClick={handleNoClick}
          handleYesClick={handleYesClick}
        />
    </div>
  );
}

export default App
