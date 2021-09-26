
document.getElementById("upper-case").addEventListener("click", function () {
    let f = document.querySelector("textarea").value;
    let f1 = f.toUpperCase();
    document.querySelector("textarea").value = f1;
})

document.getElementById("lower-case").addEventListener("click", function (){
    let f = document.querySelector("textarea").value;
    let f1 = f.toLowerCase();
    document.querySelector("textarea").value = f1;
})

document.getElementById("proper-case").addEventListener("click", function() {
    let f = document.querySelector("textarea").value;
    let f1 = f[0].toUpperCase();
    for(i = 1;i<f.length;i++){
        if (f[i-1] == ' '){
            f1 += f[i].toUpperCase();
        }
        else{
            f1 += f[i].toLowerCase();
        }
    }
    document.querySelector("textarea").value = f1;
})


document.getElementById("sentence-case").addEventListener("click", function() {
    let f = document.querySelector("textarea").value;
    let f1 = f[0].toUpperCase()+f[1].toLowerCase();
    for(i = 2;i<f.length;i++){
        if ((f[i-2] == '.' || f[i-2] == '!' || f[i-2] == '?') && f[i-1] == ' '){
            f1 += f[i].toUpperCase();
        }
        else{
            f1 += f[i].toLowerCase();
        }
    }
    document.querySelector("textarea").value = f1;
})

document.getElementById("save-text-file").addEventListener("click", function (){
    let f = document.querySelector("textarea").value;
    download("text.txt", f);

})
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
