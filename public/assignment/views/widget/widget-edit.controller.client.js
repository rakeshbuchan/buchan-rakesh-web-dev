(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($sce , $location , $routeParams , WidgetService) {
        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.widgetId = $routeParams.widgetId;

        vm.deleteWidget = deleteWidget;
        vm.updateWidget = updateWidget;

        function init() {
            WidgetService
                .findWidgetById(vm.widgetId)
                .then(
                    function(response){
                        vm.widget = response.data;
                    }
                )
        }
        init();

        function deleteWidget(){
            WidgetService
                .deleteWidget(vm.widgetId)
                .then(
                    function(response){
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
            }

        function updateWidget(newWidget){
            WidgetService
                .updateWidget(vm.widgetId,newWidget)
                .then(
                    function(response){
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");  
                    },
                    function(error){
                        vm.error = error.data;
                    }
                 )
        }
    }
})();