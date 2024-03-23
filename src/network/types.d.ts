interface APIResponse<T = object | string> {
  success: boolean;
  message: string;
  error_code: number;
  data: T | T[];
}
declare module Auth {
  export type SignupPayload = Pick<
    Auth.Index,
    | 'name'
    | 'email'
    | 'password'
    | 'role'
    | 'terms_and_conditions'
    | 'fcm_token'
  >;
  export type LoginPayload = Pick<
    Auth.Index,
    'email' | 'password' | 'fcm_token'
  >;

  export interface Response extends APIResponse {
    data: ResponseType;
  }
  export interface SignupResponse extends APIResponse {
    Response: ResponseType;
  }
}
