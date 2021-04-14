'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.get('/users', 'UserController.getAll')
Route.delete('/user', 'UserController.delete')
Route.get('/user', 'UserController.get')
Route.patch('/update/username', 'UserController.updateUsername')
Route.patch('/update/email', 'UserController.updateEmail')
