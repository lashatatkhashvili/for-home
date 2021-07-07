class OneSignal {
  static OneSignal = window.OneSignal || [];

  static initOneSignal() {
    this.OneSignal.push(() => {
      this.OneSignal.init({
        appId: 'b0fd2184-c556-462d-b07d-8ab7664d87ea',
        notifyButton: {
          enable: false,
        },
      });

      this.OneSignal.showNativePrompt();
    });
  }
}

export default OneSignal;
