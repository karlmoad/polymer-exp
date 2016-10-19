/**
 * Created by moadkj on 10/19/16.
 */
function ServiceInterface(apiurl){
    this.baseurl = apiurl;

    this.getData = function(callback){
        var items = [];

        items.push({set:"01", code:"AT", count:3});
        items.push({set:"01", code:"A1", count:3});
        items.push({set:"01", code:"A2", count:3});
        items.push({set:"01", code:"A3", count:3});
        items.push({set:"01", code:"A4", count:3});
        items.push({set:"01", code:"AT5", count:3});
        items.push({set:"01", code:"AT6", count:3});
        items.push({set:"01", code:"AT7", count:3});
        items.push({set:"01", code:"AT8", count:3});
        items.push({set:"01", code:"AT9", count:3});
        items.push({set:"01", code:"AT0", count:3});
        items.push({set:"01", code:"BT1", count:3});
        items.push({set:"01", code:"BT2", count:3});
        items.push({set:"02", code:"AV1", count:3});
        items.push({set:"02", code:"AV2", count:3});
        items.push({set:"02", code:"AV3", count:3});
        items.push({set:"02", code:"AV4", count:3});
        items.push({set:"02", code:"AV5", count:3});
        items.push({set:"03", code:"Aa", count:3});
        items.push({set:"03", code:"Ab", count:3});
        items.push({set:"03", code:"Ac", count:3});
        items.push({set:"03", code:"Ad", count:3});
        items.push({set:"03", code:"Ar", count:3});
        items.push({set:"03", code:"Ay", count:3});
        items.push({set:"03", code:"Az", count:3});
        items.push({set:"03", code:"zz", count:3});
        items.push({set:"03", code:"33", count:3});
        items.push({set:"03", code:"vv", count:3});
        items.push({set:"03", code:"mm", count:3});
        items.push({set:"03", code:"gh", count:3});
        items.push({set:"03", code:"56", count:3});
        items.push({set:"03", code:"KL", count:3});
        items.push({set:"0100", code:"z1", count:3});
        items.push({set:"0100", code:"s2", count:3});
        items.push({set:"0100", code:"e3", count:3});
        items.push({set:"0100", code:"g5", count:3});
        items.push({set:"0100", code:"7y", count:3});
        items.push({set:"0100", code:"9i", count:3});
        items.push({set:"0100", code:"y6", count:3});
        items.push({set:"0100", code:"p9", count:3});
        items.push({set:"0100", code:"e4", count:3});
        items.push({set:"0100", code:"6t", count:3});
        items.push({set:"0100", code:"y7", count:3});
        items.push({set:"0100", code:"g1", count:3});
        items.push({set:"0100", code:"f1", count:3});
        items.push({set:"0100", code:"b5", count:3});
        items.push({set:"0100", code:"r5", count:3});
        items.push({set:"0100", code:"j2", count:3});
        items.push({set:"0100", code:"EE", count:3});
        items.push({set:"0101", code:"ZZ", count:3});

        callback(null,items);
    };
}








