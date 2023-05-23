/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comment, Content } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MediaTimelineItemCreateFormInputValues = {
    description?: string;
    createdAt?: string;
    stars?: number;
    mediacomments?: Comment[];
    mediacontents?: Content[];
    desc?: string;
};
export declare type MediaTimelineItemCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    stars?: ValidationFunction<number>;
    mediacomments?: ValidationFunction<Comment>;
    mediacontents?: ValidationFunction<Content>;
    desc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaTimelineItemCreateFormOverridesProps = {
    MediaTimelineItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    stars?: PrimitiveOverrideProps<TextFieldProps>;
    mediacomments?: PrimitiveOverrideProps<AutocompleteProps>;
    mediacontents?: PrimitiveOverrideProps<AutocompleteProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediaTimelineItemCreateFormProps = React.PropsWithChildren<{
    overrides?: MediaTimelineItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MediaTimelineItemCreateFormInputValues) => MediaTimelineItemCreateFormInputValues;
    onSuccess?: (fields: MediaTimelineItemCreateFormInputValues) => void;
    onError?: (fields: MediaTimelineItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaTimelineItemCreateFormInputValues) => MediaTimelineItemCreateFormInputValues;
    onValidate?: MediaTimelineItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function MediaTimelineItemCreateForm(props: MediaTimelineItemCreateFormProps): React.ReactElement;
