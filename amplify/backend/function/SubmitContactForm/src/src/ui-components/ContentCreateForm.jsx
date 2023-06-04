/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Content, MediaTimelineItem, BlogTimelineItem } from "../models";
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
export default function ContentCreateForm(props) {
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
    type: "",
    source: "",
    title: "",
    mediatimelineitemID: undefined,
    blogtimelineitemID: undefined,
    src: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [source, setSource] = React.useState(initialValues.source);
  const [title, setTitle] = React.useState(initialValues.title);
  const [mediatimelineitemID, setMediatimelineitemID] = React.useState(
    initialValues.mediatimelineitemID
  );
  const [blogtimelineitemID, setBlogtimelineitemID] = React.useState(
    initialValues.blogtimelineitemID
  );
  const [src, setSrc] = React.useState(initialValues.src);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setSource(initialValues.source);
    setTitle(initialValues.title);
    setMediatimelineitemID(initialValues.mediatimelineitemID);
    setCurrentMediatimelineitemIDValue(undefined);
    setCurrentMediatimelineitemIDDisplayValue("");
    setBlogtimelineitemID(initialValues.blogtimelineitemID);
    setCurrentBlogtimelineitemIDValue(undefined);
    setCurrentBlogtimelineitemIDDisplayValue("");
    setSrc(initialValues.src);
    setErrors({});
  };
  const [
    currentMediatimelineitemIDDisplayValue,
    setCurrentMediatimelineitemIDDisplayValue,
  ] = React.useState("");
  const [currentMediatimelineitemIDValue, setCurrentMediatimelineitemIDValue] =
    React.useState(undefined);
  const mediatimelineitemIDRef = React.createRef();
  const [
    currentBlogtimelineitemIDDisplayValue,
    setCurrentBlogtimelineitemIDDisplayValue,
  ] = React.useState("");
  const [currentBlogtimelineitemIDValue, setCurrentBlogtimelineitemIDValue] =
    React.useState(undefined);
  const blogtimelineitemIDRef = React.createRef();
  const mediaTimelineItemRecords = useDataStoreBinding({
    type: "collection",
    model: MediaTimelineItem,
  }).items;
  const blogTimelineItemRecords = useDataStoreBinding({
    type: "collection",
    model: BlogTimelineItem,
  }).items;
  const getDisplayValue = {
    mediatimelineitemID: (r) =>
      `${r?.description ? r?.description + " - " : ""}${r?.id}`,
    blogtimelineitemID: (r) => `${r?.stars ? r?.stars + " - " : ""}${r?.id}`,
  };
  const validations = {
    type: [{ type: "Required" }],
    source: [{ type: "Required" }],
    title: [],
    mediatimelineitemID: [],
    blogtimelineitemID: [],
    src: [],
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
          type,
          source,
          title,
          mediatimelineitemID,
          blogtimelineitemID,
          src,
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
            type: modelFields.type,
            source: modelFields.source,
            title: modelFields.title,
            mediatimelineitemID: modelFields.mediatimelineitemID,
            blogtimelineitemID: modelFields.blogtimelineitemID,
          };
          await DataStore.save(new Content(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "ContentCreateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              source,
              title,
              mediatimelineitemID,
              blogtimelineitemID,
              src,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Image"
          value="IMAGE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Source</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              source: value,
              title,
              mediatimelineitemID,
              blogtimelineitemID,
              src,
            };
            const result = onChange(modelFields);
            value = result?.source ?? value;
          }
          if (errors.source?.hasError) {
            runValidationTasks("source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("source", source)}
        errorMessage={errors.source?.errorMessage}
        hasError={errors.source?.hasError}
        {...getOverrideProps(overrides, "source")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              source,
              title: value,
              mediatimelineitemID,
              blogtimelineitemID,
              src,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              type,
              source,
              title,
              mediatimelineitemID: value,
              blogtimelineitemID,
              src,
            };
            const result = onChange(modelFields);
            value = result?.mediatimelineitemID ?? value;
          }
          setMediatimelineitemID(value);
          setCurrentMediatimelineitemIDValue(undefined);
        }}
        currentFieldValue={currentMediatimelineitemIDValue}
        label={"Media Content ID"}
        items={mediatimelineitemID ? [mediatimelineitemID] : []}
        hasError={errors?.mediatimelineitemID?.hasError}
        errorMessage={errors?.mediatimelineitemID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.mediatimelineitemID(
                mediaTimelineItemRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMediatimelineitemIDDisplayValue(
            value
              ? getDisplayValue.mediatimelineitemID(
                  mediaTimelineItemRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMediatimelineitemIDValue(value);
        }}
        inputFieldRef={mediatimelineitemIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Media Content ID"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Media Content (if applicable)"
          value={currentMediatimelineitemIDDisplayValue}
          options={mediaTimelineItemRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.mediatimelineitemID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMediatimelineitemIDValue(id);
            setCurrentMediatimelineitemIDDisplayValue(label);
            runValidationTasks("mediatimelineitemID", label);
          }}
          onClear={() => {
            setCurrentMediatimelineitemIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.mediatimelineitemID?.hasError) {
              runValidationTasks("mediatimelineitemID", value);
            }
            setCurrentMediatimelineitemIDDisplayValue(value);
            setCurrentMediatimelineitemIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "mediatimelineitemID",
              currentMediatimelineitemIDValue
            )
          }
          errorMessage={errors.mediatimelineitemID?.errorMessage}
          hasError={errors.mediatimelineitemID?.hasError}
          ref={mediatimelineitemIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mediatimelineitemID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              type,
              source,
              title,
              mediatimelineitemID,
              blogtimelineitemID: value,
              src,
            };
            const result = onChange(modelFields);
            value = result?.blogtimelineitemID ?? value;
          }
          setBlogtimelineitemID(value);
          setCurrentBlogtimelineitemIDValue(undefined);
        }}
        currentFieldValue={currentBlogtimelineitemIDValue}
        label={"Blog ID"}
        items={blogtimelineitemID ? [blogtimelineitemID] : []}
        hasError={errors?.blogtimelineitemID?.hasError}
        errorMessage={errors?.blogtimelineitemID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.blogtimelineitemID(
                blogTimelineItemRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentBlogtimelineitemIDDisplayValue(
            value
              ? getDisplayValue.blogtimelineitemID(
                  blogTimelineItemRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentBlogtimelineitemIDValue(value);
        }}
        inputFieldRef={blogtimelineitemIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog ID"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Blog (if applicable)"
          value={currentBlogtimelineitemIDDisplayValue}
          options={blogTimelineItemRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.blogtimelineitemID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogtimelineitemIDValue(id);
            setCurrentBlogtimelineitemIDDisplayValue(label);
            runValidationTasks("blogtimelineitemID", label);
          }}
          onClear={() => {
            setCurrentBlogtimelineitemIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogtimelineitemID?.hasError) {
              runValidationTasks("blogtimelineitemID", value);
            }
            setCurrentBlogtimelineitemIDDisplayValue(value);
            setCurrentBlogtimelineitemIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "blogtimelineitemID",
              currentBlogtimelineitemIDValue
            )
          }
          errorMessage={errors.blogtimelineitemID?.errorMessage}
          hasError={errors.blogtimelineitemID?.hasError}
          ref={blogtimelineitemIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogtimelineitemID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Source"
        value={src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              source,
              title,
              mediatimelineitemID,
              blogtimelineitemID,
              src: value,
            };
            const result = onChange(modelFields);
            value = result?.src ?? value;
          }
          if (errors.src?.hasError) {
            runValidationTasks("src", value);
          }
          setSrc(value);
        }}
        onBlur={() => runValidationTasks("src", src)}
        errorMessage={errors.src?.errorMessage}
        hasError={errors.src?.hasError}
        {...getOverrideProps(overrides, "src")}
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
