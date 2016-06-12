(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, PageService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;

        vm.updatePage =  updatePage;
        vm.deletePage = deletePage;

        function init() {
            PageService
                .findPageById(vm.pageId)
                .then(
                    function(response){
                        vm.page = response.data;
                    }
                )
        }
        init();        
            
        function updatePage(name, title){
            if(name != "") {
                var page = {"name": name, "websiteId": vm.websiteId, "title": title};
                PageService
                    .updatePage(vm.pageId, page)
                    .then(
                        function(response){
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        },
                        function(error){
                            vm.error = error.data;
                        }
                    )
            }else{
                vm.error = "Page Name Required";
            }
        }        

        function deletePage(pageId) {
            PageService
                .deletePage(pageId)
                .then(
                    function(response){
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }
    }
})();