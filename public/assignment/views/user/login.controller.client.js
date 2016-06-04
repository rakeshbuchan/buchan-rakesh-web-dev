(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController ($location, UserService){
        var vm = this;
        
        vm.login = login;
        
        function login(username, password){
            if(username != null && password != null){
                UserService
                    .findUserByCredentials(username, password)
                    .then(
                        function(response) {
                            var user = response.data;
                            if (user._id) {
                                $location.url("/user/" + user._id);
                            }
                            else{
                                vm.error = "User not found"; 
                            }
                        },
                        function(error) {
                            vm.error = "User not found";
                        }
                    )
            }else{
                vm.error = "Please enter both the inputs";
            }
        }
    }
})();
