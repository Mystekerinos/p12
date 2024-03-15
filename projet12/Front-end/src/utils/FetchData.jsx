/**
 * Fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise} - Une promesse contenant les données récupérées.
 * @throws {Error} - Si une erreur survient lors du processus de récupération.
 */
export async function fetchData(url) {
  try {
    const response = await fetch("http://localhost:3000" + url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des données depuis ${url}: ${error.message}`
    );
  }
}
