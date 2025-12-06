import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { resources } from '$lib/content/resources';

export const load: PageLoad = ({ params }) => {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    throw error(404, 'Resource not found');
  }

  return { resource };
};
