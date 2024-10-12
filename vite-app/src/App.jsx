import { ThemeProvider } from 'styled-components';
import FirstView from './views/FirstView';
import SecondView from './views/SecondView';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
  
  const App = () => {
    return (
        <>
            <ThemeProvider theme={{}}>
                <Router>
                    <Routes>
                        <Route path="/" element={<FirstView />} />
                        <Route path="/secondview" element={<SecondView />} />
                    </Routes>   
                </Router>
            </ThemeProvider>
        </>
    )
};

export default App;
