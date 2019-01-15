function phonenumber(str) {
    var regexp = /^\([0-9]{2}\)\-\([0][0-9]+\)$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

var a = "(84)-(0988504490)";
console.log(phonenumber(a));
var b = "(84)+(01)";
console.log(phonenumber(b));
var c = "[84]-(01313134646)";
console.log(phonenumber(c));