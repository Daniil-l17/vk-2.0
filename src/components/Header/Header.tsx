import { Avatar, Indicator, Input } from '@mantine/core';
import style from './header.module.scss';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useAuth } from '../../redux/slice/authSlice';
import { useAppselector } from '../../hooks/useAppSelector';
import { Link } from 'react-router-dom';

export const Header = () => {
  const status = useOnlineStatus()
  const user = useAppselector(useAuth)
  console.log(user);
  
  

  return (
    <header className={style.header}>
      <div className='flex max-w-[800px] w-full justify-between items-center'>
      <Link className='no-underline text-current' to='/' >
      <div className="flex cursor-pointer gap-6 items-center">
        <div className={style.logo_bg}></div>
        <h1 className=" text-xl font-medium">ВКОНТАКТЕ 2.0</h1>
      </div>
      </Link>
      <Input disabled={!user} className=' bg-[#424242] rounded-md !w-[500px]' variant="filled" placeholder="Поиск" />
      </div>
      <Indicator color={status === 'pending' ? 'blue' : status === 'online' ? 'green' : 'red'} className=" cursor-pointer" size={17} offset={7} withBorder processing>
        <Avatar
          size={45}
          radius="xl"
        />
      </Indicator>
    </header>
  );
};
