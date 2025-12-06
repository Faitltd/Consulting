// @ts-nocheck
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { resources } from '$lib/content/resources';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    throw error(404, 'Resource not found');
  }

  return { resource };
};
