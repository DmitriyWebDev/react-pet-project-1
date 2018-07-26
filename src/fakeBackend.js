const fakeBackend = (function () {

  console.log( 'Hello, I am your fake Backend :) I use local storage as a database for the creating users accounts (etc...), i am really cool)) P.s: Sorry for that.' );

  return {

    createUserAccount : function ( userData ) {
      // get user data
      // check local storage (database) on user existence
      // create user or not
    }

  }


})();

export default fakeBackend;
