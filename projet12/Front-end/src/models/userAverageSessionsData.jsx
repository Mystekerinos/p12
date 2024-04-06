/**
 * Class representing user average sessions data.
 * @class
 */
export default class UserAverageSessionsData {
  /**
   * Create a user average sessions data object.
   * @constructor
   * @param {number} userId - The ID of the user.
   * @param {Array} sessions - The array of average sessions.
   */
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
