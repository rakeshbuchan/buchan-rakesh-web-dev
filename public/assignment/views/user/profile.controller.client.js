(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;

        var userId = $routeParams.userId;

        function init() {
            vm.user = UserService.findUserById(userId);
        }
        init();

        function updateUser(newUser) {
            UserService.updateUser(userId, newUser);
        }
    }

})();