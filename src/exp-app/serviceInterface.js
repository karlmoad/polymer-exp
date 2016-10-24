/**
 * Created by moadkj on 10/19/16.
 */
function ServiceInterface(apiurl, token){
    this.baseurl = apiurl;
    this.token = token;

    this.getCodes = function(callback){
        //stand in
        var items = [];

        items.push({set:"01", id:"CODE1", values: [{id:"ATTR1", value:"1"},{id:"ATTR2", value:"2"}]});
        items.push({set:"01", id:"CODE2", values: []});
        items.push({set:"02", id:"CODE3", values: [{id:"ATTR3", value:"3"}]});
        items.push({set:"02", id:"CODE4", values: [{id:"ATTR5", value:"5"}]});

        callback(null,items);
    };

    this.saveCode = function(digest,callback){
        //stand in
        callback(null,{message:"code saved", code: digest.code, edit:digest.edit});
    };

    this.deleteCode = function(code,callback){
        //stand in
        callback(null,{message:"code deleted", code: code});
    };
}








