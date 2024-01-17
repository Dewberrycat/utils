function isobject(arr) {
    return arr != null && Object.prototype.toString.call(arr) === "[object Object]"
}

function uniqueFilter(arr) {
    return arr.filter((e, i, arr) => i === arr.indexOf(e));
}

function f() {

}