export const parseAction = (action: string) => {
  const elements = action.split(' ');
  const actionType = elements[0];
  const coordinates = elements.slice(1).map((item) => +item);
  return { actionType, coordinates };
};
