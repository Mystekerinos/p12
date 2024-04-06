export async function FetchData(userId) {
  try {
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

    const userData = (await userResponse.json()).data;
    const activityData = (await activityResponse.json()).data;
    const averageSessions = (await avgSessionResponse.json()).data;
    const performanceData = (await performanceResponse.json()).data;

    console.log(
      "userData, performanceData, activityData, averageSessions",
      userData,
      performanceData,
      activityData,
      averageSessions
    );

    return { userData, performanceData, activityData, averageSessions };
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
