/**
 * Class representing user performance data.
 * @class
 */
export default class UserPerformanceData {
  /**
   * Create a user performance data object.
   * @constructor
   
   * @param {Object} data - The performance data of the user.
   */
  constructor(data) {
    this.userId = data.userId;
    this.data = data.data;
  }
}
