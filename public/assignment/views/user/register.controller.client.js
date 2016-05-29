(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, UserService){
       var vm = this;
        
        vm.register = register;
        
        function register(username, password, passwordVerify){
            if(password != null && password === passwordVerify) {
                var user = {"username": username, "password": password};
                user = UserService.createUser(user);
                if (user) {
                    $location.url("/user/" + user._id);
                } else {
                    vm.error = "Unable to Register. Try a different Username";
                }
            }else{
                vm.error = "Please provide valid password";
            }
        }
    }
})();
