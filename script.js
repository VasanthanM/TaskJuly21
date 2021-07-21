var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var res = JSON.parse(this.response);
    res.forEach(res => {
        console.log(res.name + "  " + res.capital + "  " + res.flag);
    });
}