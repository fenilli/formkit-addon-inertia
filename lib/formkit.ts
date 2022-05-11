import { FormKitInertiaContext } from './types';

declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    inertia: FormKitInertiaContext;
  }
}
