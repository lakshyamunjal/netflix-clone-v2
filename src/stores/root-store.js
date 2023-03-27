import { types } from "mobx-state-tree";

import domain from "./domain-store/domain-store";
import ui from "./ui-store/ui-store";

import { DEFAULT_UI_STORE } from "./ui-store/constants";
import { DEFAULT_DOMAIN_STORE } from "./domain-store/constants";

const rootStore = types
  .model({
    ui: ui,
    domain: domain,
  })
  .create({
    ui: DEFAULT_UI_STORE,
    domain: DEFAULT_DOMAIN_STORE,
  });

export { rootStore };
