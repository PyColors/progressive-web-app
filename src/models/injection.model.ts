import * as jsonFreeApiService from '../services/json-free-api.service';

export interface InjectionModel {
  jsonFreeApiService: typeof jsonFreeApiService;
}

export const injectionModel: InjectionModel = {
  jsonFreeApiService,
};
