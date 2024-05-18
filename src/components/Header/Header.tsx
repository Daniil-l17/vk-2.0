import { Avatar, Button, Indicator, Input } from '@mantine/core';
import style from './header.module.scss';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useAuth } from '../../redux/slice/authSlice';
import { useAppselector } from '../../hooks/useAppSelector';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useCreateUserMutation } from '../../redux/api/inject/auth';
import { MainLoader } from '../Loading/MainLoader';

const ModalAuth = lazy(() => import('../modal/Modal'));

export const Header = () => {
  const status = useOnlineStatus();
  const user = useAppselector(useAuth);
  const [userInfo, setUserInfo] = useState<{ name: string; password: string; email: string }>({
    name: '',
    password: '',
    email: '',
  });

  const fun = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [createuser, { isLoading,data }] = useCreateUserMutation();

  const create = () => {
    createuser({ ...userInfo, role: 'user',lastname: '' });
  };

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (user) {
      close();
    }
  }, [user]);

  return (
    <header className={style.header}>
      <div className="flex max-w-[800px] w-full justify-between items-center">
        <Link className="no-underline text-current" to="/">
          <div className="flex cursor-pointer gap-6 items-center">
            <div className={style.logo_bg}></div>
            <h1 className=" text-xl font-medium">ВКОНТАКТЕ 2.0</h1>
          </div>
        </Link>
        <Input
          disabled={!user}
          className=" bg-[#424242] rounded-md !w-[500px]"
          variant="filled"
          placeholder="Поиск"
        />
      </div>
      {opened && (
        <Suspense fallback={<MainLoader />}>
          <ModalAuth
            id={data?.id}
            create={create}
            isLoading={isLoading}
            close={close}
            fun={fun}
            opened={opened}
          />
        </Suspense>
      )}
      {user ? (
        <Indicator
          color={status === 'pending' ? 'blue' : status === 'online' ? 'green' : 'red'}
          className=" cursor-pointer"
          size={17}
          offset={7}
          withBorder
          processing>
          <Avatar size={45} radius="xl" />
        </Indicator>
      ) : (
        <Button onClick={open} className="!w-20" variant="filled">
          Войти
        </Button>
      )}
    </header>
  );
};
