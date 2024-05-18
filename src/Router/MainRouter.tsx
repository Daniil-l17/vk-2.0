import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLoader } from '../components/Loading/MainLoader';
import { Header } from '../components/Header/Header';
import { CgProfile } from 'react-icons/cg';
import { TiNews } from 'react-icons/ti';
import { FaUserFriends } from 'react-icons/fa';
import { useAppselector } from '../hooks/useAppSelector';
import { useAuth } from '../redux/slice/authSlice';

export const Home = lazy(() => import('../page/Home/Home'));
export const UserProfile = lazy(() => import('../page/userProfile/UserProfile'));

const menu = [
  { title: 'моя страница', icon: <CgProfile className="text-2xl" />, link: `/profile/${JSON.parse(localStorage.getItem('user')!).id}` },
  { title: 'Новости', icon: <TiNews className="text-2xl" />, link: '/news' },
  { title: 'Друзья', icon: <FaUserFriends className="text-2xl" />, link: '/friend' },
] as const;

export const MainRouter = () => {
  const user = useAppselector(useAuth);
  return (
    <BrowserRouter>
      <Header />
      <div className="flex px-6 gap-4 min-h-[100vh] mt-4">
        <div className="w-full max-w-[180px]">
          <div className=" fixed top-[81px] flex flex-col gap-6 items-start py-6 h-[600px]  rounded-md w-full max-w-[90px] ">
            {menu.map((item, index) => {
              if (item.title === 'моя страница') {
                if (!user) return null;
              }
              if (item.title === 'Друзья') {
                if (!user) return null;
              }
              return (
                <Link className=" no-underline text-current" to={item.link}>
                  <div
                    key={index}
                    className="flex hover:bg-[#313131]  rounded-lg w-[180px] px-2 py-2 cursor-pointer gap-3 items-center">
                    {item.icon}
                    <h2 className=" text-lg">{item.title}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Suspense fallback={<MainLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
