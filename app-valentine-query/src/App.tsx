import './App.css'
import { useValentineState } from './hooks/useValentineState';
import { ValentineQuestion } from './components/questionPage/valentineQuestion';

/*
* App: Main application that manages the Valentine's Day question and state.
*/

function App() {
  const { hasAccepted, yesScale, acceptOnlyChoice, handleNoClick, handleYesClick } = useValentineState();

  if (hasAccepted) {
    return <div>Success Page to come</div>
  }

  return (
    <div>
    <ValentineQuestion
        yesScale={yesScale}
        acceptOnlyChoice={acceptOnlyChoice}
        handleNoClick={handleNoClick}
        handleYesClick={handleYesClick}
      />
      </div>
  );
}

export default App
