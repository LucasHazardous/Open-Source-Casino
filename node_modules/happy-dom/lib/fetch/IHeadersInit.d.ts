import IHeaders from './IHeaders';
declare type IHeadersInit = string[][] | {
    [key: string]: string;
} | IHeaders;
export default IHeadersInit;
