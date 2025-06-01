import { useState } from "react"

import "./App.css"

function Information({ type = "edit" }) {
  const [text, setText] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

  return type === "edit" ? (
    <>
      <h2>Your Information</h2>
      <label htmlFor="text">Your Name : </label>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        id="text"
      />
      <label htmlFor="email">Your Email : </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        id="email"
      />
      <label htmlFor="number">Your Number : </label>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        value={number}
        id="number"
      />
    </>
  ) : (
    <>
      <p>Name : {text}</p>
      <p>Email: {email}</p>
      <p>Number: {number}</p>
    </>
  )
}
function Educational({ type = "edit" }) {
  const [school, setSchool] = useState("")
  const [studyTitle, setStudyTitle] = useState("")
  const [studyDate, setStudyDate] = useState("")

  return type === "edit" ? (
    <>
      <h2>Educational Experience</h2>
      <label htmlFor="school">School's name : </label>
      <input
        onChange={(e) => setSchool(e.target.value)}
        type="text"
        value={school}
        id="school"
      />
      <label htmlFor="studyTitle">Title of Study : </label>
      <input
        onChange={(e) => setStudyTitle(e.target.value)}
        type="text"
        value={studyTitle}
        id="studyTitle"
      />
      <label htmlFor="studyDate">Date of Studying : </label>
      <input
        onChange={(e) => setStudyDate(e.target.value)}
        type="date"
        value={studyDate}
        id="studyDate"
      />
    </>
  ) : (
    <>
      <p> School : {school}</p>
      <p> Title : {studyTitle}</p>
      <p> Study date : {studyDate}</p>
    </>
  )
}

function Practical({ type = "edit" }) {
  const [companyName, setcompanyName] = useState("")
  const [positionTitle, setPositionTitle] = useState("")
  const [mainResponsibilities, setMainResponsibilities] = useState("")
  const [dateStart, setDateStart] = useState("")
  const [dateEnd, setDateEnd] = useState("")

  return type === "edit" ? (
    <>
      <h2>Practical Experience</h2>
      <label htmlFor="company">Company name : </label>
      <input
        onChange={(e) => setcompanyName(e.target.value)}
        type="text"
        value={companyName}
        id="company"
      />
      <label htmlFor="position">Position Title : </label>
      <input
        onChange={(e) => setPositionTitle(e.target.value)}
        type="text"
        value={positionTitle}
        id="position"
      />
      <label htmlFor="mainReps">Main Responsibilities : </label>
      <input
        onChange={(e) => setMainResponsibilities(e.target.value)}
        type="text"
        value={mainResponsibilities}
        id="mainReps"
      />
      <div>
        <label htmlFor="workStart">Worked From : </label>
        <input
          onChange={(e) => setDateStart(e.target.value)}
          type="date"
          value={dateStart}
          id="workStart"
        />
        <label htmlFor="workEnd"> To : </label>
        <input
          onChange={(e) => setDateEnd(e.target.value)}
          type="date"
          value={dateEnd}
          id="workEnd"
        />
      </div>
    </>
  ) : (
    <>
      <p> Company Name : {companyName}</p>
      <p> Title : {positionTitle}</p>
      <p> Responsibilities : {mainResponsibilities}</p>
      <p> Studied from : {dateStart}</p>
      <p> To : {dateEnd}</p>
    </>
  )
}
function Button({ type, onClick }) {
  const edit = type === "edit" ? false : true
  const submit = type === "submit" ? false : true
  return (
    <>
      <button onClick={() => onClick("edit")} disabled={edit}>
        Submit
      </button>
      <button onClick={() => onClick("submit")} disabled={submit}>
        Edit
      </button>
    </>
  )
}
function Cv() {
  const [active, setActive] = useState("edit")
  function activeHandler(type) {
    if (type === "edit") {
      setActive("submit")
    } else {
      setActive("edit")
    }
  }
  return (
    <>
      <Information type={active} />
      <Educational type={active} />
      <Practical type={active} />
      <Button onClick={activeHandler} type={active} />
    </>
  )
}
export { Cv }
