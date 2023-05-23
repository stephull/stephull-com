/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentCreateFormInputValues = {
    type?: string;
    source?: string;
    title?: string;
    mediatimelineitemID?: string;
    blogtimelineitemID?: string;
    src?: string;
};
export declare type ContentCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    mediatimelineitemID?: ValidationFunction<string>;
    blogtimelineitemID?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentCreateFormOverridesProps = {
    ContentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    mediatimelineitemID?: PrimitiveOverrideProps<AutocompleteProps>;
    blogtimelineitemID?: PrimitiveOverrideProps<AutocompleteProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentCreateFormProps = React.PropsWithChildren<{
    overrides?: ContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onSuccess?: (fields: ContentCreateFormInputValues) => void;
    onError?: (fields: ContentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onValidate?: ContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContentCreateForm(props: ContentCreateFormProps): React.ReactElement;
