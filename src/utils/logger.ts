type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogMessage = string | number | boolean | null | undefined | Record<string, unknown> | unknown;

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  // eslint-disable-next-line no-console
  /* eslint-disable no-console */
  private consoleMap = {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  } as const;
  /* eslint-enable no-console */

  private formatError(error: unknown): string {
    if (error instanceof Error) {
      return `${error.name}: ${error.message}${error.stack ? `\n${error.stack}` : ''}`;
    }
    return String(error);
  }

  private formatMessage(message: LogMessage): unknown {
    if (message instanceof Error) {
      return this.formatError(message);
    }
    return message;
  }

  private log(level: LogLevel, ...messages: LogMessage[]) {
    if (this.isProduction && level === 'debug') {
      return; // Skip debug logs in production
    }

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    const formattedMessages = messages.map((msg) => this.formatMessage(msg));

    // eslint-disable-next-line no-console
    this.consoleMap[level](prefix, ...formattedMessages);
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
