const originalInfo = console.info;
const originalWarn = console.warn;
const originalError = console.error;

export const customizeConsoleLog = () => {
  console.info = function (...args: any[]) {
    originalInfo(`\x1b[36m${args.join(' ')}\x1b[0m`);
  };

  console.warn = function (...args: any[]) {
    originalWarn(`\x1b[33m${args.join(' ')}\x1b[0m`);
  };

  console.error = function (...args: any[]) {
    originalError(`\x1b[31m${args.join(' ')}\x1b[0m`);
  };
};
