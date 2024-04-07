/**
 * Class representing user average sessions data.
 * @class
 */
export default class UserAverageSessionsData {
  /**
   * Create a user average sessions data object.
   * @constructor
   * @param {Object} data - The average sessions data of the user
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
