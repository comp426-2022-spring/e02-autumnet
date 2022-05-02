import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  // https://reactjs.org/docs/hooks-state.html
  const [currentSum,setCurrentSum] = useState(0);
  const [clear,setClear] = useState(false);
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })
  const Clear = (e) => {
    e.preventDefault();

    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  const Add = (e) => {
    // https://reactjs.org/docs/handling-events.html
    e.preventDefault();
    if(clear) setClear(false);
// 1. Create other variables for assignments, exams, and engagement here
    let currentA00 = document.querySelector('#a00').value
    let currentA01 = document.querySelector('#a01').value
    let currentA02 = document.querySelector('#a02').value
    let currentA03 = document.querySelector('#a03').value
    let currentA04 = document.querySelector('#a04').value
    let currentA05 = document.querySelector('#a05').value
    let currentA99 = document.querySelector('#a99').value

    let currentBegin = document.querySelector('#begin').value
    let currentMidterm = document.querySelector('#midterm').value
    let currentFinal = document.querySelector('#final').value

    let currentE01 = document.querySelector('#e01').value
    let currentE02 = document.querySelector('#e02').value

    let currentCommits = document.querySelector('#commits').value


    if(currentSum==='')
    return;
// 2. This line is where you add the points all together. Add your other variable references here. Make sure that they match what is above and what is below in the HTML form
    let sum = parseInt(currentA00) + parseInt(currentA01) + parseInt(currentA02) + parseInt(currentA03) + parseInt(currentA04) + parseInt(currentA05) + parseInt(currentA99) + parseInt(currentBegin) + parseInt(currentMidterm) + parseInt(currentFinal) + parseInt(currentE01) + parseInt(currentE02) + parseInt(currentCommits);
    setCurrentSum(sum);
  }

// The main return() for our app is the HTML that gets updated when we interact with it.
// 3. Create other assignment, exam, and engagement score fields below. Make sure the ID matches what is above.
// Pay attention to how react is handling the click events below. It is different than in a standard HTML form, but uses a similar logic. 
// https://reactjs.org/docs/handling-events.html
// Note also how we set the value of the result input field readonly and display currentSum, whether it is cleared or updated with current numbers in the form.
  return (
    <div className="App">
      <div className="app-title">
        <h1>COMP 426 Points</h1>
      </div>
      <form>
            <input type="text" id="a00" placeholder="a00" /><br/><br/>
            <input type="text" id="a01" placeholder="a01" /><br/><br/>
            <input type="text" id="a02" placeholder="a02" /><br/><br/>
            <input type="text" id="a03" placeholder="a03" /><br/><br/>
            <input type="text" id="a04" placeholder="a04" /><br/><br/>
            <input type="text" id="a05" placeholder="a05" /><br/><br/>
            <input type="text" id="a99" placeholder="a99" /><br/><br/>
            <input type="text" id="begin" placeholder="begin" /><br/><br/>
            <input type="text" id="midterm" placeholder="midterm" /><br/><br/>
            <input type="text" id="final" placeholder="final" /><br/><br/>
            <input type="text" id="e01" placeholder="e01" /><br/><br/>
            <input type="text" id="e02" placeholder="e02" /><br/><br/>
            <input type="text" id="commits" placeholder="commits" /><br/><br/>
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
            <label for="result"><b>Result:</b></label>
            <input type="text" id="result" value={currentSum} readOnly />
      </form>
    </div>
  );
}

export default App;