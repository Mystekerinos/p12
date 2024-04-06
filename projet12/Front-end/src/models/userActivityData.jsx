/**
 * Class representing user activity data.
 * @class
 */
export default class UserActivityData {
  /**
   * Create a user activity data object.
   * @constructor
   * @param {number} userId - The ID of the user.
   * @param {Array} sessions - The array of user sessions.
   */
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
