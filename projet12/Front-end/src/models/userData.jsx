/**
 * Class representing user data.
 * @class
 */
export default class UserData {
  /**
   * Create a user data object.
   * @constructor
   * @param {number} id - The ID of the user.
   * @param {Object} userInfos - The user's information.
   * @param {Object} keyData - The key data of the user.
   * @param {number} todayScore - The score of the user for today.
   */
  constructor(id, userInfos, keyData, todayScore) {
    this.id = id;
    this.userInfos = userInfos;
    this.keyData = keyData;
    this.todayScore = todayScore;
  }
}
