//1
let getValue = function(value = 10, bonus=5){
    console.log(value+bonus);
};
getValue();
getValue(20);
getValue(20,30);
getValue(undefined,10);
//2
function UserFriends(username , ...friends){
    console.log("Username",username);
    console.log("Friends",friends);

}
UserFriends('teja','deepaa','ramu','giri','vijay')
//3
function printCapitalName(...name){
    console.log(name);
    let arr = [];
    for(i of name){
        arr[i] = i.toUpperCase();
    }
    console.log(arr);
}
let names=["Vidya","Ramya","Siri","Jai"];
printCapitalName(...names);
