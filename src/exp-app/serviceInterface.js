/**
 * Created by moadkj on 10/19/16.
 */
'use strict'
function ServiceInterface(apiurl, token){
    this.baseurl = apiurl;
    this.token = token;

    this.getCodes = function(callback){

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    var items = [];
                    var data = JSON.parse(xhr.responseText);
                    try {
                        if (data.sets) {
                            data.sets.forEach(function (set) {
                                set.codes.forEach(function (code) {
                                    items.push({set: set.id, id: code.id, values: code.values});
                                });
                            });
                        }
                    }
                    catch(error){
                        console.log(error);
                    }

                    callback(null,items);
                }else{
                    callback("Service Error",null);
                }
            }
        };

        xhr.open("GET", this.baseurl+"/codes", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.setRequestHeader("auth", this.token);
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.send();

    };

    this.saveCode = function(digest,callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    callback(null,{message:"code saved", code: digest.code, edit:digest.edit});
                }else{
                    callback("Service Error",null);
                }
            }
        };

        xhr.open("PUT", this.baseurl+"/codes", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.setRequestHeader("auth", this.token);

        var p = null;
        try{
            p = {sets:[{id:digest.code.set, codes:[{id: digest.code.id, values: digest.code.values}]}]};
        }
        catch(error){
            console.log(error);
        }

        if(p){
            xhr.send(JSON.stringify(p));
        }else{
            callback("Error",null);
        }
    };

    this.deleteCode = function(code,callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    callback(null,{message:"code deleted", code: code});
                }else{
                    callback("Service Error",null);
                }
            }
        };
        var uri = this.baseurl+"/codes/" + code.set + "/" + code.id;
        xhr.open("DELETE", uri , true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.setRequestHeader("auth", this.token);
        xhr.send();
    };
}








