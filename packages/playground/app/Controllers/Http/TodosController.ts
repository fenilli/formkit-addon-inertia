import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Todo from 'App/Models/Todo';

export default class TodosController {
  public async index({ inertia }: HttpContextContract) {
    const todos = await Todo.all();

    return inertia.render('Playground', { todos });
  }

  public async create({ request, response }: HttpContextContract) {
    await Todo.create(request.all());

    return response.redirect('/todos');
  }

  public async delete({ response }: HttpContextContract) {
    await Todo.query().delete();

    return response.redirect('/todos');
  }
}
