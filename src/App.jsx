import './App.css'
import { useState } from 'react'
import ContactList from "./components/ContactList"
import SelectedContact from './components/SelectedContact'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      { selectedContactId ? (
        <SelectedContact
          myId={selectedContactId}
          pickMyId={setSelectedContactId}
        />
      ) : (
        <ContactList chosenId={setSelectedContactId}/>
      )}

    </>
  )
}

  //id which contact to render
  //a new component
  //fetching a single id
