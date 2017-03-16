enum LOGLEVEL {
  DEBUG = 1, INFO, WARN, ERROR 
}

export const Logger = (function Logger() {

  const currentLevel: LOGLEVEL = LOGLEVEL.DEBUG; 

  //TODO take into account loggerName
  function _log(appender, loggerName, level, msg) {
    if (currentLevel > level) {
      return;
    }
    const appenders = {
      'console': console.log,
      'alert': window.alert
    };
    appenders[appender].call(this, msg);

    //To make it K-combinator instead of returning void
    return msg;
  }

  const log = _log.bind(this, 'console');

  return {
    debug: log.bind(this, null, LOGLEVEL.DEBUG),
    info: log.bind(this, null, LOGLEVEL.INFO),
    warn: log.bind(this, null, LOGLEVEL.WARN),
    error: log.bind(this, null, LOGLEVEL.ERROR),
    alert: _log.bind(this, 'alert', null, LOGLEVEL.ERROR)
  };
}) ();
