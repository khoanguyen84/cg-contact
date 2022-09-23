import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContactList from './components/ContactList/ContactList';
import AddContact from './components/AddContact/AddContact';
import ViewContact from './components/ViewContact/ViewContact';
import EditContact from './components/EditContact/EditContact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path='/contact/list' element={<ContactList />} />
        <Route path='/contact/add' element={<AddContact />} />
        <Route path='/contact/view' element={<ViewContact />} />
        <Route path='/contact/edit' element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;
