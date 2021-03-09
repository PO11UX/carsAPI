export class cars{
    id: string;
    name: string;
    desc:string;
    img:string;
    ABS:boolean;
    elG:boolean;
    look:boolean;
    bluetooth:boolean;
    alarm:boolean;
    park:boolean;
    GPS:boolean;
    comp:boolean;
    mult:boolean;
   

    constructor(id,name,desc,img,ABS,elG,look,bluetooth,alarm,park,gps,comp,mult){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.img=img;
        this.ABS=ABS;
        this.elG=elG;
        this.look=look;
        this.bluetooth=bluetooth;
        this.alarm=alarm;
        this.park=park;
        this.GPS=gps;
        this.comp=comp;
        this.mult=mult;
        
    }
}