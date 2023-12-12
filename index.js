// define API source
 const baseApiUrl = '/api/v1/pets'

// create function to fetch data from API.
const getAllPets = async () => {
    // place try/catch for proper error-handling. (just incase)
    try {
      // Call api to get ALL pets
      const allPets = await response.getAllPets();
      // Return the list of ALL pets
      return allPets;
      // Handle error
    } catch (error) {
      console.error("Error fetching all pets:", error);
    }
  }