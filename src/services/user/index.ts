import { API } from '../../api';
import axiosClient from '../../interceptor';
import { UserType } from '../../models/user';

export const getProfile = async () => {
  const res = await axiosClient.get(API.USER.GETSELF);
  return res.data as UserType;
};
