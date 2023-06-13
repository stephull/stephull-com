/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContactFormResult } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormResultUpdateFormInputValues = {
    success?: boolean;
    message?: string;
};
export declare type ContactFormResultUpdateFormValidationValues = {
    success?: ValidationFunction<boolean>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormResultUpdateFormOverridesProps = {
    ContactFormResultUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    success?: PrimitiveOverrideProps<SwitchFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormResultUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormResultUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactFormResult?: ContactFormResult;
    onSubmit?: (fields: ContactFormResultUpdateFormInputValues) => ContactFormResultUpdateFormInputValues;
    onSuccess?: (fields: ContactFormResultUpdateFormInputValues) => void;
    onError?: (fields: ContactFormResultUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormResultUpdateFormInputValues) => ContactFormResultUpdateFormInputValues;
    onValidate?: ContactFormResultUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormResultUpdateForm(props: ContactFormResultUpdateFormProps): React.ReactElement;
