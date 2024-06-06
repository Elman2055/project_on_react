export type TUsers = {
  image: string;
  name: string;
  userInfo: string;
  id: number;
  onEdit?: VoidFunction;
  onRemove?: VoidFunction;
};

export type TModal = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  imgInp: (e: string) => void;
  nameInp: (e: string) => void;
  infoInp: (e: string) => void;
};
