/* eslint-disable no-console */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type ConsoleMethod = 'log' | 'info' | 'warn' | 'error';

const isDebugEnabled = process.env.NODE_ENV !== 'production';

const log = (level: LogLevel, ...args: unknown[]) => {
  const method: ConsoleMethod = level === 'debug' ? 'log' : level;
  if (isDebugEnabled || method === 'error' || method === 'warn') {
    console[method](...args);
  }
};

export const logger = {
  debug: (...args: unknown[]) => log('debug', ...args),
  info: (...args: unknown[]) => log('info', ...args),
  warn: (...args: unknown[]) => log('warn', ...args),
  error: (...args: unknown[]) => log('error', ...args),
};

export default logger;
