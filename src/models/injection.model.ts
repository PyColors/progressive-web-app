import * as legalExpertService from '../services/json-free-api.service';

export interface InjectionModel {
  legalExpertService: typeof legalExpertService;
}

export const injectionModel: InjectionModel = {
  legalExpertService,
};
