import { AnchorHTMLAttributes, type HTMLAttributes } from 'react';

export * from './chatMessage';
export * from './customStylish';
export * from './customToken';
export * from './llm';
export * from './meta';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export type VideoProps = HTMLAttributes<HTMLVideoElement>;

export type SvgProps = HTMLAttributes<SVGSVGElement>;

export type ImgProps = HTMLAttributes<HTMLImageElement>;

export type AProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type InputProps = HTMLAttributes<HTMLInputElement>;

export type TextAreaProps = HTMLAttributes<HTMLTextAreaElement>;
