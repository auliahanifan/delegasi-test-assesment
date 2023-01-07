export type DelegasiResponseDto = {
  label: string;
  value: number;
  month: string;
  details?: Array<DelegasiResponseDto>;
  children?: Array<DelegasiResponseDto>;
};
