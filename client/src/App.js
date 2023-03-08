import React from "react";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import CreateNewUser from "./Components/createNewUser";
import SignIn from './Components/signIn';
import {useState} from "react";

function App() {

  const [hideCreate, setHideCreate] = useState(true);

  return (
    <div className="App">
      <CreateNewUser hideCreate={hideCreate} setHideCreate={setHideCreate} />
      <SignIn hideCreate={hideCreate} setHideCreate={setHideCreate} />
    </div>
  );
}

export default App;
