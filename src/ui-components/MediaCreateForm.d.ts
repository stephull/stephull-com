/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MediaCreateFormInputValues = {
    type?: string;
    desc?: string;
    comments?: Comment[];
    likes?: number;
    albumID?: string;
    blogID?: string;
};
export declare type MediaCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    comments?: ValidationFunction<Comment>;
    likes?: ValidationFunction<number>;
    albumID?: ValidationFunction<string>;
    blogID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaCreateFormOverridesProps = {
    MediaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<AutocompleteProps>;
    likes?: PrimitiveOverrideProps<TextFieldProps>;
    albumID?: PrimitiveOverrideProps<AutocompleteProps>;
    blogID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MediaCreateFormProps = React.PropsWithChildren<{
    overrides?: MediaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onSuccess?: (fields: MediaCreateFormInputValues) => void;
    onError?: (fields: MediaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onValidate?: MediaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MediaCreateForm(props: MediaCreateFormProps): React.ReactElement;
