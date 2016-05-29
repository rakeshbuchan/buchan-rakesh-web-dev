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
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();        
            
        function updatePage(name, title){
            var page = {"name" : name, "websiteId" : vm.websiteId};
            var status = PageService.updatePage(vm.pageId, page);
            if(true){
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }        

        function deletePage(pageId) {
            var result = PageService.deletePage(pageId);
            if(result) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }
    }
})();