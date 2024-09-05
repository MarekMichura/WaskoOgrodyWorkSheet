export interface ICustomButton {
  value: string;
  disabled: boolean;
  onClick?: (p: string | React.MouseEvent<HTMLInputElement>) => void;
}
