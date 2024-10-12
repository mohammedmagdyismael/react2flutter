import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './app/store/store';
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
            <Provider store={store}>
                <ThemeProvider theme={{}}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<FirstView />} />
                            <Route path="/secondview" element={<SecondView />} />
                        </Routes>   
                    </Router>
                </ThemeProvider>
            </Provider>
        </>
    )
};

export default App;
