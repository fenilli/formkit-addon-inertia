import { Inertia, VisitOptions, PendingVisit, ActiveVisit, RequestPayload } from '@inertiajs/inertia';
import { createMessage, FormKitContext } from '@formkit/core';

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true
});

export default (node: FormKitContext) => {
  if (node.props.type === 'form') {
    const onStart = (visit: PendingVisit, callback: Function) => {
      node.store.set(loadingMessage);
      node.props.disabled = true;

      callback?.(visit);
    };

    const onFinish = (visit: ActiveVisit, callback: Function) => {
      node.store.remove('loading');
      node.props.disabled = false;

      callback?.(visit);
    };

    const setInertiaOptions = (options?: VisitOptions) => ({
      ...options,
      onStart: (visit: PendingVisit) => onStart(visit, options?.onStart),
      onFinish: (visit: ActiveVisit) => onFinish(visit, options?.onFinish)
    });

    node.context.inertia = {
      visit: (href: string | URL, options?: VisitOptions) =>
        Inertia.visit(href, setInertiaOptions(options)),
      reload: (options?: Exclude<VisitOptions, 'preserveScroll' | 'preserveState'>) =>
        Inertia.reload(setInertiaOptions(options)),
      get: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) =>
        Inertia.get(href, data, setInertiaOptions(options)),
      post: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) =>
        Inertia.post(href, data, setInertiaOptions(options)),
      put: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) =>
        Inertia.put(href, data, setInertiaOptions(options)),
      patch: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) =>
        Inertia.patch(href, data, setInertiaOptions(options)),
      delete: (href: string | URL, options?: Exclude<VisitOptions, 'method'>) =>
        Inertia.delete(href, setInertiaOptions(options)),
    };
  }
}
