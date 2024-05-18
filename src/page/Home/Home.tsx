import { Avatar, Input } from '@mantine/core';

const Home = () => {
  return (
    <div className="flex w-full">
      <div className=" flex-1 px-6">
        <div className="w-full flex gap-6 px-4 py-2 min-h-14 rounded-xl bg-[#1b1b1b]">
          <Avatar
            size={40}
            radius="xl"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
          />
          <Input variant="unstyled" placeholder="Что у вас нового?" />
        </div>
      </div>
      <div className="w-full  max-w-[300px]">
        <div className="min-h-[600px] fixed top-[81px]  bg-[#1b1b1b] rounded-md w-full max-w-[300px] ">
          <h2>left</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
