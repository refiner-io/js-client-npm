declare global {
  interface Window {
    _refinerQueue: Array<unknown[]>;
    _refiner: (...args: unknown[]) => Promise<void>;
  }
}

export = window._refiner;
