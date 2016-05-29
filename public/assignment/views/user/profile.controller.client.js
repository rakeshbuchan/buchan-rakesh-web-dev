(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;    

        var userId = $routeParams.userId;

        vm.updateUser = updateUser;

        function init() {
            vm.user = UserService.findUserById(userId);
        }
        init();

        function updateUser(newUser) {
            UserService.updateUser(userId, newUser);
        }
    }

})();