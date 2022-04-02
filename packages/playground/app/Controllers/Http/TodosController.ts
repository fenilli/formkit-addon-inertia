import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Todo from 'App/Models/Todo';

export default class TodosController {
  public async index({ inertia }: HttpContextContract) {
    const todos = await Todo.all();

    return inertia.render('Playground', { todos });
  }

  public async create({ inertia, request }: HttpContextContract) {
    await Todo.create(request.all());

    const todos = await Todo.all();

    return inertia.render('Playground', { todos });
  }
}
