/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormResultCreateFormInputValues = {
    success?: boolean;
    message?: string;
};
export declare type ContactFormResultCreateFormValidationValues = {
    success?: ValidationFunction<boolean>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormResultCreateFormOverridesProps = {
    ContactFormResultCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    success?: PrimitiveOverrideProps<SwitchFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormResultCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormResultCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactFormResultCreateFormInputValues) => ContactFormResultCreateFormInputValues;
    onSuccess?: (fields: ContactFormResultCreateFormInputValues) => void;
    onError?: (fields: ContactFormResultCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormResultCreateFormInputValues) => ContactFormResultCreateFormInputValues;
    onValidate?: ContactFormResultCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormResultCreateForm(props: ContactFormResultCreateFormProps): React.ReactElement;
