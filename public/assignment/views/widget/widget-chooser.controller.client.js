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
        vm.createHTML = createHTML;

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
                type: "HEADING"
            };
            WidgetService
                .createWidget(vm.pageId,newWidget)
                .then(
                    function(response){
                        newWidget = response.data;
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                 )
        }

        function createHTML(){
            var newWidget = {
                type: "HTML"
            };
            WidgetService
                .createWidget(vm.pageId,newWidget)
                .then(
                    function(response){
                        newWidget = response.data;
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }

        function createImage(){
            var newWidget = {
                type: "IMAGE"
            };
            WidgetService
                .createWidget(vm.pageId,newWidget)
                .then(
                    function(response){
                        newWidget = response.data;
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }

        function createYoutube(){
            var newWidget = {
                type: "YOUTUBE"
            };
            WidgetService
                .createWidget(vm.pageId,newWidget)
                .then(
                    function(response){
                        newWidget = response.data;
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }
    }
})();