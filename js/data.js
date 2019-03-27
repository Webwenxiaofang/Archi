(function(global){
    const root = 'http://10.2.138.32';
    global.GetData = {
        FetchData:function(api){
            let xmlhttp=new XMLHttpRequest(),tmpUrl = root+api;
            xmlhttp.onreadystatechange=function() {
                if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    MyJson = xmlhttp.responseText;
                    console.log(MyJson);
                    return MyJson
                }
            }
            xmlhttp.open("GET",tmpUrl,true);
            xmlhttp.send();
        }
    }
})(this)