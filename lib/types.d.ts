import { AxiosResponse } from 'axios';
import { GlobalEventNames, GlobalEventResult, Visit, RequestPayload, PendingVisit, Progress, ActiveVisit, Page, Errors } from '@inertiajs/inertia';
import { FormKitNode } from '@formkit/core';

export declare type FormKitInertifyGlobalEventsMap = {
  before: {
    parameters: [PendingVisit, FormKitNode];
    details: {
      visit: PendingVisit;
    };
    result: boolean | void;
  };
  start: {
    parameters: [PendingVisit, FormKitNode];
    details: {
      visit: PendingVisit;
    };
    result: void;
  };
  progress: {
    parameters: [Progress | undefined, FormKitNode];
    details: {
      progress: Progress | undefined;
    };
    result: void;
  };
  finish: {
    parameters: [ActiveVisit, FormKitNode];
    details: {
      visit: ActiveVisit;
    };
    result: void;
  };
  cancel: {
    parameters: [FormKitNode];
    details: {};
    result: void;
  };
  navigate: {
    parameters: [Page, FormKitNode];
    details: {
      page: Page;
    };
    result: void;
  };
  success: {
    parameters: [Page, FormKitNode];
    details: {
      page: Page;
    };
    result: void;
  };
  error: {
    parameters: [Errors, FormKitNode];
    details: {
      errors: Errors;
    };
    result: void;
  };
  invalid: {
    parameters: [AxiosResponse, FormKitNode];
    details: {
      response: AxiosResponse;
    };
    result: boolean | void;
  };
  exception: {
    parameters: [Error, FormKitNode];
    details: {
      exception: Error;
    };
    result: boolean | void;
  };
};

export declare type FormKitInertifyGlobalEventParameters<TEventName extends GlobalEventNames> = FormKitInertifyGlobalEventsMap[TEventName]['parameters'];
export declare type FormKitInertifyGlobalEventCallback<TEventName extends GlobalEventNames> = (...params: FormKitInertifyGlobalEventParameters<TEventName>) => GlobalEventResult<TEventName>;

export declare type FormKitInertifyVisitOptions = Partial<Visit & {
  onCancelToken: {
    ({ cancel }: {
      cancel: VoidFunction;
    }): void;
  };
  onBefore: FormKitInertifyGlobalEventCallback<'before'>;
  onStart: FormKitInertifyGlobalEventCallback<'start'>;
  onProgress: FormKitInertifyGlobalEventCallback<'progress'>;
  onFinish: FormKitInertifyGlobalEventCallback<'finish'>;
  onCancel: FormKitInertifyGlobalEventCallback<'cancel'>;
  onSuccess: FormKitInertifyGlobalEventCallback<'success'>;
  onError: FormKitInertifyGlobalEventCallback<'error'>;
}>;

export interface FormKitInertiaContext {
  visit: (href: string | URL, options?: FormKitInertifyVisitOptions) => void;
  reload: (options?: Exclude<FormKitInertifyVisitOptions, 'preserveScroll' | 'preserveState'>) => void;
  get: (href: string | URL, data?: RequestPayload, options?: Exclude<FormKitInertifyVisitOptions, 'method' | 'data'>) => void;
  post: (href: string | URL, data?: RequestPayload, options?: Exclude<FormKitInertifyVisitOptions, 'method' | 'data'>) => void;
  put: (href: string | URL, data?: RequestPayload, options?: Exclude<FormKitInertifyVisitOptions, 'method' | 'data'>) => void;
  patch: (href: string | URL, data?: RequestPayload, options?: Exclude<FormKitInertifyVisitOptions, 'method' | 'data'>) => void;
  delete: (href: string | URL, options?: Exclude<FormKitInertifyVisitOptions, 'method'>) => void;
}

declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    inertia: FormKitInertiaContext;
  }
}
