import { PendingVisit, VisitOptions } from '@inertiajs/inertia';
import { createMessage, FormKitNode } from "@formkit/core";
import { FormKitInertifyVisitOptions } from './types';

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true
});

const onExtendedCb = (node: FormKitNode, payload: any, cb?: Function) => {
  if (cb) cb(payload, node);
};

const onStart = (node: FormKitNode, payload: any, cb?: Function) => {
  if (cb) return cb(payload, node);

  // Set the loading and disabled state
  node.store.set(loadingMessage);
  node.props.disabled = true;
};

const onProgress = (node: FormKitNode, payload: any, cb?: Function) => {
  if (cb) return cb(payload, node);

  // Set the data-progress attrs to the progress number
  if (node.context) node.context.attrs = {
    'data-progress': payload
  };
};

const onFinish = (node: FormKitNode, payload: any, cb?: Function) => {
  if (cb) return cb(payload, node);
  // Remove the loading and disabled state
  node.store.remove('loading');
  node.props.disabled = false;

  // Remove the data-progress attrs when finished
  if (node.context && node.context.attrs['data-progress']) delete node.context.attrs['data-progress'];
};

const onError = (node: FormKitNode, payload: any, cb?: Function) => {
  if (cb) return cb(payload, node);
  // Set backend validation errors to all the fields available to the form by name
  node.setErrors([], payload);
};

const pluckVisitOptions = (options?: FormKitInertifyVisitOptions) => {
  const { method, data, replace, preserveScroll, preserveState, only, headers, errorBag, forceFormData, queryStringArrayFormat } = options;

  return { method, data, replace, preserveScroll, preserveState, only, headers, errorBag, forceFormData, queryStringArrayFormat };
};

export default (node: FormKitNode, options?: FormKitInertifyVisitOptions): VisitOptions => ({
  ...pluckVisitOptions(options),
  onCancelToken: ({ cancel }) => onExtendedCb(node, { cancel }, options?.onCancelToken),
  onBefore: (visit) => onExtendedCb(node, visit, options?.onBefore),
  onStart: (visit) => onStart(node, visit, options?.onStart),
  onProgress: (progress) => onProgress(node, progress, options?.onProgress),
  onFinish: (visit) => onFinish(node, visit, options?.onFinish),
  onCancel: () => onExtendedCb(node, undefined, options?.onCancel),
  onSuccess: (page) => onExtendedCb(node, page, options?.onSuccess),
  onError: (error) => onError(node, error, options?.onError),
});
