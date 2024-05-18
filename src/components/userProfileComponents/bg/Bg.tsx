import { Skeleton } from "@mantine/core"

export const Bg = ({isLoading}:{isLoading:boolean}) => {
  return (
    <>
    {isLoading ? 
  <div className="w-full h-[260px] bg-[#333] rounded-2xl"></div> : <Skeleton width={`${100}%`} height={260} className="!rounded-2xl" visible={true} />
    }
    </>
  )
}
