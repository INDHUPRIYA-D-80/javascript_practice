//Using Promise
function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });

// Program for winning or losing the toss
function istossed() {
      return Math.random() < 1; // always gives for winning
      //return Math.random() >1; //always gives for losing
    }
    function tossing() {
      return new Promise(function (win, loss) {
        setTimeout(function () {
          if (istossed()) {
            win("Hurray!...You won the task and What's your choice whether to Bat or to Bowl");
          } else {
            loss("Ufff.... you loss the toss....Better luck next time");
          }
        }, 1000);
      });
    }
    tossing()
      .then(function (message) {
        console.log(message);
      })
      .catch(function (message) {
        console.log(message);
      });