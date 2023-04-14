import { Get } from "../httpService";

export function getAllFiles() {
  return Get("files/data", {});
}
