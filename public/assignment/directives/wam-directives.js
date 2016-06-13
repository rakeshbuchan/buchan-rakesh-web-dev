(function(){
    angular
        .module("wamDirectives", [])
        .directive("wamSortable", wamSortable);

    function wamSortable() {
        function linker(scope, element, attributes) {
            var start = -1;
            var end   = -1;
            $(".container")
                .sortable({
                    axis: 'y',
                    start: function(event, ui) {
                        start = ui.item.index();
                    },
                    stop: function(event, ui) {
                        end = ui.item.index();
                        scope.wamSortableCallback({start: start, end: end});
                    }
                });
        }
        return {
            scope: {
                wamSortableCallback: '&'
            },
            link: linker
        }
    }
})();
