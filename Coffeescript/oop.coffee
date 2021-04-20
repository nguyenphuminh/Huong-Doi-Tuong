class Car
    constructor: (@tenxe, @mausac) ->
    dungxe:(mucdich) -> "#{this.tenxe}\t dang dung xe de #{mucdich}"

toyota = new Car("toyota", "den")
console.log toyota.dungxe("do xang")