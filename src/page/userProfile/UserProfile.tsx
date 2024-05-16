import { Avatar, Button, Skeleton } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useAppselector } from '../../hooks/useAppSelector';
import { useAuth } from '../../redux/slice/authSlice';

export default function UserProfile() {
  const { id } = useParams();
  const user = useAppselector(useAuth);
  console.log(id);

  return (
    <div className="w-full max-w-[1300px] px-4">
      <div className=" min-h-[350px] w-full rounded-2xl bg-[#222222]">
        {user ? (
          <div className="w-full h-[260px] bg-[#333] rounded-2xl"></div>
        ) : (
          <Skeleton width={`${100}%`} height={260} className="!rounded-2xl" visible={true} />
        )}
        <div className="flex justify-around items-center ">
          <div className="flex ml-8 w-full flex-1 ">
            <div className="w-[200px] relative ">
              {/*           <div className=" absolute bottom-1 rounded-[50%] bg-[#4c4c4c] w-44 h-44"></div>*/}
              <Skeleton
                color="#5333"
                className="!absolute !bottom-1 !rounded-[50%] !bg-[#4c4c4c] !w-44 !h-44"
                visible={true}
              />
            </div>
            <div className="flex w-full  max-w-[300px] mt-2 flex-col ">
              <div className=" mt-4 flex gap-2 flex-col">
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
              </div>
              {/*             <h2>Даниил Лукьянов</h2>
              <p> Укажите информацию о себе</p>*/}
            </div>
          </div>
          <div className=" w-52 mr-6">
            <Skeleton height={25} mt={6} radius="xl" />
            {/*           <Button radius="md" color="#333333" variant="filled">
              Редактировать Профиль
            </Button>*/}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 gap-6">
        <div className="flex flex-col gap-4 min-h-[100vh] w-2/3">
          <div className="bg-[#222222] min-h-[230px] rounded-2xl w-full"></div>
          <div className="bg-[#222222] min-h-[60px] rounded-2xl w-full">
            <h2>что у вас нового</h2>
          </div>
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <div className="bg-[#222222] flex items-center min-h-[80px] rounded-2xl ">
            <div className="flex ml-6 flex-col gap-2 w-full">
              <Skeleton height={10} mt={6} width="90%" radius="xl" />
              <Skeleton height={10} mt={6} width="85%" radius="xl" />
            </div>
          </div>
          <div className="bg-[#222222] min-h-[190px] rounded-2xl ">
            <h2>Друзья</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
