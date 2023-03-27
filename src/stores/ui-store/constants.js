import { types } from "mobx-state-tree";

const LoadingModel = types.model('loading', {
  home: types.boolean,
  banner: types.boolean,
});

const DEFAULT_LOADING = {
  banner: false,
  home: false,
}

const DEFAULT_UI_STORE = {
  loading: DEFAULT_LOADING,
};

export { DEFAULT_UI_STORE, LoadingModel };
