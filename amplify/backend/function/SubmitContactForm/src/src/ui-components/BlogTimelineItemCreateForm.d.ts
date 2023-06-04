/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Blog, Comment, Content } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogTimelineItemCreateFormInputValues = {
    blogsource?: Blog;
    createdAt?: string;
    stars?: number;
    blogcomments?: Comment[];
    blogcontents?: Content[];
};
export declare type BlogTimelineItemCreateFormValidationValues = {
    blogsource?: ValidationFunction<Blog>;
    createdAt?: ValidationFunction<string>;
    stars?: ValidationFunction<number>;
    blogcomments?: ValidationFunction<Comment>;
    blogcontents?: ValidationFunction<Content>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogTimelineItemCreateFormOverridesProps = {
    BlogTimelineItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    blogsource?: PrimitiveOverrideProps<AutocompleteProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    stars?: PrimitiveOverrideProps<TextFieldProps>;
    blogcomments?: PrimitiveOverrideProps<AutocompleteProps>;
    blogcontents?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BlogTimelineItemCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogTimelineItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogTimelineItemCreateFormInputValues) => BlogTimelineItemCreateFormInputValues;
    onSuccess?: (fields: BlogTimelineItemCreateFormInputValues) => void;
    onError?: (fields: BlogTimelineItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogTimelineItemCreateFormInputValues) => BlogTimelineItemCreateFormInputValues;
    onValidate?: BlogTimelineItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogTimelineItemCreateForm(props: BlogTimelineItemCreateFormProps): React.ReactElement;
