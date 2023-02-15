import "./HelpModal.css"

function HelpModal({setFunction}) {
    return (
        <div className="overlay">
            <div className="helpModal">
                <section className="logging">
                <h4 className="button-style">Logging In Tips:</h4>
                <li>If you have registered an account, type your USERNAME (max char. 15) and PASSWORD (min char. 5) in the corresponding fields and click 'LOGIN'</li>
                <li>USERNAME AND PASSWORD values are CASE-SENSITIVE</li>
                </section>
                
                <section className="registering">
                <h4 className="button-style">New User?</h4>
                <li>Type in your preferred USERNAME (max char. 15) and your chosen PASSWORD (min char. 5) in the corresponding fields (be sure to remember their values) and click 'REGISTER'</li>
                <li>You will be prompted if your chosen USERNAME isn't available, if so choose another and try again</li>
                </section>
                
                <button
                className="button-style" 
                onClick={()=>setFunction(false)}>
                    CLOSE
                </button>
            </div>
            
        </div>
    );
}

export default HelpModal;