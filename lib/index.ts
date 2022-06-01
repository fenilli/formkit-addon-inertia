import { Inertia } from '@inertiajs/inertia';

import extendInertiaEventCallbacks from './events';

import { FormKitNode } from "@formkit/core";
import { FormKitInertiaContext } from './types';

export default (node: FormKitNode) => {
  if (node.props.type !== 'form' || !node.context) return;

  (node.context.inertia as FormKitInertiaContext) = {
    visit: (href, options?) => Inertia.visit(href, extendInertiaEventCallbacks(node, options)),
    reload: (options?) => Inertia.reload(extendInertiaEventCallbacks(node, options)),
    get: (href, data?, options?) => Inertia.get(href, data, extendInertiaEventCallbacks(node, options)),
    post: (href, data?, options?) => Inertia.post(href, data, extendInertiaEventCallbacks(node, options)),
    put: (href, data?, options?) => Inertia.put(href, data, extendInertiaEventCallbacks(node, options)),
    patch: (href, data?, options?) => Inertia.patch(href, data, extendInertiaEventCallbacks(node, options)),
    delete: (href, options?) => Inertia.delete(href, extendInertiaEventCallbacks(node, options)),
  };
}
