import { VisitOptions, RequestPayload } from '@inertiajs/inertia';

export interface FormKitInertiaContext {
  visit: (href: string | URL, options?: VisitOptions) => void;
  reload: (options?: Exclude<VisitOptions, 'preserveScroll' | 'preserveState'>) => void;
  get: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) => void;
  post: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) => void;
  put: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) => void;
  patch: (href: string | URL, data?: RequestPayload, options?: Exclude<VisitOptions, 'method' | 'data'>) => void;
  delete: (href: string | URL, options?: Exclude<VisitOptions, 'method'>) => void;
}

declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    inertia: FormKitInertiaContext;
  }
}
