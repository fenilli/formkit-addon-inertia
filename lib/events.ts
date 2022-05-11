import { VisitOptions, PendingVisit, Progress, ActiveVisit } from '@inertiajs/inertia';
import { createMessage, FormKitContext } from "@formkit/core";

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true
});

const onStart = (node: FormKitContext, payload: any, callback?: Function) => {
  // Set the loading and disabled state
  node.store.set(loadingMessage);
  node.props.disabled = true;

  callback?.(payload, node);
};

const onProgress = (node: FormKitContext, payload: any, callback?: Function) => {
  // Set the data-progress attrs to the progress number
  if (node.context) node.context.attrs = {
    'data-progress': payload
  };

  callback?.(payload, node);
};

const onFinish = (node: FormKitContext, payload: any, callback?: Function) => {
  // Remove the loading and disabled state
  node.store.remove('loading');
  node.props.disabled = false;

  // Remove the data-progress attrs when finished
  if (node.context && node.context.attrs['data-progress']) delete node.context.attrs['data-progress'];

  callback?.(payload, node);
};

export default (node: FormKitContext, options?: VisitOptions) => ({
  onStart: (visit: PendingVisit) => onStart(node, visit, options?.onStart),
  onProgress: (progress: Progress) => onProgress(node, progress, options?.onProgress),
  onFinish: (visit: ActiveVisit) => onFinish(node, visit, options?.onFinish)
});
