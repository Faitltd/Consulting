import { e as error } from "../../../../chunks/index.js";
import { c as caseStudies } from "../../../../chunks/case-studies.js";
const load = ({ params }) => {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) {
    throw error(404, "Case study not found");
  }
  return { study };
};
export {
  load
};
