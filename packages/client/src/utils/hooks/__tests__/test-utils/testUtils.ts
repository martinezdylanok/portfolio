const originalError = console.error;

const surpressConsoleError = () => {
   console.error = vi.fn();
};

const restoreConsoleError = () => {
   console.error = originalError;
};

export { surpressConsoleError, restoreConsoleError };
