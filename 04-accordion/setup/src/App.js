import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  

  return <main>
    <div className="container">
      <h3>Questions and answers about login</h3>
      <div className="info">
        {
          questions.map((question) => <SingleQuestion key={question.id} {...question}/>)
        }
      </div>
    </div>
  </main>
}

export default App;
