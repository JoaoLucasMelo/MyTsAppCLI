export class Pokemon {

    name: String
    type: String
    id: Number
    img: String

    constructor(data: { name: String, types: Array<{ type: { name: String } }>, id: Number, sprites: { other: { home: { front_default: String}}}}) {
        this.name = data.name
        this.type = data.types[0].type.name
        this.id = data.id
        this.img = data.sprites.other.home.front_default
    }
}