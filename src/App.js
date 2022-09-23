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
        <Route path='/cg-contact' element={<ContactList />} />
        <Route path='/cg-contact/contact/list' element={<ContactList />} />
        <Route path='/cg-contact/contact/add' element={<AddContact />} />
        <Route path='/cg-contact/contact/view' element={<ViewContact />} />
        <Route path='/cg-contact/contact/edit' element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;
