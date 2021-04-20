export class Car {
	tenxe:string;
	mausac:string;
	constructor(tenxe:string, mausac:string) {
		this.tenxe = tenxe;
		this.mausac = mausac;
	}
	public dungxe(mucdich:string) {
		return `${this.tenxe}\t dang dung xe de ${mucdich}`		
	}
}

let toyota = new Car("toyota", "den")

console.log(toyota.dungxe("do xang"))