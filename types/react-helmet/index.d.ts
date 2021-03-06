// Type definitions for react-helmet 5.0
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>
//                 Isman Usoh <https://github.com/isman-usoh>
//                 François Nguyen <https://github.com/lith-light-g>
//                 Kok Sam <https://github.com/sammkj>
//                 Yui T. <https://github.com/yuit>
//                 Yamagishi Kazutoshi <https://github.com/ykzts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

type HtmlProps = JSX.IntrinsicElements['html'];

type BodyProps = JSX.IntrinsicElements['body']

type LinkProps = JSX.IntrinsicElements['link'];

type MetaProps = JSX.IntrinsicElements['meta'];

export interface HelmetTags {
    baseTag: Array<any>;
    linkTags: Array<HTMLLinkElement>;
    metaTags: Array<HTMLMetaElement>;
    noscriptTags: Array<any>;
    scriptTags: Array<HTMLScriptElement>;
    styleTags: Array<HTMLStyleElement>;
}

export interface HelmetProps {
    async?: boolean;
    base?: any;
    bodyAttributes?: BodyProps;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    htmlAttributes?: HtmlProps;
    onChangeClientState?: (
        newState: any,
        addedTags: HelmetTags,
        removedTags: HelmetTags,
    ) => void;
    link?: LinkProps[];
    meta?: MetaProps[];
    noscript?: Array<any>;
    script?: Array<any>;
    style?: Array<any>;
    title?: string;
    titleAttributes?: Object;
    titleTemplate?: string;
}

export class Helmet extends React.Component<HelmetProps> {
    static peek(): HelmetData;
    static rewind(): HelmetData;
    static renderStatic(): HelmetData;
    static canUseDOM: boolean;
}

export interface HelmetData {
    base: HelmetDatum;
    bodyAttributes: HelmetHTMLBodyDatum;
    htmlAttributes: HelmetHTMLElementDatum;
    link: HelmetDatum;
    meta: HelmetDatum;
    noscript: HelmetDatum;
    script: HelmetDatum;
    style: HelmetDatum;
    title: HelmetDatum;
    titleAttributes: HelmetDatum;
}

export interface HelmetDatum {
    toString(): string;
    toComponent(): React.Component<any>;
}

export interface HelmetHTMLBodyDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLBodyElement>;
}

export interface HelmetHTMLElementDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLHtmlElement>;
}

export const peek: () => HelmetData;
export const rewind: () => HelmetData;
export const renderStatic: () => HelmetData;
export const canUseDOM: boolean;
export default Helmet;
