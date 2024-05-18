import { useNavigate, useParams } from 'react-router-dom';
import { useAppselector } from '../../hooks/useAppSelector';
import { Bg } from '../../components/userProfileComponents/bg/Bg';
import { ProfilePhoto } from '../../components/userProfileComponents/profilePhoto/ProfilePhoto';
import { ProfilePrivate } from '../../components/userProfileComponents/profilePrivate/ProfilePrivate';
import { ButtonProfile } from '../../components/userProfileComponents/buttonProfile/ButtonProfile';
import { InfoUser } from '../../components/userProfileComponents/infoUser/InfoUser';
import { useGetProfileQuery } from '../../redux/api/api';
import { useEffect } from 'react';

export default function UserProfile() {
  const { id } = useParams();
  /*const user = useAppselector(useAuth);*/

  const navigate = useNavigate();

  const users = useAppselector(state => state.auth.user);

  const { data, isLoading, error } = useGetProfileQuery(+id!);

  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error]);

  return (
    <div className="w-full max-w-[1300px] px-4">
      <div className=" min-h-[350px] w-full rounded-2xl bg-[#222222]">
        <Bg isLoading={!isLoading} />
        <div className="flex justify-around items-center ">
          <div className="flex ml-8 w-full flex-1 ">
            <div className="w-[200px] relative ">
              <ProfilePhoto photo={data?.avatar} isLoading={!isLoading} />
            </div>
            <div className="flex w-full  max-w-[300px] mt-2 flex-col ">
              <InfoUser data={data} isLoading={!isLoading} />
            </div>
          </div>
          <div className=" w-52 mr-6">
            <ButtonProfile isButoon={data?.id === users?.id} isLoading={!isLoading} />
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
            <ProfilePrivate isLoading={!isLoading} />
          </div>
          <div className="bg-[#222222] min-h-[190px] rounded-2xl ">
            <h2>Друзья</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
