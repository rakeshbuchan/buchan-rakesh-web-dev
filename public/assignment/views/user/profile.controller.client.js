(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location, $rootScope) {
        var vm = this;    

        var userId = $rootScope.currentUser._id;

        vm.updateUser = updateUser;
        vm.logout = logout;

        function init() {
            UserService
                .findUserById(userId)
                .then(
                    function(response){
                    vm.user =response.data;
                }
                )
        }
        init();

        function updateUser() {
            UserService
                .updateUser(userId, vm.user)
                .then(
                    function(response){
                    vm.success = "User successfully updated";
                },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }

        function logout() {
            UserService
                .logout()
                .then(
                    function(response) {
                        $location.url("/login");
                    },
                    function(error) {
                        $location.url("/login");
                    }
                );
        }
    }

})();