export interface LoginSuccess {
  access_token: string;
  token_type: string;
}

export interface LoginFail {
  detail: LoginFailDetail[];
}

export interface LoginFailDetail {
  loc?: string[];
  msg?: string;
  type?: string;
}
