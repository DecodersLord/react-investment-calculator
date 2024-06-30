import InputValues from "./components/InputValues"
import { useState } from "react"
import Results from "./components/Results";



function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    let investmentResults = [];

  function handleUserInputChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier] : +newValue
        };
    });

  }

  const isValidResult = userInput.duration >= 1;

  return (
    <>
      <InputValues 
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
      />
      { !isValidResult && <p className="center"> Please enter a duration greater than 0.</p>}
      {isValidResult && <Results userInput={userInput}/>}
    </>
  )
}

export default App
