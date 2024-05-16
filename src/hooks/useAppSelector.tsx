import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";


export const useAppselector:TypedUseSelectorHook<RootState> = useSelector