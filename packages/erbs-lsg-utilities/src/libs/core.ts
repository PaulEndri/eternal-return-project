export abstract class Core {
  public log = {
    info: (...args) =>
      console.log(`[${this.constructor.name}]${args[0]}`, ...args.slice(1)),
    warn: (...args) =>
      console.warn(`[${this.constructor.name}]${args[0]}`, ...args.slice(1)),
    error: (...args) =>
      console.error(`[${this.constructor.name}]${args[0]}`, ...args.slice(1))
  };
}
