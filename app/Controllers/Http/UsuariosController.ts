import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario"

export default class UsuariosController {
    public async register({request,response}){
        const email=request.input(['email'])
        const password=request.input(['password'])
   
        const usuario=new Usuario()
        usuario.email=email
        usuario.password=password
        
   
   
        usuario.save()
        return response.json({usuario})
     }
     public async login({request,auth,response}){
        const email = request.input('email')
        const password = request.input('password')
    
        try {
          const token = await auth.use('api').attempt(email, password)
          return token
        } catch {
          return response.badRequest('Invalid credentials')
        }
      }
      public async traerID({auth,response}: HttpContextContract){
        const traer=await auth.use('api').authenticate()
        console.log(auth.use('api').user!)
        return response.json({traer})
      }
}
