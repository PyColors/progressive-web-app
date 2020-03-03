import { createStore } from 'easy-peasy';

import { DEFAULT_LOCALE } from '../constants/constants';
import { defaultItem, localeModel } from './locale.model';

const item = 'en';

const store = createStore({
  locale: localeModel,
});

describe('UnassignedAssistanceRequest Model', () => {
  beforeEach(() => {
    store.getState().locale.item = defaultItem;
  });
  it('setItem action', async () => {
    expect(store.getState().locale.item).toEqual(DEFAULT_LOCALE);
    store.getActions().locale.setItem(item);
    expect(store.getState().locale.item).toEqual(item);
  });
});
