(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;
        vm.sortWidget = sortWidget;

        function init() {
            WidgetService
                .findWidgetsByPageId(vm.pageId)
                .then(
                    function(response){
                        vm.widgets = response.data;
                    }
                )
        }
        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }

        function sortWidget(start, end){
            WidgetService
                .sortWidget(vm.pageId, start, end)
                .then(
                    function(response){
                    },
                    function(error){
                        vm.error = error;
                    }
                )
        }
    }
})();