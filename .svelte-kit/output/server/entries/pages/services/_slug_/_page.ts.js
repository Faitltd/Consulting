import { e as error } from "../../../../chunks/index.js";
import { s as services } from "../../../../chunks/services.js";
const load = ({ params }) => {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    throw error(404, "Service not found");
  }
  return { service };
};
export {
  load
};
