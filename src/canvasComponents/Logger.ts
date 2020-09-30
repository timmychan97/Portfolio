export default class Logger {
  private verbose: boolean = false;

  constructor(verbose: boolean = false) {
    this.verbose = verbose;
  }

  log(message: string) {
    if (this.isVerbose())
      console.log(`[CANVAS] - ${message}`);
  }

  isVerbose() {
    return this.verbose;
  }

  setVerbose(value: boolean) {
    this.verbose = value;
  }
}