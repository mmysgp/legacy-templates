import dynamic from "template-utils/dynamic";
import legacy from "./legacy";

import tlds from "./tlds";

const DefaultCert = dynamic(() => import("./Default"));

const templates = {
  default: DefaultCert,
  ...legacy,
  ...tlds
};

export default templates;
