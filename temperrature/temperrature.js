class Temperature{
    value;
    constructor(value){
        this.value=value;
    }
    getCchangeF(){
        return this.value*1.8+32;
    }
    getCchangeK(){
        return this.value+273,15;
    }
}