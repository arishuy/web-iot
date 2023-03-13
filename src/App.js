import React from 'react'
import { BrowserRouter} from "react-router-dom";
import Routes from "../src/routes/routes";

const App = () => {
    return (
      <React.StrictMode>
    <BrowserRouter>
    <div className="App">
          <Routes />
    </div>
  </BrowserRouter>
      </React.StrictMode>

    )
}

export default App