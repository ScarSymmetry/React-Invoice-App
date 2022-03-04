import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import UserDetailsPage from './components/UserDetailsPage/UserDetailsPage';
import { useState } from 'react';

const App = () => {
  const [formOpened, setFormOpened] = useState(false);
  return (
    <div className='grid-container'>
      <Router>
        <Header />
        <Main />

        <Route path='/invoices/:id'>
          <UserDetailsPage />
        </Route>

        <Form formOpened={formOpened} />
      </Router>
    </div>
  );
};

export default App;
