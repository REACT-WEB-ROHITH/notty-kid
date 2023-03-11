import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeJoinBlock from './components/HomeJoinBlock';
import Navbar from './components/Navbar';
import AllNotes from './components/AllNotes';
import ViewNote from './components/ViewNote';
import DeletedNotes from './components/DeletedNotes';

function App() {
  return (
    <>
    <BrowserRouter basename='/noty-kid'>
    <Navbar/>
    <Routes>
      <Route path={"/noty-kid"} element={
      <>
      <HomeJoinBlock/>
      </>}/>

      <Route path={"/allnotes"} element={
      <>
      <AllNotes/>
      </>}/>

      <Route path='/view' element={
      <>
      <ViewNote/>
      </>}/>

      <Route path='/delete' element={
      <>
      <DeletedNotes/>
      </>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
