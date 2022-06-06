/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.post('register','UsuariosController.register')
Route.post('login','UsuariosController.login')

Route.post('registrarprod','ProductosController.crearProducto')
Route.get('consultaprod','ProductosController.consultaProducto')

Route.post('consultadatos','ProductosController.consultaRegistro')
Route.post('filtro','ProductosController.filtrado')
Route.post('filtrocom','ProductosController.filtrarcomida')
