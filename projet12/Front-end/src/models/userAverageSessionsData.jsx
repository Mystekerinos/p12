class SessionData {
  /**
   * @type {number}
   */
  day;

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
 * Class representing user average sessions data.
 * @class
 */
export default class UserAverageSessionsData {
  /**
   * @type {SessionData}
   */
  sessions;

  /**
   * Create a user average sessions data object.
   * @constructor
   * @param {Object} data - The average sessions data of the user
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => new SessionData(session));
  }
}
