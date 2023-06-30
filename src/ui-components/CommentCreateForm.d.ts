/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentCreateFormInputValues = {
    body?: string;
    albumID?: string;
    mediaID?: string;
    blogID?: string;
    blogtimelineitemID?: string;
    mediatimelineitemID?: string;
};
export declare type CommentCreateFormValidationValues = {
    body?: ValidationFunction<string>;
    albumID?: ValidationFunction<string>;
    mediaID?: ValidationFunction<string>;
    blogID?: ValidationFunction<string>;
    blogtimelineitemID?: ValidationFunction<string>;
    mediatimelineitemID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCreateFormOverridesProps = {
    CommentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    albumID?: PrimitiveOverrideProps<AutocompleteProps>;
    mediaID?: PrimitiveOverrideProps<AutocompleteProps>;
    blogID?: PrimitiveOverrideProps<AutocompleteProps>;
    blogtimelineitemID?: PrimitiveOverrideProps<AutocompleteProps>;
    mediatimelineitemID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CommentCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onSuccess?: (fields: CommentCreateFormInputValues) => void;
    onError?: (fields: CommentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentCreateFormInputValues) => CommentCreateFormInputValues;
    onValidate?: CommentCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentCreateForm(props: CommentCreateFormProps): React.ReactElement;
