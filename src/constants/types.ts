export interface Article {
  title: string;
  id: number;
  description?: string;
  content: string;
  thumbnail?: string;
  source: string;
  created: string;
  updated: string;
}

export interface CallApiResponse<T> {
  loading: boolean;
  data: T;
  error?: string;
}
