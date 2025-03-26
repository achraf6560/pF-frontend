export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };
  