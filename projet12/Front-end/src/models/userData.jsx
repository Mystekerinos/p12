/**
 * Class representing user information.
 * @class
 */
class UserInfos {
  /**
   * @type {string}
   */
  firstName;

  /**
   * @type {string}
   */
  lastName;

  /**
   * @type {number}
   */
  age;

  /**
   * Create a user information object.
   * @constructor
   * @param {Object} userInfo - The user's information.
   */
  constructor(userInfo) {
    this.firstName = userInfo.firstName;
    this.lastName = userInfo.lastName;
    this.age = userInfo.age;
  }
}

/**
 * Class representing user key data.
 * @class
 */
class UserKeyData {
  /**
   * @type {string}
   */
  calorieCount;

  /**
   * @type {number}
   */
  proteinCount;

  /**
   * @type {number}
   */
  carbohydrateCount;

  /**
   * @type {number}
   */
  lipidCount;

  /**
   * Create a user key data object.
   * @constructor
   * @param {Object} keyData - The user's key data.
   */
  constructor(keyData) {
    this.calorieCount = keyData.calorieCount.toLocaleString("en-US");
    this.proteinCount = keyData.proteinCount;
    this.carbohydrateCount = keyData.carbohydrateCount;
    this.lipidCount = keyData.lipidCount;
  }
}

/**
 * Class representing user data.
 * @class
 */
export default class UserData {
  /**
   * @type {UserInfos}
   */
  userInfos;

  /**
   * @type {string}
   */
  id;

  /**
   * @type {UserKeyData}
   */
  userKeyData;
  /**
   * @type {number}
   */
  userScore;

  /**
   * Create a user data object.
   * @constructor
   * @param {Object} data - The user's information.
   */

  constructor(data) {
    this.id = data.id;
    this.userInfos = new UserInfos(data.userInfos);
    this.userKeyData = new UserKeyData(data.keyData);
    this.userScore = data.todayScore ?? data.score;
  }
}
