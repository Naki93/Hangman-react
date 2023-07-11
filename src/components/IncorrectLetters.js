import React from 'react';


export default function IncorrectLetters ({incorrectGuesses}){
    return(
        <div>
<p className="error">Errors: {incorrectGuesses}</p>
</div>
    )
     
}
