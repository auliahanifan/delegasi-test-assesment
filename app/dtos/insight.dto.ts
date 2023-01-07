export type InsightDto = {
  status: string;
  message: string;
  data?: {
    label?: string;
    value?: string;
  };
};
