import { Injectable } from "@angular/core";

export enum LOGLEVEL {
  DEBUG = 1, INFO, WARNING, ERROR 
}

@Injectable()
export class Logger {

  currentLevel: LOGLEVEL = LOGLEVEL.DEBUG; 

  constructor(level: LOGLEVEL) {
    this.currentLevel = level;
  }

  log = this._log.bind(this, 'console');
  debug = this.log.bind(this, null, LOGLEVEL.DEBUG);
  info = this.log.bind(this, null, LOGLEVEL.INFO);
  warning = this.log.bind(this, null, LOGLEVEL.WARNING);
  error = this.log.bind(this, null, LOGLEVEL.ERROR);

  alertLog = this._log.bind(this, 'alert');
  alertDebug = this.alertLog.bind(this, null, LOGLEVEL.DEBUG);
  alertInfo = this.alertLog.bind(this, null, LOGLEVEL.INFO);
  alertWarning = this.alertLog.bind(this, null, LOGLEVEL.WARNING);
  alertError = this.alertLog.bind(this, null, LOGLEVEL.ERROR);

  //TODO take into account loggerName
  private _log(appender, loggerName, level, msg) {

    if (this.currentLevel > level) {
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
}
