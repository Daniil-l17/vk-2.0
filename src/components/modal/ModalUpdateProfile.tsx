import { Avatar, Button, Indicator, Input, Modal } from '@mantine/core';
import { UserInfo } from '../../types/user';
import { Dispatch, FC, SetStateAction } from 'react';

const avatar = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
] as const;

interface dto {
  info: UserInfo | undefined;
  data: UserInfo | undefined;
  loading: boolean;
  setInfo: Dispatch<SetStateAction<UserInfo | undefined>>
  close: () => void;
  updateProfile: () => void;
  opened: boolean;
  updateInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalUpdateProfile: FC<dto> = ({
  data,
  info,
  loading,
  opened,
  updateInfo,
  setInfo,
  updateProfile,
  close,
}) => {
  return (
    <Modal opened={opened} size={'lg'} onClose={close} title="Изменить профиль" centered>
      <div className="flex flex-col gap-4">
        <Input onChange={updateInfo} name="email" variant="filled" value={info?.email} />
        <div>
        <Input onChange={updateInfo} name="name" variant="filled" value={info?.name} />
        <p className=' text-sm mt-1 ml-[1px]'>Предыдущее имя - {info?.lastname}</p>
        </div>
        <div className="flex flex-wrap justify-start gap-7">
          {avatar.map((item, index) => {
            if (item === data?.avatar) {
              return (
                <Indicator key={index} offset={5} inline label="Текущая" size={14}>
                  <Avatar size="lg" radius="sm" src={item} />
                </Indicator>
              );
            }
            return (
              <Avatar
                key={index}
                //@ts-ignore
                onClick={() => setInfo(prev => ({ ...prev, avatar: item }))}
                className=" cursor-pointer"
                size="lg"
                radius="sm"
                src={item}
              />
            );
          })}
        </div>
        <Button
          onClick={() => {
            updateProfile();
          }}
          disabled={loading}
          variant="filled">
          Изменить
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdateProfile;
