import { FunctionalComponent, ComponentOptionsWithObjectProps, ComponentOptionsWithArrayProps, ComponentOptionsWithoutProps, ExtractPropTypes, VNodeProps, ComponentOptionsMixin, DefineComponent, MethodOptions, AllowedComponentProps, ComponentCustomProps, ExtractDefaultPropTypes, EmitsOptions, ComputedOptions, ComponentPropsOptions, Prop } from 'vue';
import { MountingOptions } from './types';
type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;
type ComponentMountingOptions<T> = T extends DefineComponent<infer PropsOrPropOptions, any, infer D, any, any> ? MountingOptions<Partial<ExtractDefaultPropTypes<PropsOrPropOptions>> & Omit<Readonly<ExtractPropTypes<PropsOrPropOptions>> & PublicProps, keyof ExtractDefaultPropTypes<PropsOrPropOptions>>, D> & Record<string, any> : MountingOptions<any>;
export declare function renderToString<V extends {}>(originalComponent: {
    new (...args: any[]): V;
    __vccOpts: any;
}, options?: MountingOptions<any> & Record<string, any>): Promise<string>;
export declare function renderToString<V extends {}, P>(originalComponent: {
    new (...args: any[]): V;
    __vccOpts: any;
    defaultProps?: Record<string, Prop<any>> | string[];
}, options?: MountingOptions<P & PublicProps> & Record<string, any>): Promise<string>;
export declare function renderToString<V extends {}>(originalComponent: {
    new (...args: any[]): V;
    registerHooks(keys: string[]): void;
}, options?: MountingOptions<any> & Record<string, any>): Promise<string>;
export declare function renderToString<V extends {}, P>(originalComponent: {
    new (...args: any[]): V;
    props(Props: P): any;
    registerHooks(keys: string[]): void;
}, options?: MountingOptions<P & PublicProps> & Record<string, any>): Promise<string>;
export declare function renderToString<Props extends {}, E extends EmitsOptions = {}>(originalComponent: FunctionalComponent<Props, E>, options?: MountingOptions<Props & PublicProps> & Record<string, any>): Promise<string>;
export declare function renderToString<PropsOrPropOptions = {}, RawBindings = {}, D = {}, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string, PP = PublicProps, Props = Readonly<ExtractPropTypes<PropsOrPropOptions>>, Defaults extends {} = ExtractDefaultPropTypes<PropsOrPropOptions>>(component: DefineComponent<PropsOrPropOptions, RawBindings, D, C, M, Mixin, Extends, E, EE, PP, Props, Defaults>, options?: MountingOptions<Partial<Defaults> & Omit<Props & PublicProps, keyof Defaults>, D> & Record<string, any>): Promise<string>;
export declare function renderToString<T extends DefineComponent<any, any, any, any, any>>(component: T, options?: ComponentMountingOptions<T>): Promise<string>;
export declare function renderToString<Props = {}, RawBindings = {}, D extends {} = {}, C extends ComputedOptions = {}, M extends Record<string, Function> = {}, E extends EmitsOptions = Record<string, any>, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, EE extends string = string>(componentOptions: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, E, Mixin, Extends, EE>, options?: MountingOptions<Props & PublicProps, D>): Promise<string>;
export declare function renderToString<PropNames extends string, RawBindings, D extends {}, C extends ComputedOptions = {}, M extends Record<string, Function> = {}, E extends EmitsOptions = Record<string, any>, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, EE extends string = string, Props extends Readonly<{
    [key in PropNames]?: any;
}> = Readonly<{
    [key in PropNames]?: any;
}>>(componentOptions: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, E, Mixin, Extends, EE, Props>, options?: MountingOptions<Props & PublicProps, D>): Promise<string>;
export declare function renderToString<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D extends {}, C extends ComputedOptions = {}, M extends Record<string, Function> = {}, E extends EmitsOptions = Record<string, any>, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, EE extends string = string>(componentOptions: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, E, Mixin, Extends, EE>, options?: MountingOptions<ExtractPropTypes<PropsOptions> & PublicProps, D>): Promise<string>;
export {};
