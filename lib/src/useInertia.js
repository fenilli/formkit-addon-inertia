import { router } from "@inertiajs/vue3";
import { createMessage } from "@formkit/core";

const loadingMessage = createMessage({
  key: "loading",
  visible: false,
  value: true,
});

const injectNode = (node, options) => {
  const mergedOptions = { ...options };

  if (mergedOptions?.onCancelToken) {
    mergedOptions.onCancelToken = ({ cancel }) => options?.onCancelToken?.(cancel, node);
  }

  if (mergedOptions?.onCancel) {
    mergedOptions.onCancel = () => options?.onCancel?.(node);
  }

  if (mergedOptions?.onSuccess) {
    mergedOptions.onSuccess = (page) => options?.onSuccess?.(page, node);
  }

  if (mergedOptions?.onBefore) {
    mergedOptions.onBefore = (visit) => options?.onBefore?.(visit, node);
  }

  mergedOptions.onStart = (visit) => {
    if (!options?.disableLoading) node.store.set(loadingMessage);
    if (!options?.disableDisabled) node.props.disabled = true;

    if (options?.onStart) return options.onStart(visit, node);
  };

  mergedOptions.onProgress = (progress) => {
    if (!options?.disableProgress && node.context) node.context.attrs = { 'data-progress': progress?.total };

    if (options?.onProgress) return options.onProgress(progress, node);
  };

  mergedOptions.onFinish = (visit) => {
    if (!options?.disableLoading) node.store.remove('loading');
    if (!options?.disableDisabled) node.props.disabled = false;
    if (!options?.disableProgress && node.context && node.context.attrs['data-progress']) delete node.context.attrs['data-progress'];

    if (options?.onFinish) return options.onFinish(visit, node);
  };

  mergedOptions.onError = (errors) => {
    if (!options?.disableErrors) node.setErrors([], errors);

    if (options?.onError) return options.onError(errors, node);
  };

  return mergedOptions;
};

export const useInertia = (formNode) => {
  return {
    visit: (url, options) => router.visit(url, injectNode(formNode, options)),
    get: (url, data, options) =>
      router.get(url, data, injectNode(formNode, options)),
    post: (url, data, options) =>
      router.post(url, data, injectNode(formNode, options)),
    put: (url, data, options) =>
      router.put(url, data, injectNode(formNode, options)),
    patch: (url, data, options) =>
      router.patch(url, data, injectNode(formNode, options)),
    delete: (url, options) => router.delete(url, injectNode(formNode, options)),
    reload: (options) => router.reload(injectNode(formNode, options)),
  };
};
