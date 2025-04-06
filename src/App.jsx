import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFound from './pages/NotFound';

function Layout () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
