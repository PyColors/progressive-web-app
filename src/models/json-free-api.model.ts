import { Action, action, Thunk, thunk } from 'easy-peasy';

import { LegalExpert } from '../interfaces/json-free-api.interface';
import { InjectionModel } from './injection.model';
import { StoreModel } from './store.model';

export interface JsonFreeApiModel {
  items: LegalExpert[];
  setItems: Action<JsonFreeApiModel, LegalExpert[]>;
  fetch: Thunk<JsonFreeApiModel, void, InjectionModel, StoreModel>;
  reset: Action<JsonFreeApiModel, void>;
}

export const defaultItem = [];

export const jsonFreeApiModel: JsonFreeApiModel = {
  items: defaultItem,
  setItems: action((state, items) => {
    state.items = items;
  }),
  reset: action(state => {
    state.items = defaultItem;
  }),
  fetch: thunk(async (actions, _void, { injections: { legalExpertService } }) => {
    try {
      const { data } = await legalExpertService.findAll();
      actions.setItems(data);
    } catch (e) {
      console.log(e);
    }
  }),
};
