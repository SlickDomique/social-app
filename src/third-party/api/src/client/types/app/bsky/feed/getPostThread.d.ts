import { Headers } from '@atproto/xrpc';
export interface QueryParams {
    uri: string;
    depth?: number;
}
export interface CallOptions {
    headers?: Headers;
}
export declare type InputSchema = undefined;
export interface OutputSchema {
    thread: Post;
}
export interface Post {
    uri: string;
    cid: string;
    author: User;
    record: {};
    embed?: RecordEmbed | ExternalEmbed | UnknownEmbed;
    parent?: Post;
    replyCount: number;
    replies?: Post[];
    repostCount: number;
    upvoteCount: number;
    downvoteCount: number;
    indexedAt: string;
    myState?: {
        repost?: string;
        upvote?: string;
        downvote?: string;
    };
}
export interface User {
    did: string;
    handle: string;
    displayName?: string;
}
export interface RecordEmbed {
    type: 'record';
    author: User;
    record: {};
}
export interface ExternalEmbed {
    type: 'external';
    uri: string;
    title: string;
    description: string;
    imageUri: string;
}
export interface UnknownEmbed {
    type: string;
}
export interface Response {
    success: boolean;
    headers: Headers;
    data: OutputSchema;
}
export declare function toKnownErr(e: any): any;