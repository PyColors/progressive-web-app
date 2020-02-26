import Axios from '../config/axios';
import { API_BASE_URL } from '../constants/constants';
import { LegalExpertsResponse } from '../interfaces/api/json-free-api-response.interface';

export const findAll = async (): Promise<LegalExpertsResponse> => {
  const data = await Axios().get(API_BASE_URL);
  return data;
};
