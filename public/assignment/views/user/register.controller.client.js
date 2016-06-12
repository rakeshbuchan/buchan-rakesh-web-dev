(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, UserService){
       var vm = this;
        
        vm.register = register;
        
        function register(username, password, passwordVerify){
            if(username != null && password != null && passwordVerify != null) {
                if(password == passwordVerify){
                    var user = {"username": username, "password": password};
                    UserService
                        .createUser(user)
                        .then(
                            function(response){
                                var user = response.data;
                                if (user) {
                                    $location.url("/user/" + user._id);
                                } else {
                                    vm.error = "Unable to Register. Try a different Username";
                                }
                            }
                        )
                }
                else{
                    vm.error = "Both passwords must be same";
                }

            }
        }
    }
})();
