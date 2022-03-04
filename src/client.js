import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'f7prhl0s',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skWVm8U04PX6fV3VwUg1T3jiLzfBQo9nDU3HoqpU2Iv1zTdt15fry3EjRiLxkFWnO1Iw4Oq0Wd0tcYA7ZZQKYw7J5ZIaPNxejbnBrDn3oKWoYJBsil2tdqYzh4lhABPcAwx4GHt2m43pk6u7CD3w7HX0iWmxLPHg9ss1Xfgt0RrLBOrlACGm',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);