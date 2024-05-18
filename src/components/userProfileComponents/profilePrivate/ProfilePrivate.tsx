import { Skeleton } from '@mantine/core';


export const ProfilePrivate = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading ? (
        <p>hello</p>
      ) : (
        <div className="flex ml-6 flex-col gap-2 w-full">
          <Skeleton height={10} mt={6} width="90%" radius="xl" />
          <Skeleton height={10} mt={6} width="85%" radius="xl" />
        </div>
      )}
    </>
  );
};
