import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';

import ComponentCollectsPage from '@/pages/ComponentCollectsPage';
import LoginPage from '@/pages/Login/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ReviewMainPage from '@/pages/Review/ReviewMainPage';
import SignupConfirmPage from '@/pages/Signup/SignupConfirmPage';
import SignupSuccessPage from '@/pages/Signup/SignupSuccessPage';
import UserSignup from '@/pages/Signup/User/UserSignupPage';
import UserTabPage from '@/pages/Signup/User/UserTabPage';
import VolAdminPage from '@/pages/Volunteer/Foundation/VolAdminPage';
import VolUserResiPage from '@/pages/Volunteer/User/VolUserResiPage';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/volunteer-user',
        element: <VolUserResiPage />,
      },
      {
        path: '/volunteer-admin',
        element: <VolAdminPage />,
      },
      {
        path: '/review',
        element: <ReviewMainPage />,
      },
      {
        path: '/components',
        element: <ComponentCollectsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup/usertab',
        element: <UserTabPage />,
      },
      {
        path: '/signup/user',
        element: <UserSignup />,
      },
      {
        path: '/signup/confirm',
        element: <SignupConfirmPage />,
      },
      {
        path: '/signup/success',
        element: <SignupSuccessPage />,
      },
    ],
  },
]);

export default routers;
