// lib/sanity.js
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'my-id',
  apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',

  /**
   * OPTIONAL config to enable authentication with custom token
   * You might need this if you host the preview on a different url than Sanity Studio
   */
  // token: '<sanity access token>',
  // EventSource: /* provide your own event source implementation. Required in browsers to support the above token parameter. */
};

export const sanityClient = createClient(config);
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: any): any => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
// export const useCurrentUser = createCurrentUserHook(config);
