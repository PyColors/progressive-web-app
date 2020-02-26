import { Action, action, Thunk, thunk } from 'easy-peasy';

import { JsonFreeApi } from '../interfaces/json-free-api.interface';
import { InjectionModel } from './injection.model';
import { StoreModel } from './store.model';

export interface JsonFreeApiModel {
  isLoading: boolean;
  setIsLoading: Action<JsonFreeApiModel, boolean>;
  items: JsonFreeApi[];
  setItems: Action<JsonFreeApiModel, JsonFreeApi[]>;
  fetch: Thunk<JsonFreeApiModel, void, InjectionModel, StoreModel>;
  reset: Action<JsonFreeApiModel, void>;
}

export const defaultItem = [];
export const loadingStatus = false;

export const jsonFreeApiModel: JsonFreeApiModel = {
  items: defaultItem,
  isLoading: loadingStatus,

  setIsLoading: action(state => {
    state.isLoading = !state.isLoading;
  }),

  setItems: action((state, items) => {
    state.items = items;
  }),

  reset: action(state => {
    state.items = defaultItem;
  }),

  fetch: thunk(async (actions, _void, { injections: { jsonFreeApiService } }) => {
    actions.setIsLoading(loadingStatus);
    try {
      const { data } = await jsonFreeApiService.findAll();
      actions.setItems(data);
    } catch (e) {
      console.log(e);
    }
    actions.setIsLoading(loadingStatus);
  }),
};
