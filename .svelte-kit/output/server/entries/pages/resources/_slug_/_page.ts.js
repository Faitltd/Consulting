import { e as error } from "../../../../chunks/index.js";
import { r as resources } from "../../../../chunks/resources.js";
const load = ({ params }) => {
  const resource = resources.find((item) => item.slug === params.slug);
  if (!resource) {
    throw error(404, "Resource not found");
  }
  return { resource };
};
export {
  load
};
