import { useState } from 'react'
import './App.scss'
import { MOCK_WORKDAY_ENTRIES, type WorkdayEntry } from './types/time.types';

function App() {
  //TODO: save values to local storage
  const [userName, setUserName] = useState("Legolas Greenleaf")
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentCheckinTimestamp, setCurrentCheckinTimestamp] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [savedEntries, setSavedEntries] = useState<WorkdayEntry[]>(MOCK_WORKDAY_ENTRIES);

  const todaysDate = Date.now();
console.log(todaysDate.toExponential(), "2 ", todaysDate.toFixed(), " 3 ", todaysDate.toLocaleString, " 4 ", todaysDate.toPrecision(), " 5 ", todaysDate.toString, " 6 ", todaysDate.valueOf())
  function toggleCheckedInState() {
    if (isCheckedIn) {
      setCurrentCheckinTimestamp(0);
      setIsCheckedIn(false);
      // TODO: dialog to save title and note 
    } else {
      setCurrentCheckinTimestamp(Date.now());
      setIsCheckedIn(true);
    }
  }

  //TODO: refactor inline styles
  return (
    <main>
      <div role='heading' className='header'>
        <h1 className='app-title'>Min timeføring</h1>

        <span>{userName}</span>
      </div>

      <section style={{width: "100%", maxWidth: "1200px", display: "grid", gap: "36px",justifySelf: "center", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto 1fr", padding: "48px"}}>
        <div style={{height: "200px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr auto", gridColumn: "1 / span 2", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#8d3d9c", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">hourglass_empty</i>
            This is the checkin' card
          </span>

          {/* TODO: Refactor to reusable 'card'-component */}
          <div style={{padding: "12px"}}>
            {isCheckedIn ? `Du har vært stemplet inn i [timer/minutter].` : "Du er stemplet ut."}
          </div>

          <div style={{padding: "12px", justifySelf: "center"}}>
            <button onClick={toggleCheckedInState} style={{backgroundColor: isCheckedIn ? "#d53d3d" : "#50a459", width: "200px"}}>
              {isCheckedIn ? "Stemple ut" : "Stemple inn"}
            </button>
          </div>
        </div>

        <div style={{height: "200px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#28a9bc", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">date_range</i>
            This is the checkin' card
          </span>

          <div style={{padding: "12px", display: "flex", flexDirection: "column", rowGap: "8px"}}>
            {savedEntries.map((entry) => {
              return <div>
                <span style={{display: "flex", alignContent: "center", columnGap: "4px"}}>
                  {`» Date: ${entry.date.toLocaleDateString()} — Title: ${entry.title} — Worked: ${new Date(entry.millisecondsWorked).getHours()}h and ${new Date(entry.millisecondsWorked).getMinutes()}min`}
                  {entry.note && <i className='material-icons'>textsms</i>}
                </span>
              </div>
            })}
          </div>
        </div>

        <div style={{height: "200px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#fc9127", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">access_time</i>
            I dag
          </span>

          <div style={{padding: "12px"}}>
            I dag er det [TODO: dato + opparbeidet innstemplet tid den dagen? ]
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
