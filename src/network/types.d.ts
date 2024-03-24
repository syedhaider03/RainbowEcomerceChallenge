interface ProductsAPIResponse<T = object | string> {
  products: T | T[];
  total: number;
  skip: number;
  limit: number;
}

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

declare module Auth {
  export type FORM_DATA = FormData;
  export type SignupPayload = {
    email: string;
    password: string;
    name: string;
    picture?: string;
  };

  export type LoginPayload = {
    email: string;
    password: string;
  };

  export type VerifyUser = {
    email: string;
    password: string;
    isLoginVerification?: boolean;
  };

  export type Response = {
    email: string;
    password: string;
    name: string;
    picture: string;
    id: string;
  };
  export interface SignupResponse extends APIResponse {
    Response: ResponseType;
  }
}

declare module ByteScale {
  export interface imageUploadResponse {
    files: File[];
  }

  export interface File {
    formDataFieldName: string;
    accountId: string;
    filePath: string;
    fileUrl: string;
  }
}

declare module Products {
  export interface Response {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  export interface QueryParams {
    limit?: number;
    skip?: number;
    select?: string;
    q?: string;
    category?: string;
  }
  export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  export type Category = string;
}
