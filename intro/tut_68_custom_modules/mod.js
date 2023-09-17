console.log("this is module");
function average(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
}
module.exports = {
    avg: average,
    name: "darpan",
    repo: "Github",
};
