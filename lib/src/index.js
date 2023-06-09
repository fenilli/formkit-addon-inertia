import { useInertia } from "./useInertia";

export const plugin = (node) => {
  if (node.props.type !== "form" || !node.context) return false;

  if (node.context) node.context.inertia = useInertia(node);
};

export { useInertia };

