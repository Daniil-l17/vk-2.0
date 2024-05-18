import { Skeleton } from '@mantine/core';

export const ProfilePhoto = ({
  isLoading,
  photo,
}: {
  isLoading: boolean;
  photo: string | undefined;
}) => {
  return (
    <>
      {isLoading ? (
        <div
          style={{ backgroundImage: `url(${photo})` }}
          className="back absolute bottom-1 rounded-[50%] bg-[#4c4c4c] w-44 h-44"></div>
      ) : (
        <Skeleton
          color="#5333"
          className="!absolute !bottom-1 !rounded-[50%] !bg-[#4c4c4c] !w-44 !h-44"
          visible={true}
        />
      )}
    </>
  );
};
