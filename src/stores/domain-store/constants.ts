import { types } from "mobx-state-tree";

const Item = types.model("item", {
  backdropPath: types.maybeNull(types.string),
  posterPath: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  overview: types.maybeNull(types.string),
});

const Category = types.model("category", {
  name: types.maybeNull(types.string),
  list: types.maybeNull(types.array(Item)),
  page: types.maybeNull(types.number),
  type: types.optional(types.string, ""),
  hasMoreData: types.optional(types.boolean, true),
});

const HomeModel = types.model({
  banner: types.maybeNull(Item),
  categories: types.maybeNull(types.array(Category)),
});

const DEFAULT_DOMAIN_STORE = {
  home: {
    banner: {
      backdropPath: "",
      posterPath: "",
      name: "",
      overview: "",
    },
    categories: null,
  },
};

export { HomeModel, DEFAULT_DOMAIN_STORE };
