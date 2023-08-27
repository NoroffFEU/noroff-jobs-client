import { apiCall, URL } from "./apiCall";

// This functions is to return objects contaninig different methods related to the company, like showing the companies, creating a new company, deleting and so on.
export function company () {
    return {

        // Creating a new company.
        createCompany: async (companyData: any) => {
            try {
                const newCompany = await apiCall(`${URL}/company`, 'POST', companyData);
                return newCompany;
                // Return the response from the api call.
            } catch (error) {
                throw error;
            }
        },

        // Get a list off all the companies.
        getCompanies: async () => {
            try {
                const companies = await apiCall(`${URL}/company`, 'GET', {});
                return companies;
                // Return the response from the api call.
            } catch (error) {
                throw error;
            }
        },

        // Update information on an existing company.
        updateCompany: async (companyId: string, companyData: any) => {
            try {
                const updateCompany = await apiCall(`${URL}/company/${companyId}`,'PUT', companyData);
                return updateCompany;
                // Return the response from the api call.
            } catch(error) {
                throw error;
            }
        },

        // Get details on a specific company.
        getCompanyDetails: async (companyId: string) => {
            try {
                const companyDetails = await apiCall(`${URL}/company/${companyId}`, 'GET', {});
                return companyDetails;
                // Return the response from the api call.
            } catch (error) {
                throw error;
            }
        },

        // Delete a company.
        deleteCompany: async (companyId: string) => {
            try {
                await apiCall(`${URL}/company/${companyId}`, 'DELETE', {});
            } catch (error) {
                throw error;
            }
        },

        // Add a admin to a company.
        addAdminToCompany: async (companyId: string, adminId: string) => {
            try {
                const result = await apiCall(`${URL}/company/admin/${companyId}`, 'PUT', { adminId });
                return result;
                // Return the response from the api call.
            } catch (error) {
                throw error;
            }
        },

        // Remove admin from a company.
        removeAdminFromCompany: async (companyId: string, adminId: string) => {
            try {
                const result = await apiCall(`${URL}/company/admin/${companyId}`, 'DELETE', { adminId });
                return result;
                // Return the response from the api call.
            } catch (error) {
                throw error;
            }
        },
    };
}

