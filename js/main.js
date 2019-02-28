(function() {
    function addClass(elm, className) {
        elm.addClass(className)
    }
    function removeClass(elm, className) {
        elm.removeClass(className)
    }
    function tabHandling() {
        let elm = $(this);
        let li = elm.siblings("li");
        let div = elm.closest(".tabs-container").children(".tab-content");
        let $show = div.eq(elm.index());
        removeClass(li, "active");
        addClass(elm, 'active');
        removeClass(div, "active");
        addClass($show, 'active');
    }
    function addEmployee(){
        let addemployee = $("#addemployee");
        addClass( addemployee, "active")
    }
    function editEmployee(){
        let editEmployee = $("#editEmployee");
        addClass(editEmployee, "active")
    }

    function bindEvents() {
        $(".tab-list li").on("click", tabHandling),
        $(".addemp").on("click", addEmployee),
        $(".current-edit").on("click", editEmployee);
    }
    function init() {
        bindEvents();
    }
    init();
})();