(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, UserService){
       var vm = this;
        
        vm.register = function(username, password, passwordVerify){
            var user = { "username" : username, "password"  : password };
            user = UserService.createUser(user);
            if(user){
                $location.url("/profile/"+ user._id);
            }else{
                vm.error = "Unable to Register. Try a different Username";
            }
        }
    }
})();
