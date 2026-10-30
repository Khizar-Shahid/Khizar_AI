import { createClient, type QueryParams } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to support dynamic ISR and immediate cache invalidation
});
