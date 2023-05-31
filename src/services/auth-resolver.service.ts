class AuthResponseResolver {
  private connection: Promise<any> | null;
  private dispatch: Function;

  constructor() {
    this.connection = null;
    this.dispatch = () => {};
  }

  private setConnection = () => {
    this.connection = null;
  };

  private processToken = async (newDispatch: Function) => {
    if (!this.connection) {
      this.setDispatch(newDispatch);
    }

    return this.connection;
  };

  private setDispatch = (newDispatch: Function) => {
    this.dispatch = newDispatch;
  };

  getToken = async (newDispatch: Function) => {
    const resolvedToken = await this.processToken(newDispatch);

    this.setConnection();

    return resolvedToken;
  };
}

export const authResolver = new AuthResponseResolver();
