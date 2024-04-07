/**
 * Class representing user activity data.
 * @class
 */
export default class UserActivityData {
  /**
   * Create a user activity data object.
   * @constructor
   * @param {Object} data - The activity data of the user
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
