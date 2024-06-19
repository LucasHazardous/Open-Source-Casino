import { ConcreteComponent, transformVNodeArgs } from 'vue';
type VNodeArgsTransformerFn = NonNullable<Parameters<typeof transformVNodeArgs>[0]>;
type TransformVNodeArgs = Parameters<VNodeArgsTransformerFn>;
type VNodeTransformerArgsType = TransformVNodeArgs[0];
type InstanceArgsType = TransformVNodeArgs[1];
type VNodeTransformerInputType = VNodeTransformerArgsType[0];
type ExtractComponentTypes<T> = T extends ConcreteComponent ? T : never;
type VNodeTransformerInputComponentType = ExtractComponentTypes<VNodeTransformerInputType>;
export type VTUVNodeTypeTransformer = (inputType: VNodeTransformerInputComponentType, instance: InstanceArgsType) => VNodeTransformerInputComponentType;
export declare const isTeleport: (type: any) => boolean;
export declare const isKeepAlive: (type: any) => boolean;
export declare const createVNodeTransformer: ({ transformers }: {
    transformers: VTUVNodeTypeTransformer[];
}) => VNodeArgsTransformerFn;
export {};
