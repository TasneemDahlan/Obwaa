

//----- upload profile pic -------//
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});


//------ clip to artboard ----------//
// functionality to copy text from inviteCode to clipboard

// trigger copy event on click
$('#copy').on('click', function (event) {
    console.log(event);
    copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
    // alert('this function was triggered');
    // find target element
    var
        t = e.target,
        c = t.dataset.copytarget,
        inp = (c ? document.querySelector(c) : null);
    console.log(inp);
    // check if input element exist and if it's selectable
    if (inp && inp.select) {
        // select text
        inp.select();
        try {
            // copy text
            document.execCommand('copy');
            inp.blur();

            // copied animation
            t.classList.add('copied');
            setTimeout(function () {
                t.classList.remove('copied');
            }, 1500);
        } catch (err) {
            //fallback in case exexCommand doesnt work
            alert('please press Ctrl/Cmd+C to copy');
        }

    }

}

// li nav style
$("ul.dash_settings.nav.nav-tabs .nav-link:hover").parent().css("border-right", "3px solid #1FA7CD");


