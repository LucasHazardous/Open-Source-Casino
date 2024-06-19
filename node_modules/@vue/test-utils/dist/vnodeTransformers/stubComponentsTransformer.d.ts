import { VTUVNodeTypeTransformer } from './util';
import { Teleport, KeepAlive, VNodeTypes, ConcreteComponent, DefineComponent, Component } from 'vue';
export type CustomCreateStub = (params: {
    name: string;
    component: ConcreteComponent;
}) => ConcreteComponent;
interface StubOptions {
    name: string;
    type?: VNodeTypes | typeof Teleport | typeof KeepAlive;
    renderStubDefaultSlot?: boolean;
}
export declare const addToDoNotStubComponents: (type: ConcreteComponent) => WeakSet<ConcreteComponent<{}, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
export declare const createStub: ({ name, type, renderStubDefaultSlot }: StubOptions) => DefineComponent;
interface CreateStubComponentsTransformerConfig {
    stubs?: Record<string, Component | boolean>;
    shallow?: boolean;
    renderStubDefaultSlot: boolean;
}
export declare function createStubComponentsTransformer({ stubs, shallow, renderStubDefaultSlot }: CreateStubComponentsTransformerConfig): VTUVNodeTypeTransformer;
export {};
