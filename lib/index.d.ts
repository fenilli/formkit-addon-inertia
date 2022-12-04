import type {
  Visit,
  Progress,
  Page,
  Errors,
  VisitOptions,
  PendingVisit,
  ActiveVisit,
  RequestPayload,
} from "@inertiajs/vue3";
import type { FormKitNode } from "@formkit/core";

export interface FormKitAddonInertiaDisableOptions {
  disableLoading: boolean;
  disableDisabled: boolean;
  disableProgress: boolean;
  disableErrors: boolean;
}

export declare type FormKitAddonInertiaOptions = Partial<
  Visit & {
    onCancelToken: (cancelToken: VoidFunction, node: FormKitNode) => void;
    onBefore: (visit: PendingVisit, node: FormKitNode) => void;
    onStart: (visit: PendingVisit, node: FormKitNode) => void;
    onProgress: (progress: Progress | undefined, node: FormKitNode) => void;
    onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
    onCancel: (node: FormKitNode) => void;
    onSuccess: (page: Page, node: FormKitNode) => void;
    onError: (errors: Errors, node: FormKitNode) => void;
  } & FormKitAddonInertiaDisableOptions
>;

export interface FormKitAddonInertiaVisits {
  visit: (url: URL, options?: FormKitAddonInertiaOptions) => void;
  get: (
    url: URL | string,
    data?: RequestPayload,
    options?: Exclude<FormKitAddonInertiaOptions, "method" | "data">
  ) => void;
  post: (
    url: URL | string,
    data?: RequestPayload,
    options?: Exclude<FormKitAddonInertiaOptions, "method" | "data">
  ) => void;
  put: (
    url: URL | string,
    data?: RequestPayload,
    options?: Exclude<FormKitAddonInertiaOptions, "method" | "data">
  ) => void;
  patch: (
    url: URL | string,
    data?: RequestPayload,
    options?: Exclude<FormKitAddonInertiaOptions, "method" | "data">
  ) => void;
  delete: (
    url: URL | string,
    options?: Exclude<FormKitAddonInertiaOptions, "method">
  ) => void;
  reload: (
    options?: Exclude<
      FormKitAddonInertiaOptions,
      "preserveScroll" | "preserveState"
    >
  ) => void;
}

export declare const useInertia: (formNode: FormKitNode) => {
  visit: (
    url: URL,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  get: (
    url: URL | string,
    data?: RequestPayload | undefined,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  post: (
    url: URL | string,
    data?: RequestPayload | undefined,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  put: (
    url: URL | string,
    data?: RequestPayload | undefined,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  patch: (
    url: URL | string,
    data?: RequestPayload | undefined,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  delete: (
    url: URL | string,
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
  reload: (
    options?:
      | Partial<
          Visit & {
            onCancelToken: (
              cancelToken: VoidFunction,
              node: FormKitNode
            ) => void;
            onBefore: (visit: PendingVisit, node: FormKitNode) => void;
            onStart: (visit: PendingVisit, node: FormKitNode) => void;
            onProgress: (
              progress: Progress | undefined,
              node: FormKitNode
            ) => void;
            onFinish: (visit: ActiveVisit, node: FormKitNode) => void;
            onCancel: (node: FormKitNode) => void;
            onSuccess: (page: Page, node: FormKitNode) => void;
            onError: (errors: Errors, node: FormKitNode) => void;
          } & FormKitAddonInertiaDisableOptions
        >
      | undefined
  ) => void;
};

export declare const plugin: (node: FormKitNode) => false | undefined;

declare module "@formkit/core" {
  export interface FormKitFrameworkContext {
    inertia: FormKitAddonInertiaVisits;
  }
}
