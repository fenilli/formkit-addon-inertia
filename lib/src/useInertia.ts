import { Inertia, Visit, Progress, Page, Errors, VisitOptions, PendingVisit, ActiveVisit, RequestPayload } from '@inertiajs/inertia'
import { createMessage, FormKitNode } from '@formkit/core';

export interface FormKitAddonInertiaDisableOptions {
  disableLoading: boolean;
  disableDisabled: boolean;
  disableProgress: boolean;
  disableErrors: boolean;
};

export declare type FormKitAddonInertiaOptions = Partial<Visit & {
  onCancelToken: (cancelToken: VoidFunction, node: FormKitNode) => void;
  onBefore: (visit: PendingVisit, node: FormKitNode) => void;
  onStart: (visit: PendingVisit, node: FormKitNode) => void;
  onProgress: (progress: Progress | undefined, node: FormKitNode) => void;
  onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
  onCancel: (node: FormKitNode) => void;
  onSuccess: (page: Page, node: FormKitNode) => void;
  onError: (errors: Errors, node: FormKitNode) => void;
} & FormKitAddonInertiaDisableOptions>;

export interface FormKitAddonInertiaVisits {
  visit: (url: URL, options?: FormKitAddonInertiaOptions) => void;
  get: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => void;
  post: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => void;
  put: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => void;
  patch: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => void;
  delete: (url: URL | string, options?: Exclude<FormKitAddonInertiaOptions, 'method'>) => void;
  reload: (options?: Exclude<FormKitAddonInertiaOptions, 'preserveScroll' | 'preserveState'>) => void;
};

const loadingMessage = createMessage({
  key: 'loading',
  visible: false,
  value: true,
});

const injectNode = (
  node: FormKitNode,
  options?: FormKitAddonInertiaOptions
): VisitOptions => {
  const mergedOptions: VisitOptions = { ...options as VisitOptions };

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

  console.log(mergedOptions);

  return mergedOptions;
};

export const useInertia = (formNode: FormKitNode) => {
  return {
    visit: (url: URL, options?: FormKitAddonInertiaOptions) => Inertia.visit(url, injectNode(formNode, options)),
    get: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => Inertia.get(url, data, injectNode(formNode, options)),
    post: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => Inertia.post(url, data, injectNode(formNode, options)),
    put: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => Inertia.put(url, data, injectNode(formNode, options)),
    patch: (url: URL | string, data?: RequestPayload, options?: Exclude<FormKitAddonInertiaOptions, 'method' | 'data'>) => Inertia.patch(url, data, injectNode(formNode, options)),
    delete: (url: URL | string, options?: Exclude<FormKitAddonInertiaOptions, 'method'>) => Inertia.delete(url, injectNode(formNode, options)),
    reload: (options?: Exclude<FormKitAddonInertiaOptions, 'preserveScroll' | 'preserveState'>) => Inertia.reload(injectNode(formNode, options)),
  };
};
