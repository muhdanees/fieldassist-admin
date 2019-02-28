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
        var dataAction = elm.parent().data("target");
        let div = $("[data-action=" + dataAction + "]").children(".tab-content");
        let $show = div.eq(elm.index());
        removeClass(li, "active");
        addClass(elm, 'active');
        removeClass(div, "active");
        addClass($show, 'active');
    }
    function addEmployee(){
        let addemployee = $("#addemployee");
        addemployee.toggleClass("active");
    }
    function editEmployee(){
        let editEmployee = $("#editEmployee");
        addClass(editEmployee, "active")
    }
    function cancel() {
        let addemployee = $("#addemployee");
        removeClass(addemployee, "active");
    }
    function bindEvents() {
        $(".tab-list li").on("click", tabHandling),
        $(".addemp").on("click", addEmployee),
        $(".current-edit").on("click", editEmployee),
        $(".cancel").on("click", cancel);
    }
    function init() {
        bindEvents();
    }
    init();
})();