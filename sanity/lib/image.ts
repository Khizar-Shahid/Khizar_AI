import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = imageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export function urlForImage(source: Image | any) {
  return imageBuilder.image(source).auto('format').fit('max');
}
