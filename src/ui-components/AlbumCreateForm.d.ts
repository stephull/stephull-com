/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comment, Media } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AlbumCreateFormInputValues = {
    desc?: string;
    comments?: Comment[];
    media?: Media[];
    likes?: number;
};
export declare type AlbumCreateFormValidationValues = {
    desc?: ValidationFunction<string>;
    comments?: ValidationFunction<Comment>;
    media?: ValidationFunction<Media>;
    likes?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AlbumCreateFormOverridesProps = {
    AlbumCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<AutocompleteProps>;
    media?: PrimitiveOverrideProps<AutocompleteProps>;
    likes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AlbumCreateFormProps = React.PropsWithChildren<{
    overrides?: AlbumCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AlbumCreateFormInputValues) => AlbumCreateFormInputValues;
    onSuccess?: (fields: AlbumCreateFormInputValues) => void;
    onError?: (fields: AlbumCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AlbumCreateFormInputValues) => AlbumCreateFormInputValues;
    onValidate?: AlbumCreateFormValidationValues;
} & React.CSSProperties>;
export default function AlbumCreateForm(props: AlbumCreateFormProps): React.ReactElement;
