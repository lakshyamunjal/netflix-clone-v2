import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';

import { rootStore } from './root-store';

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);

export function useStores(){
  const store = useContext(RootStoreContext);
  if(store === null){
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export const StoreProvider = RootStoreContext.Provider;