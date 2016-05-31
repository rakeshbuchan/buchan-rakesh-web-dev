(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($sce , $location , $routeParams , WidgetService){
        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;
        vm.createHeader = createHeader;
        vm.createImage = createImage;
        vm.createYoutube = createYoutube;

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }

        function createHeader(){
            var newWidget = {
                _id: (new Date()).getTime()+"",
                pageId: vm.pageId,
                widgetType: "HEADER"
            };
            if(WidgetService.createWidget(vm.pageId,newWidget)) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
            }
            else {
                vm.error = "Unable to create widget";
            }
        }

        function createImage(){
            var newWidget = {
                _id: (new Date()).getTime()+"",
                pageId: vm.pageId,
                widgetType: "IMAGE"
            };
            if(WidgetService.createWidget(vm.pageId,newWidget)) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
            }
            else {
                vm.error = "Unable to create widget";
            }
        }

        function createYoutube(){
            var newWidget = {
                _id: (new Date()).getTime()+"",
                pageId: vm.pageId,
                widgetType: "YOUTUBE"
            };
            if(WidgetService.createWidget(vm.pageId,newWidget)) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
            }
            else {
                vm.error = "Unable to create widget";
            }
        }
    }
})();