//This is how you can call on the interface

import { ListingAPIService } from "./listing";
const listingApiService = new ListingAPIService();
export async function listingexample() {
  const listings = await listingApiService.getListings();
  console.log(listings);
  return listings;
}
