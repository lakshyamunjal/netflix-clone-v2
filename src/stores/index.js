import { createContext, useContext } from 'react';

import { rootStore } from './root-store';

const RootStoreContext = createContext(rootStore);

export function useStores(){
  const store = useContext(RootStoreContext);
  if(store === null){
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export const StoreProvider = RootStoreContext.Provider;