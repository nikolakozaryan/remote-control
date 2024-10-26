export interface IRegIn {
  name: string;
  password: string;
}

export interface IRegOut {
  name: string;
  index: number | string;
  error: boolean;
  errorText: string;
}
