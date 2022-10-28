import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.notIn(['admin']),
      rules.alpha({
        allow: ['space'],
      }),
      rules.minLength(4),
      rules.maxLength(30),
      rules.trim(),
    ]),
    email: schema.string([rules.email(), rules.notIn(['admin@formkit.com'])]),
  })

  public messages: CustomMessages = {}
}
