import { Inertia, VisitOptions, PendingVisit, ActiveVisit } from '@inertiajs/inertia';

import { onStart, onFinish } from './events';

import { FormKitContext } from "@formkit/core";

export default (node: FormKitContext) => {
  if (node.props.type !== 'form' || !node.context) return;

  const mergeOptions = (options?: VisitOptions) => ({
    ...options,
    onStart: (visit: PendingVisit) => onStart(node, visit, options?.onStart),
    onFinish: (visit: ActiveVisit) => onFinish(node, visit, options?.onFinish)
  });

  node.context.inertia = {
    post: (href, data, options?) => Inertia.post(href, data, mergeOptions(options))
  };
}
