export type TUsers = {
  image: string;
  name: string;
  userInfo: string;
  id: number;
  onEdit?: VoidFunction;
  onRemove?: VoidFunction;
};

export type TModal = {
  onClose: VoidFunction;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  imgInp: (e: string) => void;
  nameInp: (e: string) => void;
  infoInp: (e: string) => void;
};
