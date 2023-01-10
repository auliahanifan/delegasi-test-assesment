export type InsightDto = {
  status: string;
  message: string;
  messageHtml: string;
  data?: {
    label?: string;
    value?: string;
  };
};
