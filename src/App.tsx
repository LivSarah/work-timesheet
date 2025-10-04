import { useState } from 'react'
import './App.scss'
import { MOCK_WORKDAY_ENTRIES, type WorkdayEntry } from './types/time.types';
import { WorkHistoryModal } from './components/WorkHistoryModal';

function App() {
  //TODO: save values to local storage
  const [userName, setUserName] = useState("Legolas Greenleaf")
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentCheckinTimestamp, setCurrentCheckinTimestamp] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [savedEntries, setSavedEntries] = useState<WorkdayEntry[]>(MOCK_WORKDAY_ENTRIES);
  const [isWorkHistoryModalOpen, setIsWorkHistoryModalOpen] = useState(false);

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

  function openAllEntries() {
    setIsWorkHistoryModalOpen(true);
  }

  //TODO: refactor inline styles
  return (
    <main>
      <div role='heading' className='header'>
        <h1 className='app-title'>Min timeføring</h1>

        <span>{userName}</span>
      </div>

      <section style={{width: "100%", maxWidth: "1200px", display: "grid", gap: "36px",justifySelf: "center", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto 1fr", padding: "48px"}}>
        <div style={{minHeight: "250px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr auto", gridColumn: "1 / span 2", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#8d3d9c", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">hourglass_empty</i>
            Stemple inn/ut på jobb
          </span>

          {/* TODO: Refactor to reusable 'card'-component */}
          <p style={{padding: "24px", fontSize: "1.2rem", textAlign: "center"}}>
            {isCheckedIn ? `Du har vært stemplet inn i [timer/minutter].` : "Du er stemplet ut."}
          </p>

          <div style={{padding: "12px", justifySelf: "center"}}>
            <button onClick={toggleCheckedInState} style={{backgroundColor: isCheckedIn ? "#d53d3d" : "#50a459", width: "200px"}}>
              {isCheckedIn ? "Stemple ut" : "Stemple inn"}
            </button>
          </div>
        </div>

        <div style={{minHeight: "300px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#28a9bc", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">date_range</i>
            Historiske oppføringer
          </span>

          <div style={{padding: "12px", display: "flex", flexDirection: "column", rowGap: "8px"}}>
            {savedEntries.map((entry) => {
              return <div>
                <span style={{display: "flex", alignContent: "center", columnGap: "4px"}}>
                  {`» Dato: ${entry.date.toLocaleDateString()} — Tittel: ${entry.title} — Timer: ${new Date(entry.millisecondsWorked).getHours()}t and ${new Date(entry.millisecondsWorked).getMinutes()}min`}
                  {entry.note && <i className='material-icons'>textsms</i>}
                </span>
              </div>
            })}

            <button style={{alignSelf: "end", marginTop: "auto"}} onClick={openAllEntries}>Se alle</button>
          </div>
        </div>

        <div style={{minHeight: "300px", width: "100%", display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#27262a", borderRadius: "6px", overflow: "hidden"}}>
          <span style={{backgroundColor: "#fc9127", padding: "12px", display: "flex", alignItems: "center", columnGap: "4px"}}>
            <i className="material-icons">access_time</i>
            I dag
          </span>

          <div style={{padding: "12px"}}>
            I dag er det [ TODO: dato + opparbeidet innstemplet tid den dagen? ]
          </div>
        </div>
      </section>

      {isWorkHistoryModalOpen && <WorkHistoryModal savedEntries={savedEntries} onClose={() =>setIsWorkHistoryModalOpen(false)} />}
    </main>
  )
}

export default App;
