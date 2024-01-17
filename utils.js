function isobject(arr) {
    return arr != null && Object.prototype.toString.call(arr) === "[object Object]"
}