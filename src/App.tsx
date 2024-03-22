import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import LoginPage from './components/loginn';
import SignupPage from './components/singUp';
import HospitalList from './components/addHospital';
import FirestoreDataPage from './components/adminHospitalList';
// import SearchBar from './components/userHospitalList';
import MarkdownEditor from './utils/review';
// import AllHospitalData from './components/adminHospitalList';
import ErrorPage from './components/errorPage';
import React from 'react';
// import PrivateRoute  from './components/privateRoute';
// import { AuthProvider } from './components/authContext';

const SearchBar = React.lazy(() => import("./components/userHospitalList"));
const AllHospitalData = React.lazy(() => import("./components/adminHospitalList"));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/search" element={
          <React.Suspense fallback={<>Loading...</>}>
            <SearchBar />
          </React.Suspense>
        } />
      <Route path="/review" element={<MarkdownEditor />} />
      <Route path="/data/:id" element={<FirestoreDataPage />} />
      <Route path="/addHospital" element={<HospitalList />} />
      <Route path="/admin" element={
      <React.Suspense fallback={<>Loading...</>}>
            <AllHospitalData />
          </React.Suspense>} />
      {/* <Route path="/" element={<PrivateRoute path={'/login'} element={<LoginPage/>} />}>
        <Route path="/data/:id" element={<FirestoreDataPage />} />
      </Route>
      <Route path="/" element={<PrivateRoute path={'/login'} element={<LoginPage/>} />}>
        <Route path="/addHospital" element={<HospitalList />} />
      </Route>
      <Route path="/" element={<PrivateRoute path={'/login'} element={<LoginPage/>} />}>
        <Route path="/admin" element={<AllHospitalData />} />
      </Route> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;




