/**
 * Fonction asynchrone pour récupérer les données utilisateur depuis l'API.
 * @param {number} userId - L'ID de l'utilisateur pour lequel récupérer les données.
 * @returns {Promise<{userData: Object, performanceData: Object, activityData: Object, averageSessions: Object}>} Une promesse contenant les données utilisateur.
 * @throws {Error} Si une erreur survient lors du processus de récupération des données.
 */

export async function apiServiceFetchData(userId) {
  try {
    // Récupération des données utilisateur
    const userResponse = await fetch(`http://localhost:3000/user/${userId}`);
    const activityResponse = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    const avgSessionResponse = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const performanceResponse = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    // Extraction des données JSON et de leurs attributs "data"
    const userData = (await userResponse.json()).data;
    const activityData = (await activityResponse.json()).data;
    const averageSessions = (await avgSessionResponse.json()).data;
    const performanceData = (await performanceResponse.json()).data;

    // Retour des données utilisateur
    return { userData, performanceData, activityData, averageSessions };
  } catch (error) {
    // En cas d'erreur, renvoie une erreur avec un message approprié
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
