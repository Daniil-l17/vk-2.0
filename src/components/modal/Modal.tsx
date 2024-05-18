import { Button, Input, Modal } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppselector } from '../../hooks/useAppSelector';

const ModalAuth = ({
  close,
  fun,
  opened,
  isLoading,
  create,
}: {
  close: () => void;
  fun: (e: React.ChangeEvent<HTMLInputElement>) => void;
  opened: boolean;
  isLoading: boolean;
  create: () => void;
}) => {

    const {user} = useAppselector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoading){
      if(user){
        navigate(`/profile/${user.id}`)
      } 
    }
  },[user])

  return (
    <>
      <Modal size={'lg'} opened={opened} onClose={close} title="Авторизация" centered>
        <div className="flex flex-col gap-4">
          <Input onChange={fun} name="email" variant="filled" placeholder="email" />
          <Input onChange={fun} name="password" type='password' variant="filled" placeholder="password" />
          <Input onChange={fun} name="name" variant="filled" placeholder="name" />
          <Button onClick={() => {create()}} disabled={isLoading} className="" variant="filled">
            Авторизоваться
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAuth;
