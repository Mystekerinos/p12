/**
 * Class representing user performance data.
 * @class
 */
export default class UserPerformanceData {
  /**
   * Create a user performance data object.
   * @constructor
   * @param {number} userId - The ID of the user.
   * @param {Object} data - The performance data of the user.
   */
  constructor(userId, data) {
    this.userId = userId;
    this.data = data;
  }
}
