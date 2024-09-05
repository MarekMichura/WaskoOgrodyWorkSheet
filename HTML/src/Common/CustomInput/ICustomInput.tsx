export default interface ICustomInput {
  type: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  disabled: boolean;
  icon: () => JSX.Element;
  onBlur: (p: string | React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (p: string | React.ChangeEvent<HTMLInputElement>) => void;
}
