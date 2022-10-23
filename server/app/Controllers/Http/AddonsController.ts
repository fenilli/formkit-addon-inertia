import TestAddon from 'App/Validators/TestAddonValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AddonsController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Home')
  }

  public async context({ inertia }: HttpContextContract) {
    return inertia.render('Context')
  }

  public async contextStore({ request, inertia }: HttpContextContract) {
    await request.validate(TestAddon)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return inertia.render('Context', { success: 'Test did not fail validations.' })
  }

  public async composition({ inertia }: HttpContextContract) {
    return inertia.render('Composition')
  }

  public async compositionStore({ request, inertia }: HttpContextContract) {
    await request.validate(TestAddon)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return inertia.render('Composition', { success: 'Test did not fail validations.' })
  }
}
