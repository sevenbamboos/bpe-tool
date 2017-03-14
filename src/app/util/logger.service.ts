enum LOGLEVEL {
  DEBUG = 1, INFO, WARN, ERROR 
}

// Log service that can be configured with console or window(alert)

export class Logger {

  // properties

  debug = this.log.bind(this, 'global', LOGLEVEL.DEBUG);
  info = this.log.bind(this, 'global', LOGLEVEL.INFO);
  warn = this.log.bind(this, 'global', LOGLEVEL.WARN);
  error = this.log.bind(this, 'global', LOGLEVEL.ERROR);

  private currentLevel: LOGLEVEL = LOGLEVEL.DEBUG; 
  private currentAppender: string;

  constructor(level: LOGLEVEL, appender: string) {
    this.currentLevel = level;
    this.currentAppender = appender;
  }

  // methods

  //TODO take into account loggerName
  private log(loggerName, level, msg) {

    if (this.currentLevel > level) {
      return;
    }

    const appenders = {
      'console': console.log,
      'window': window.alert
    };

    let prefix = `${new Date(Date.now()).toTimeString()} [${LOGLEVEL[level]}] `;

    appenders[this.currentAppender].call(this, prefix + msg);

    //To make it K-combinator instead of returning void
    return msg;
  }
}

const ConsoleLogger = new Logger(LOGLEVEL.INFO, 'console');
const WindowLogger = new Logger(LOGLEVEL.WARN, 'window');
const myLogger = ConsoleLogger;

export const debug = (msg) => myLogger.debug(msg);
export const info = (msg) => myLogger.info(msg);
export const warn = (msg) => myLogger.warn(msg);
export const error = (msg) => myLogger.error(msg);
