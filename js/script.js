
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr+ ', '+cityStr;



    $greeting.text('So, you wanna live at '+address+'?');

    var streetViewUrl ='https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' +address+'';


    $body.append('<img class="bgimg" src="'+streetViewUrl+'">');


    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
