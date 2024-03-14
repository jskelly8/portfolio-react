// Bringing in the required imports
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};

// Export
export default App