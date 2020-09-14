import { ADDRESS, PORT, PATH, REGION } from "./constant";
import getURL from "./utils";

export const url = getURL(ADDRESS, PORT, PATH);
export const region = REGION;