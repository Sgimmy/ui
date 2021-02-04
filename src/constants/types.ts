export interface Article {
  title: string;
  id: number;
  description?: string;
  content: string;
  thumbnail?: string;
  source: string;
  created: string;
  updated: string;
  tags: string[];
}

export interface Tags {
  tags: string[];
  selectedTag: string;
}

export interface CallApiResponse<T> {
  loading: boolean;
  data: T;
  error?: string;
}

export interface CallApiResponseSendArticle<T> extends CallApiResponse<T> {
  clearForm?: boolean;
  sending?: boolean;
}

export interface SendArticle {
  title?: string;
  description?: string;
  source: string;
  tags: string[];
}

export interface ChangeFormAddArticle {
  title?: string;
  description?: string;
  source?: string;
  tags?: string[];
}
