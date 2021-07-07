import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
// import NetworkManager from './NetworkManager';

class ChatKit {
  constructor(userId) {
    if (!!ChatKit.instance) {
      return ChatKit.instance;
    }

    this._userId = userId;
    this._chatManager = this.initializeChatManager();
    this._currentUser = null;

    ChatKit.instance = this;
    return this;
  }

  initializeChatManager = () => {
    return new ChatManager({
      instanceLocator: process.env.REACT_APP_CHAT_INSTANCE_LOCATOR,
      userId: String(this.userId),
      tokenProvider: this.createTokenProvider(),
      logger: {
        error: console.error,
        warn: console.log,
        info: () => {},
        debug: () => {},
        verbose: () => {},
      },
    });
  };

  createTokenProvider = () => {
    return new TokenProvider({
      url: process.env.REACT_APP_CHAT_TOKEN_PROVIDER,
    });
  };

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get chatManager() {
    return this._chatManager;
  }

  set chatManager(value) {
    this._chatManager = value;
  }

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(value) {
    this._currentUser = value;
  }
}

export default ChatKit;
