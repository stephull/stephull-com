/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Blog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BlogCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    title: "",
    paragraphs: [],
    externallinks: [],
    body: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [paragraphs, setParagraphs] = React.useState(initialValues.paragraphs);
  const [externallinks, setExternallinks] = React.useState(
    initialValues.externallinks
  );
  const [body, setBody] = React.useState(initialValues.body);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setParagraphs(initialValues.paragraphs);
    setCurrentParagraphsValue("");
    setExternallinks(initialValues.externallinks);
    setCurrentExternallinksValue("");
    setBody(initialValues.body);
    setErrors({});
  };
  const [currentParagraphsValue, setCurrentParagraphsValue] =
    React.useState("");
  const paragraphsRef = React.createRef();
  const [currentExternallinksValue, setCurrentExternallinksValue] =
    React.useState("");
  const externallinksRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    paragraphs: [{ type: "Required" }],
    externallinks: [{ type: "URL" }],
    body: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          paragraphs,
          externallinks,
          body,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            paragraphs: modelFields.paragraphs,
            externallinks: modelFields.externallinks,
          };
          await DataStore.save(new Blog(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              paragraphs,
              externallinks,
              body,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              paragraphs: values,
              externallinks,
              body,
            };
            const result = onChange(modelFields);
            values = result?.paragraphs ?? values;
          }
          setParagraphs(values);
          setCurrentParagraphsValue("");
        }}
        currentFieldValue={currentParagraphsValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Paragraphs</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={paragraphs}
        hasError={errors?.paragraphs?.hasError}
        errorMessage={errors?.paragraphs?.errorMessage}
        setFieldValue={setCurrentParagraphsValue}
        inputFieldRef={paragraphsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Paragraphs"
          isRequired={true}
          isReadOnly={false}
          value={currentParagraphsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.paragraphs?.hasError) {
              runValidationTasks("paragraphs", value);
            }
            setCurrentParagraphsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("paragraphs", currentParagraphsValue)
          }
          errorMessage={errors.paragraphs?.errorMessage}
          hasError={errors.paragraphs?.hasError}
          ref={paragraphsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "paragraphs")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              paragraphs,
              externallinks: values,
              body,
            };
            const result = onChange(modelFields);
            values = result?.externallinks ?? values;
          }
          setExternallinks(values);
          setCurrentExternallinksValue("");
        }}
        currentFieldValue={currentExternallinksValue}
        label={"Externallinks"}
        items={externallinks}
        hasError={errors?.externallinks?.hasError}
        errorMessage={errors?.externallinks?.errorMessage}
        setFieldValue={setCurrentExternallinksValue}
        inputFieldRef={externallinksRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Externallinks"
          isRequired={false}
          isReadOnly={false}
          value={currentExternallinksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.externallinks?.hasError) {
              runValidationTasks("externallinks", value);
            }
            setCurrentExternallinksValue(value);
          }}
          onBlur={() =>
            runValidationTasks("externallinks", currentExternallinksValue)
          }
          errorMessage={errors.externallinks?.errorMessage}
          hasError={errors.externallinks?.hasError}
          ref={externallinksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "externallinks")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Add paragraph"
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              paragraphs,
              externallinks,
              body: value,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Create"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
