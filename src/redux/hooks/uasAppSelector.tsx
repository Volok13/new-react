import {useSelector} from "react-redux";
import {store} from "../store.ts";

export const useAppSector = useSelector.withTypes<ReturnType<typeof store.getState>>()