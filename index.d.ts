declare global {
  interface Window {
    _refinerQueue: Array<unknown[]>;
    _refiner: (...args: unknown[]) => void;
  }
}

export = window._refiner;