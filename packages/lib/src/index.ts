import { Inertia, VisitOptions, PendingVisit, ActiveVisit, Progress } from '@inertiajs/inertia';
import { FormKitContext } from '@formkit/core';
import { onLoadingStart, onLoadingFinish } from './loading-state';
import { onProgressProgress, onProgressFinish } from './progress-state';
import { FormKitInertiaContext } from './types';

export default (node: FormKitContext) => {
  if (node.props.type === 'form') {
    const onStart = (visit: PendingVisit, callback: Function) => {
      onLoadingStart(node);

      callback?.(visit);
    };

    const onProgress = (progress: Progress, callback: Function) => {
      onProgressProgress(node, progress);

      callback?.(progress);
    };

    const onFinish = (visit: ActiveVisit, callback: Function) => {
      onLoadingFinish(node);
      onProgressFinish(node);

      callback?.(visit);
    };

    const setInertiaOptions = (options?: VisitOptions) => ({
      ...options,
      onStart: (visit: PendingVisit) => onStart(visit, options?.onStart),
      onFinish: (visit: ActiveVisit) => onFinish(visit, options?.onFinish),
      onProgress: (progress: Progress) => onProgress(progress, options?.onProgress)
    });

    (node.context.inertia as FormKitInertiaContext) = {
      visit: (href, options?) =>
        Inertia.visit(href, setInertiaOptions(options)),
      reload: (options?) =>
        Inertia.reload(setInertiaOptions(options)),
      get: (href, data?, options?) =>
        Inertia.get(href, data, setInertiaOptions(options)),
      post: (href, data?, options?) =>
        Inertia.post(href, data, setInertiaOptions(options)),
      put: (href, data?, options?) =>
        Inertia.put(href, data, setInertiaOptions(options)),
      patch: (href, data?, options?) =>
        Inertia.patch(href, data, setInertiaOptions(options)),
      delete: (href, options?) =>
        Inertia.delete(href, setInertiaOptions(options))
    };
  }
}
