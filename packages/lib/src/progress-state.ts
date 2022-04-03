import { Progress } from "@inertiajs/inertia";
import { FormKitContext } from "@formkit/core";

export const onProgressProgress = (node: FormKitContext, progress: Progress) => {
  node.context.progress = progress;
};

export const onProgressFinish = (node: FormKitContext) => {
  node.context.progress = null;
};
