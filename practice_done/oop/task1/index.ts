import { Phone } from "./Phone";

taskOne();

function taskOne() {
    let samsungS10 = new Phone("+375298576645", "Samsung s10", 400);
    let samsungS20 = new Phone("+375334557892", "Samsung s20", 350);
    let iphoneX = new Phone("+375293346579", "Iphone X", 300);


    
    let arr = [samsungS10, samsungS20, iphoneX];

    arr.forEach((item) => console.log(item));
    arr.forEach((item) => item.receiveCall("Thomas"));
    arr.forEach((item) => console.log(item.getNumber()));
    samsungS10.sendMessage(samsungS20.getNumber(), iphoneX.getNumber());
}