import { types } from "mobx-state-tree";

import { LoadingModel } from "./constants";

const ui = types
  .model("ui", {
    loading: LoadingModel,
  })
  .actions((self) => {
    const handleLoader = (name, value) => {
      self.loading[name] = value;
    };

    return { handleLoader };
  });

export default ui;
