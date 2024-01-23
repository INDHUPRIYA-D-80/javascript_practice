//async Dummy example
async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                response("Example of async/await")
            }, 1000);
        });
    console.log(await promise)
}

asAw();


// Kind of our Instagram

async function likeCode() {
    return new Promise(
        function(likeValue) {
            setTimeout(function () {
                likeValue("This is my first post's Like")
            }, 1000);

        }
    );
}
// if you have to declare a variable then declare it before the function for accessing it over the various buttons
async function commentCode() {
    return new Promise(
        function (commentValue) {
            setTimeout(function () {
                commentValue("This is my first post's Comment ")
            }, 1000);

        }
    );
}
async function shareCode() {
    return new Promise(
        function (shareValue) {
            setTimeout(function () {
                shareValue("This is my first post's Share ")
            }, 1000);

        }
    );
}
async function saveCode() {
    return new Promise(
        function (saveValue) {
            setTimeout(function () {
                saveValue("This is my first post's Save ")
            }, 1000);

        }
    );
}
async function videoCode() {
    return new Promise(
        function (videoValue) {
            setTimeout(function () {
                videoValue("This is my first post's Video")
            }, 1000);

        }
    );
}
async function userCode() {
    return new Promise(
        function (userValue) {
            setTimeout(function () {
                userValue("This is my User Name")
            }, 1000);

        }
    );
}
async function post() {
    var post = new Promise(function (postResponse) {
        setTimeout(function () {
            postResponse("This is my first Post")
        }, 1000);
    });
    var [feed,user,comment,like,share,save,video]= await Promise.all([post,userCode(),commentCode(),likeCode(),shareCode(),saveCode(),videoCode()]);
    console.log(await user)
    console.log(await post)
    console.log(await like)
    console.log(await comment)
    console.log(await save)
    console.log(await video)
    console.log(await share)
}
post()