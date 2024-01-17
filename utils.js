function isobject(arr) {
    return arr != null && Object.prototype.toString.call(arr) === "[object Object]"
}

function uniqueFilter(arr) {
    return arr.filter((e, i, arr) => i === arr.indexOf(e));
}

function uniqueFor(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!temp.includes(arr[i])) temp.push(arr[i]);
    }
    return temp;
}