class Car {
	tenxe;
	mausac;
	constructor(tenxe, mausac) {
		this.tenxe = tenxe;
		this.mausac = mausac;
	}
	dungxe(mucdich) {
		return `${this.tenxe}\t dang dung xe de ${mucdich}`		
	}
}

let toyota = new Car("toyota", "den")
console.log(toyota.dungxe("do xang"))