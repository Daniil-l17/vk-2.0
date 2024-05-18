import { Skeleton } from '@mantine/core';
import { FaRegEye } from 'react-icons/fa';

export const ProfilePrivate = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex gap-6">
          <div>
            <h2 className=" text-lg">Сделать профиль закрытым</h2>
            <p className="text-sm">Ваш профиль будет скрыт от всех, кого нет у вас в друзьях</p>
          </div>
          <div className="flex justify-center items-center">
            <FaRegEye className=" cursor-pointer !text-2xl" />
          </div>
        </div>
      ) : (
        <div className="flex ml-6 flex-col gap-2 w-full">
          <Skeleton height={10} mt={6} width="90%" radius="xl" />
          <Skeleton height={10} mt={6} width="85%" radius="xl" />
        </div>
      )}
    </>
  );
};
