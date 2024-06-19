import { DefineComponent } from 'vue';
import { MountingOptions } from './types';
export declare function createInstance(inputComponent: DefineComponent<{}, {}, any>, options?: MountingOptions<any> & Record<string, any>): {
    app: import("vue").App<Element>;
    el: HTMLDivElement;
    props: Record<string, unknown>;
    componentRef: import("vue").Ref<null>;
};
