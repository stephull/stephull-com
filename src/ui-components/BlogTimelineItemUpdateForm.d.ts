/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BlogTimelineItem, Blog, Comment, Content } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogTimelineItemUpdateFormInputValues = {
    blogsource?: Blog;
    createdAt?: string;
    stars?: number;
    blogcomments?: Comment[];
    blogcontents?: Content[];
};
export declare type BlogTimelineItemUpdateFormValidationValues = {
    blogsource?: ValidationFunction<Blog>;
    createdAt?: ValidationFunction<string>;
    stars?: ValidationFunction<number>;
    blogcomments?: ValidationFunction<Comment>;
    blogcontents?: ValidationFunction<Content>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogTimelineItemUpdateFormOverridesProps = {
    BlogTimelineItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    blogsource?: PrimitiveOverrideProps<AutocompleteProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    stars?: PrimitiveOverrideProps<TextFieldProps>;
    blogcomments?: PrimitiveOverrideProps<AutocompleteProps>;
    blogcontents?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BlogTimelineItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogTimelineItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogTimelineItem?: BlogTimelineItem;
    onSubmit?: (fields: BlogTimelineItemUpdateFormInputValues) => BlogTimelineItemUpdateFormInputValues;
    onSuccess?: (fields: BlogTimelineItemUpdateFormInputValues) => void;
    onError?: (fields: BlogTimelineItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogTimelineItemUpdateFormInputValues) => BlogTimelineItemUpdateFormInputValues;
    onValidate?: BlogTimelineItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogTimelineItemUpdateForm(props: BlogTimelineItemUpdateFormProps): React.ReactElement;
