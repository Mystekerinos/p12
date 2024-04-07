class SessionData {
  /**
   * @type {string}
   */
  day;
  /**
   * @type {number}
   */
  kilogram;
  /**
   * @type {number}
   */
  calories;
  /**
   * @type {number}
   */
  sessionLength;

  /**
   * Create a session data object.
   * @constructor
   * @param {Object} session
   */
  constructor(session) {
    this.day = session.day;
    this.sessionLength = session.sessionLength;
  }
}
/**
 * Class representing user activity data.
 * @class
 */
export default class UserActivityData {
  /**
   * @type {SessionData}
   */
  sessions;
  /**
   * Create a user activity data object.
   * @constructor
   * @param {Object} data - The activity data of the user
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => new SessionData(session));
  }
}
