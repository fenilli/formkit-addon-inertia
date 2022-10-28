import UserCreateValidator from 'App/Validators/UserCreateValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('User')
  }

  public async store({ request, inertia }: HttpContextContract) {
    await request.validate(UserCreateValidator)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return inertia.render('User', { success: 'Test did not fail validations.' })
  }
}
