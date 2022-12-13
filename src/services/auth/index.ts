import { API } from '../../api';
import axiosClient from '../../interceptor';
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from '../../models/api/user';

export const login = async (body: LoginRequest) => {
  const res = await axiosClient.post(API.USER.LOGIN, body);
  return res.data as LoginResponse;
};

export const signup = async (body: SignupRequest) => {
  const res = await axiosClient.post(API.USER.SIGNUP, body);
  return res.data as SignupResponse;
};
