import { Button, Skeleton } from '@mantine/core';

export const ButtonProfile = ({
  isLoading,
  isButoon,
}: {
  isLoading: boolean;
  isButoon: boolean;
}) => {
  return (
    /*    (
      <Button radius="md" color="#333333" variant="filled">
        Редактировать Профиль
      </Button>
    )*/

    <>
      {isLoading ? (
        isButoon ? (
          <Button radius="md" color="#333333" variant="filled">
            Редактировать Профиль
          </Button>
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
