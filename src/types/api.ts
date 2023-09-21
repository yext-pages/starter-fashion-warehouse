export interface YextResponse<T> {
  meta: {
    uuid: string;
    errors?: any[];
  };
  response: T;
}

export interface YextContent<T> {
  docs?: T[];
  count: number;
  nextPageToken?: string;
}

export interface Review {
  $key: {
    locale: string;
    primary_key: string;
  };
  authorName: string;
  content: string;
  entity: {
    id: string;
  };
  rating: number;
  reviewDate: string;
  reviewId: number;
}
