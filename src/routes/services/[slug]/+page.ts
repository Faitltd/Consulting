import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { services } from '$lib/content/services';

export const load: PageLoad = ({ params }) => {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    throw error(404, 'Service not found');
  }

  return { service };
};
