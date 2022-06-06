import{Schema,model}from 'mongoose'

export default class PokemonModelo{

    static pokemoneschema=new Schema({
      results:[
        {
          name:String,
          url:String
        }
      ]
    },{
      versionKey:false
    });

    static PokemonModelo:any=model('pokemones',this.pokemoneschema);
}
