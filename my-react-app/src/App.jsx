import { useState } from 'react';
import Button from "@mui/material/Button";
import MapView from './MapView'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button variant="contained">Testing</Button>
        <MapView />
      </div>
    </>
  );
}

export default App;