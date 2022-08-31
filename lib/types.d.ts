import { RequestPayload, VisitOptions } from '@inertiajs/inertia';

export interface FormKitInertifyDisableCallBacks {
  disable?: {
    onStart?: boolean;
    onProgress?: boolean;
    onFinish?: boolean;
    onError?: boolean;
  }
}

export interface FormKitInertifyContext {
  visit: (url: string, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  get: (url: string, data?: RequestPayload, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  post: (url: string, data?: RequestPayload, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  put: (url: string, data?: RequestPayload, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  patch: (url: string, data?: RequestPayload, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  delete: (url: string, options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
  reload: (options?: Partial<VisitOptions & FormKitInertifyDisableCallBacks>) => void;
}

declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    inertia: FormKitInertifyContext;
  }
}
