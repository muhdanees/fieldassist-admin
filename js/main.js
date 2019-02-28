$(document).ready(function () {

    var $tab = $(".tab-list li");
    $tab.on("click", function () {
        $tab.removeClass("active");
        $(this).addClass("active");
        $(".tab-content .tab-content-area")
            .hide()
            .eq($(this).index())
            .show();
    });

    // Second Tabs
    var $innerTab = $(".innertab-list li");
    $innerTab.on("click", function () {
        $innerTab.removeClass("active");
        $(this).addClass("active");
        $(".innertab-content .innertab-content-area")
            .hide()
            .eq($(this).index())
            .show();
    });

    $(".event-calender tbody td").on("click", function(){
        if($(this).text().length){
            $(".event-calender tbody td").removeClass("active");
            $(this).addClass("active");
            $(".cal-date").text($(this).text());
            $(".cal-time .day").text($(this).text());
        }
        
    });

    function rowHTML(data) {
        return '<div class="row">' +
            '<div class="col">' + data.name + '</div>' +
            '<div class="col text-right">' + data.time + '</div>' +
        '</div>';
    }

    // events
    $.get("js/events.json", function(data) {
        // submissions
        var submissions = data.submissions;
        var $eventSubmission = $('.event-submissions') 
        submissions.forEach(function(submission){
            var title = '<strong>' + submission.title + '</strong>';
            var submissionRow = [];
            submission.events.forEach(function(item, index){
                submissionRow[index] = rowHTML(item);
            });
            var list = '<li>' + title + submissionRow.join('') + '</li>';

            $eventSubmission.append(list);
        });

        // exams
        var exams = data.exams;
        var $eventExam = $('.event-exams') 
        exams.forEach(function(exam){
            var title = '<strong>' + exam.title + '</strong>';
            var examRow = [];
            exam.subjects.forEach(function(item, index){
                examRow[index] = rowHTML(item);
            });
            var list = '<li>' + title + examRow.join('') + '</li>';

            $eventExam.append(list);
        });
    });

    // resources
    $.get('js/resource.json', function(data){
        var resources = [];
        data.resource.forEach(function(resource, index) {
            resources[index] = '<li>' + '<img src="' + resource.image + '"> ' + resource.name + '</li>'
        });

        $('.list-resource').append(resources.join(''))
    });

    //btn-primary
    $("#post-title").on('keyup',function(){
        if($(this).val().length >= 1) {
            $('#post').addClass('btn-primary');
        } else {
            $('#post').removeClass('btn-primary');
        }
    });
});