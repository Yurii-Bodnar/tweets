// import HomePage from 'pages/HomePage/HomePage';
// import TwitsPage from 'pages/TwitsPage/TwitsPage';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const TweetsPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets-page" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};
