import { Inertia, VisitOptions } from '@inertiajs/inertia';

import extendInertiaEventCallbacks from './events';

import { FormKitNode } from "@formkit/core";

export default (node: FormKitNode) => {
  if (node.props.type !== 'form' || !node.context) return;

  const mergeOptions = (options?: VisitOptions) => ({
    ...options,
    ...extendInertiaEventCallbacks(node, options)
  });

  node.context.inertia = {
    visit: (href, options?) => Inertia.visit(href, mergeOptions(options)),
    reload: (options?) => Inertia.reload(mergeOptions(options)),
    get: (href, data?, options?) => Inertia.get(href, data, mergeOptions(options)),
    post: (href, data?, options?) => Inertia.post(href, data, mergeOptions(options)),
    put: (href, data?, options?) => Inertia.put(href, data, mergeOptions(options)),
    patch: (href, data?, options?) => Inertia.patch(href, data, mergeOptions(options)),
    delete: (href, options?) => Inertia.delete(href, mergeOptions(options)),
  };
}
