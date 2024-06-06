export type TUsers = {
  image: string;
  name: string;
  userInfo: string;
  id: number;
  onEdit?: VoidFunction;
  onRemove?: VoidFunction;
};
