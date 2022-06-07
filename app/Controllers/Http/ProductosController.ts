import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios=require('axios')


import Database from "@ioc:Adonis/Lucid/Database"
import Pokemon from "App/Models/Pokemon"
import Producto from "App/Models/Producto"


export default class ProductosController {
    public async crearProducto({request,response}){

      const producto=request.input(['nom_producto'])
      const precio=request.input(['precio'])

      const nuevo=new Producto()
      nuevo.nom_producto=producto
      nuevo.precio=precio

      nuevo.save()
      return response.json({nuevo})
    }
    public async consultaProducto(){
        const producto=Producto.all()
        return producto
    }
    public async consultaRegistro(){
      await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((resp)=>{
        const x=resp.data.results
        Pokemon.createMany(x)
        console.log("datos insertados correctamente")
      })
    }
    public async eliminarPokemon({request}){
      const pokemon=request.input('name')
      const consulta=await Database.from('pokemon').delete('*').where('nom_pokemon','=',pokemon)
      const mensaje="pokemon eliminado correctamente"
      return mensaje
    }
    public async filtrado({request}: HttpContextContract){
        const buscar=request.input('name')
        const consulta=await Database.from('pokemon').select('*').where('nom_pokemon', 'LIKE' ,'%' + buscar + '%')
        return consulta
    }
    public async paginacion(){
      const consulta=Database.rawQuery('select* from pokemon order by(id)DESC limit 10')
      return consulta
    }
    public async consulta(){
      const consulta=await Database.from('pokemon').select('*').where('nom_pokemon', '=' ,'mewtwo')
      return consulta
    }
    public async filtrarcomida({request}:HttpContextContract){
       const nom_producto=request.input('producto')
       const consulta=await Database.from('productos').select('*').where('nom_producto', 'LIKE' ,'%' + nom_producto + '%')
       return consulta
    }
   

}
