/**
 * Class representing user data.
 * @class
 */
export default class UserData {
  /**
   * Create a user data object.
   * @constructor
   * @param {Object} data - The user's information.
   */
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.keyData = data.keyData;
    this.todayScore = data.todayScore;
  }
}
