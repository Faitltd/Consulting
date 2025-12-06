// @ts-nocheck
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { caseStudies } from '$lib/content/case-studies';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    throw error(404, 'Case study not found');
  }

  return { study };
};
