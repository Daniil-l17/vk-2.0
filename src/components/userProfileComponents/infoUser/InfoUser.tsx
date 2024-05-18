import { Skeleton } from '@mantine/core';
import { UserInfo } from '../../../types/user';

export const InfoUser = ({ isLoading,data }: { isLoading: boolean,data:UserInfo | undefined }) => {
  return (
    <>
      {isLoading ? (
        <>
          <h2>{data?.name}</h2>
          <p> Укажите информацию о себе</p>
        </>
      ) : (
        <div className=" mt-4 flex gap-2 flex-col">
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </div>
      )}
    </>
  );
};
