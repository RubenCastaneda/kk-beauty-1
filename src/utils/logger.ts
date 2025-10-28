type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogMessage = string | number | boolean | null | undefined | object;

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  // eslint-disable-next-line no-console
  private consoleMap = {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  } as const;

  private log(level: LogLevel, ...messages: LogMessage[]) {
    if (this.isProduction && level === 'debug') {
      return; // Skip debug logs in production
    }

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    // eslint-disable-next-line no-console
    this.consoleMap[level](prefix, ...messages);
  }

  debug(...messages: LogMessage[]) {
    this.log('debug', ...messages);
  }

  info(...messages: LogMessage[]) {
    this.log('info', ...messages);
  }

  warn(...messages: LogMessage[]) {
    this.log('warn', ...messages);
  }

  error(...messages: LogMessage[]) {
    this.log('error', ...messages);
  }
}

const logger = new Logger();
export default logger;
