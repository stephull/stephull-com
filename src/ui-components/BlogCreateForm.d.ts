/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogCreateFormInputValues = {
    title?: string;
    paragraphs?: string[];
    externallinks?: string[];
    body?: string;
};
export declare type BlogCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    paragraphs?: ValidationFunction<string>;
    externallinks?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCreateFormOverridesProps = {
    BlogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    paragraphs?: PrimitiveOverrideProps<TextFieldProps>;
    externallinks?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onSuccess?: (fields: BlogCreateFormInputValues) => void;
    onError?: (fields: BlogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onValidate?: BlogCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogCreateForm(props: BlogCreateFormProps): React.ReactElement;
