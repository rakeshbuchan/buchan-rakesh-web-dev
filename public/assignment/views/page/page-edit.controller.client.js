(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location, PageService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();

        vm.updatePage =  updatePage;
            
        function updatePage(name, title){
            var page = {"name" : name, "websiteId" : vm.websiteId};
            var status = PageService.updatePage(vm.pageId, page);
            if(true){
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }

        vm.deletePage = deletePage;

        function deletePage(pageId) {
            var result = PageService.deletePage(pageId);
            if(result) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }
    }
})();