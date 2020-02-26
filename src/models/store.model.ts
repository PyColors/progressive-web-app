import { JsonFreeApiModel, jsonFreeApiModel } from './json-free-api.model';
import { LocaleModel, localeModel } from './locale.model';

export interface StoreModel {
  locale: LocaleModel;
  jsonFreeApi: JsonFreeApiModel;
}

export const storeModel: StoreModel = {
  locale: localeModel,
  jsonFreeApi: jsonFreeApiModel,
};
