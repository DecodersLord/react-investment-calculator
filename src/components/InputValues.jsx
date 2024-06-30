
export default function InputValues({userInput, handleUserInputChange}){
    

    function handleChange(inputIdentifier, newValue){
        
        handleUserInputChange(inputIdentifier, newValue);
    }

    return(
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label id="input-group" htmlFor="">Initial Investment</label>
                    <input 
                        type="number" 
                        name="" 
                        value={userInput.initialInvestment}
                        onChange={(e) => handleChange("initialInvestment", e.target.value)} 
                        required
                    />                
                </p>
                <p>
                    <label id="input-group" htmlFor="">Annual Investment</label>
                    <input 
                        type="number" 
                        name=""  
                        value={userInput.annualInvestment}
                        onChange={(e) => handleChange("annualInvestment", e.target.value)} 
                        required
                    />
                </p>
            </div>
            <div className="input-group">
            
                <p>
                    <label id="input-group" htmlFor="">Expected Return</label>
                    <input 
                        type="number" 
                        name=""  
                        value={userInput.expectedReturn}
                        onChange={(e) => handleChange("expectedReturn", e.target.value)} 
                        required
                    />
                </p>
                <p>
                    <label id="input-group" htmlFor="">Duration</label>
                    <input 
                        type="number" 
                        name="" 
                        value={userInput.duration} 
                        onChange={(e) => handleChange("duration", e.target.value)} 
                        required
                    />
                </p>
            </div>
        </div> 
    );
}