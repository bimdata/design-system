import path from "node:path";
import { fileURLToPath } from "node:url";
import { ComponentIndex } from "../src/component-index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../..");

const index = new ComponentIndex({ rootDir: projectRoot });
const buildInfo = await index.build();

const list = index.list({ limit: 5 });
const search = index.search({ query: "table", limit: 3 });
const details = index.details("BIMDataTable");
const byFeature = index.byFeature({ event: "update:modelValue", limit: 5 });

console.log(
  JSON.stringify(
    {
      buildInfo,
      listPreview: list.items,
      searchPreview: search.items,
      detailsPreview: details
        ? {
            name: details.name,
            props: details.props,
            emits: details.emits,
            slots: details.slots,
          }
        : null,
      byFeatureCount: byFeature.total,
    },
    null,
    2,
  ),
);
