$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_toggle = $("#open");

    btn_toggle.click(function() {
        if (envelope.hasClass('close')) {
            openEnvelope();
            btn_toggle.text("Close");
        } else {
            closeEnvelope();
            btn_toggle.text("Open Me!");
        }
    });

    function openEnvelope() {
        envelope.addClass('open').removeClass('close');
    }

    function closeEnvelope() {
        envelope.addClass('close').removeClass('open');
    }
});
