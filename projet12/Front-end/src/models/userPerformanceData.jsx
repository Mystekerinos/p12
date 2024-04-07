/**
 * Class representing user performance.
 * @class
 */
class UserPerformance {
  /**
   * @type {number}
   */
  value;

  /**
   * @type {number}
   */
  kind;

  /**
   * Create a user performance object.
   * @constructor
   * @param {Object} performance - The user's performance.
   */
  constructor(performance) {
    this.value = performance.value;
    this.kind = performance.kind;
  }
}

/**
 * Class representing user performance data.
 * @class
 */
export default class UserPerformanceData {
  /**
   * @type {UserPerformance}
   */
  data;

  /**
   * Create a user performance data object.
   * @constructor
   * @param {Object} data - The performance data of the user.
   */
  constructor(data) {
    this.userId = data.userId;
    this.data = data.data.map(
      (performance) => new UserPerformance(performance)
    );
  }
}
