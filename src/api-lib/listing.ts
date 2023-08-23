//imports APICALL function and URL
import { apiCall } from "./apiCall.ts";
import { URL } from "./apiCall.ts";

export interface Listing {
  title: string;
  id: number;
  description: string;
}

export interface ListingAPI {
  // Retrieves a list of listings
  getListings(): Promise<Listing[]>;

  // Retrieves a single listing by ID
  getListing(id: number): Promise<Listing | null>;

  // Creates a new listing
  createListing(newListing: Listing): Promise<Listing>;

  // Updates an existing listing by ID
  updateListing(id: number, updatedListing: Listing): Promise<Listing | null>;

  // Deletes a listing by ID
  deleteListing(id: number): Promise<void>;
}

export class ListingAPIService implements ListingAPI {
  async getListings(): Promise<Listing[]> {
    try {
      const response = await apiCall(`${URL}products`, "GET", null);
      return response.products as Listing[];
    } catch (e) {
      throw e;
    }
  }

  async getListing(id: number): Promise<Listing | null> {
    try {
      const response = await apiCall(`${URL}products/${id}`, "GET", null);
      return response as Listing;
    } catch (e) {
      throw e;
    }
  }

  async createListing(newListing: Listing): Promise<Listing> {
    try {
      const response = await apiCall(`${URL}products`, "POST", newListing);
      return response as Listing;
    } catch (e) {
      throw e;
    }
  }

  async updateListing(
    id: number,
    updatedListing: Listing
  ): Promise<Listing | null> {
    try {
      const response = await apiCall(
        `${URL}products/${id}`,
        "PUT",
        updatedListing
      );
      return response as Listing;
    } catch (e) {
      throw e;
    }
  }

  async deleteListing(id: number): Promise<void> {
    try {
      await apiCall(`${URL}products/${id}`, "DELETE", null);
    } catch (e) {
      throw e;
    }
  }
}
