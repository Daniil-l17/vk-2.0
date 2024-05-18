import { Button, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { UserInfo } from '../../../types/user';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useUpdateProfileMutation } from '../../../redux/api/api';
import { MainLoader } from '../../Loading/MainLoader';

const ModalUpdateProfile = lazy(() => import('../../modal/ModalUpdateProfile'));

export const ButtonProfile = ({
  isLoading,
  isButoon,
  data,
}: {
  isLoading: boolean;
  isButoon: boolean;
  data: UserInfo | undefined;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [info, setInfo] = useState<UserInfo | undefined>(undefined);
  const [update, { isLoading: loading, data: result }] = useUpdateProfileMutation();

  useEffect(() => {
    setInfo(data);
  }, [data]);

  const updateProfile = () => {
    if (info) {
      update({ ...info, lastname: data?.name ? data.name : '' });
    }
  };

  useEffect(() => {
    if (result) {
      close();
    }
  }, [result]);

  const updateInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (info) {
      //@ts-ignore
      setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <>
      {isLoading ? (
        isButoon ? (
          <>
            {opened && (
              <Suspense fallback={<MainLoader />}>
                <ModalUpdateProfile
                setInfo={setInfo}
                  loading={loading}
                  updateProfile={updateProfile}
                  updateInfo={updateInfo}
                  opened={opened}
                  data={data}
                  close={close}
                  info={info}
                />
              </Suspense>
            )}
            <Button onClick={open} radius="md" color="#333333" variant="filled">
              Редактировать Профиль
            </Button>
          </>
        ) : (
          <Button radius="md" color="#333333" variant="filled">
            Добавить в друзья
          </Button>
        )
      ) : (
        <Skeleton height={25} mt={6} radius="xl" />
      )}
    </>
  );
};
