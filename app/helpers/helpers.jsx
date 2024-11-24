
export const lastValueFromPathName = (pathName) => {
   return pathName && pathName.split("/").pop();
}