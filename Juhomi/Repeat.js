var arr=["next","time","there","wont","be","a","next","time"];
var repeated=arr.filter(function(Item,i,allItems){
    return (i != allItems.indexOf(Item));
});
console.log(repeated);