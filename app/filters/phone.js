/*
Automatic phone number formatting in input field

Credits:
    - Wade Tandy via
    http://stackoverflow.com/questions/19094150/using-angularjs-directive-to-format-input-field-while-leaving-scope-variable-unc
    
    - kstep via
    http://stackoverflow.com/questions/12700145/how-to-format-a-telephone-number-in-angularjs
    
    - hans via
    http://codepen.io/hans/details/uDmzf/
*/

angular
    .module('TestJasmine')
    .filter('tel',tel);

function tel(){
    return function (tel) {

        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }

        if(number){
            if(number.length>3){
                number = number.slice(0, 3) + '-' + number.slice(3,7);
            }
            else{
                number = number;
            }

            return ("(" + city + ") " + number).trim();
        }
        else{
            return "(" + city;
        }

    };

}
 

