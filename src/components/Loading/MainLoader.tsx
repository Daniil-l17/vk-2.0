import { Loader } from '@mantine/core';

export const MainLoader = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <Loader color="blue" />
    </div>
  );
};
