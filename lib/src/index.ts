import { FormKitNode } from '@formkit/core';
import { useInertia, FormKitAddonInertiaVisits } from './useInertia';
declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    inertia: FormKitAddonInertiaVisits;
  }
};

export const plugin = (node: FormKitNode) => {
  if (node.props.type !== 'form' || !node.context) return false;

  if (node.context) node.context.inertia = useInertia(node);
};

export { useInertia };
