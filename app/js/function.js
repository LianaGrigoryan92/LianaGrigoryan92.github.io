var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var headerHeight = $(".site-header").height();

function circleAtributs(radius=120) {

    /*Circle values*/
    var valueArr = {'circles-1' : 88,'circles-2':75,'circles-3':60};
    for(var key in valueArr ) {
        var myCircle = Circles.create( {
            id:                  key,
            radius:              radius,
            value:               valueArr[key],
            maxValue:            100,
            width:               3,
            text:                function(value){return value + '%';},
            colors:              ['#FAFAfA', '#878787'],
            duration:            1000,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           true
        });
    }
}

