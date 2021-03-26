import './App.css'
import Nav from './components/header/Nav';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './muitheme/Theme';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <SnackbarProvider maxSnack={5}>
          <Router>
            <Nav />
            <MainRoutes />
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
