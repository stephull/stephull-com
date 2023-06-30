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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Comment, Album, Media, Blog } from "../models";
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
export default function CommentUpdateForm(props) {
  const {
    id: idProp,
    comment: commentModelProp,
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
    body: "",
    albumID: undefined,
    mediaID: undefined,
    blogID: undefined,
    blogtimelineitemID: undefined,
    mediatimelineitemID: undefined,
  };
  const [body, setBody] = React.useState(initialValues.body);
  const [albumID, setAlbumID] = React.useState(initialValues.albumID);
  const [mediaID, setMediaID] = React.useState(initialValues.mediaID);
  const [blogID, setBlogID] = React.useState(initialValues.blogID);
  const [blogtimelineitemID, setBlogtimelineitemID] = React.useState(
    initialValues.blogtimelineitemID
  );
  const [mediatimelineitemID, setMediatimelineitemID] = React.useState(
    initialValues.mediatimelineitemID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = commentRecord
      ? { ...initialValues, ...commentRecord, albumID, mediaID, blogID }
      : initialValues;
    setBody(cleanValues.body);
    setAlbumID(cleanValues.albumID);
    setCurrentAlbumIDValue(undefined);
    setCurrentAlbumIDDisplayValue("");
    setMediaID(cleanValues.mediaID);
    setCurrentMediaIDValue(undefined);
    setCurrentMediaIDDisplayValue("");
    setBlogID(cleanValues.blogID);
    setCurrentBlogIDValue(undefined);
    setCurrentBlogIDDisplayValue("");
    setBlogtimelineitemID(cleanValues.blogtimelineitemID);
    setMediatimelineitemID(cleanValues.mediatimelineitemID);
    setErrors({});
  };
  const [commentRecord, setCommentRecord] = React.useState(commentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Comment, idProp)
        : commentModelProp;
      setCommentRecord(record);
      const albumIDRecord = record ? await record.albumID : undefined;
      setAlbumID(albumIDRecord);
      const mediaIDRecord = record ? await record.mediaID : undefined;
      setMediaID(mediaIDRecord);
      const blogIDRecord = record ? await record.blogID : undefined;
      setBlogID(blogIDRecord);
    };
    queryData();
  }, [idProp, commentModelProp]);
  React.useEffect(resetStateValues, [commentRecord, albumID, mediaID, blogID]);
  const [currentAlbumIDDisplayValue, setCurrentAlbumIDDisplayValue] =
    React.useState("");
  const [currentAlbumIDValue, setCurrentAlbumIDValue] =
    React.useState(undefined);
  const albumIDRef = React.createRef();
  const [currentMediaIDDisplayValue, setCurrentMediaIDDisplayValue] =
    React.useState("");
  const [currentMediaIDValue, setCurrentMediaIDValue] =
    React.useState(undefined);
  const mediaIDRef = React.createRef();
  const [currentBlogIDDisplayValue, setCurrentBlogIDDisplayValue] =
    React.useState("");
  const [currentBlogIDValue, setCurrentBlogIDValue] = React.useState(undefined);
  const blogIDRef = React.createRef();
  const albumRecords = useDataStoreBinding({
    type: "collection",
    model: Album,
  }).items;
  const mediaRecords = useDataStoreBinding({
    type: "collection",
    model: Media,
  }).items;
  const blogRecords = useDataStoreBinding({
    type: "collection",
    model: Blog,
  }).items;
  const getDisplayValue = {
    albumID: (r) => `${r?.desc ? r?.desc + " - " : ""}${r?.id}`,
    mediaID: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    blogID: (r) => `${r?.paragraphs ? r?.paragraphs + " - " : ""}${r?.id}`,
  };
  const validations = {
    body: [{ type: "Required" }],
    albumID: [{ type: "Required" }],
    mediaID: [{ type: "Required" }],
    blogID: [{ type: "Required" }],
    blogtimelineitemID: [],
    mediatimelineitemID: [],
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
          body,
          albumID,
          mediaID,
          blogID,
          blogtimelineitemID,
          mediatimelineitemID,
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
            body: modelFields.body,
            albumID: modelFields.albumID,
            mediaID: modelFields.mediaID,
            blogID: modelFields.blogID,
          };
          await DataStore.save(
            Comment.copyOf(commentRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CommentUpdateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Comment body</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body: value,
              albumID,
              mediaID,
              blogID,
              blogtimelineitemID,
              mediatimelineitemID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              body,
              albumID: value,
              mediaID,
              blogID,
              blogtimelineitemID,
              mediatimelineitemID,
            };
            const result = onChange(modelFields);
            value = result?.albumID ?? value;
          }
          setAlbumID(value);
          setCurrentAlbumIDValue(undefined);
        }}
        currentFieldValue={currentAlbumIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Album id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={albumID ? [albumID] : []}
        hasError={errors?.albumID?.hasError}
        errorMessage={errors?.albumID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.albumID(albumRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentAlbumIDDisplayValue(
            value
              ? getDisplayValue.albumID(
                  albumRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentAlbumIDValue(value);
        }}
        inputFieldRef={albumIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Album id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Album"
          value={currentAlbumIDDisplayValue}
          options={albumRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.albumID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAlbumIDValue(id);
            setCurrentAlbumIDDisplayValue(label);
            runValidationTasks("albumID", label);
          }}
          onClear={() => {
            setCurrentAlbumIDDisplayValue("");
          }}
          defaultValue={albumID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.albumID?.hasError) {
              runValidationTasks("albumID", value);
            }
            setCurrentAlbumIDDisplayValue(value);
            setCurrentAlbumIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("albumID", currentAlbumIDValue)}
          errorMessage={errors.albumID?.errorMessage}
          hasError={errors.albumID?.hasError}
          ref={albumIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "albumID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              body,
              albumID,
              mediaID: value,
              blogID,
              blogtimelineitemID,
              mediatimelineitemID,
            };
            const result = onChange(modelFields);
            value = result?.mediaID ?? value;
          }
          setMediaID(value);
          setCurrentMediaIDValue(undefined);
        }}
        currentFieldValue={currentMediaIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Media id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={mediaID ? [mediaID] : []}
        hasError={errors?.mediaID?.hasError}
        errorMessage={errors?.mediaID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.mediaID(mediaRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMediaIDDisplayValue(
            value
              ? getDisplayValue.mediaID(
                  mediaRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMediaIDValue(value);
        }}
        inputFieldRef={mediaIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Media id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Media"
          value={currentMediaIDDisplayValue}
          options={mediaRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.mediaID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMediaIDValue(id);
            setCurrentMediaIDDisplayValue(label);
            runValidationTasks("mediaID", label);
          }}
          onClear={() => {
            setCurrentMediaIDDisplayValue("");
          }}
          defaultValue={mediaID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.mediaID?.hasError) {
              runValidationTasks("mediaID", value);
            }
            setCurrentMediaIDDisplayValue(value);
            setCurrentMediaIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("mediaID", currentMediaIDValue)}
          errorMessage={errors.mediaID?.errorMessage}
          hasError={errors.mediaID?.hasError}
          ref={mediaIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mediaID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              body,
              albumID,
              mediaID,
              blogID: value,
              blogtimelineitemID,
              mediatimelineitemID,
            };
            const result = onChange(modelFields);
            value = result?.blogID ?? value;
          }
          setBlogID(value);
          setCurrentBlogIDValue(undefined);
        }}
        currentFieldValue={currentBlogIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Blog id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={blogID ? [blogID] : []}
        hasError={errors?.blogID?.hasError}
        errorMessage={errors?.blogID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.blogID(blogRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentBlogIDDisplayValue(
            value
              ? getDisplayValue.blogID(blogRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentBlogIDValue(value);
        }}
        inputFieldRef={blogIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Blog id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Blog"
          value={currentBlogIDDisplayValue}
          options={blogRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.blogID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogIDValue(id);
            setCurrentBlogIDDisplayValue(label);
            runValidationTasks("blogID", label);
          }}
          onClear={() => {
            setCurrentBlogIDDisplayValue("");
          }}
          defaultValue={blogID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogID?.hasError) {
              runValidationTasks("blogID", value);
            }
            setCurrentBlogIDDisplayValue(value);
            setCurrentBlogIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("blogID", currentBlogIDValue)}
          errorMessage={errors.blogID?.errorMessage}
          hasError={errors.blogID?.hasError}
          ref={blogIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogID")}
        ></Autocomplete>
      </ArrayField>
      <Autocomplete
        label="Blog ID"
        placeholder="Search Blog"
        options={[]}
        onSelect={({ id, label }) => {
          setBlogtimelineitemID(id);
          runValidationTasks("blogtimelineitemID", id);
        }}
        onClear={() => {
          setBlogtimelineitemID("");
        }}
        defaultValue={blogtimelineitemID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body,
              albumID,
              mediaID,
              blogID,
              blogtimelineitemID: value,
              mediatimelineitemID,
            };
            const result = onChange(modelFields);
            value = result?.blogtimelineitemID ?? value;
          }
          if (errors.blogtimelineitemID?.hasError) {
            runValidationTasks("blogtimelineitemID", value);
          }
          setBlogtimelineitemID(value);
        }}
        onBlur={() =>
          runValidationTasks("blogtimelineitemID", blogtimelineitemID)
        }
        errorMessage={errors.blogtimelineitemID?.errorMessage}
        hasError={errors.blogtimelineitemID?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "blogtimelineitemID")}
      ></Autocomplete>
      <Autocomplete
        label="Media Content ID"
        placeholder="Search Media Content"
        options={[]}
        onSelect={({ id, label }) => {
          setMediatimelineitemID(id);
          runValidationTasks("mediatimelineitemID", id);
        }}
        onClear={() => {
          setMediatimelineitemID("");
        }}
        defaultValue={mediatimelineitemID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body,
              albumID,
              mediaID,
              blogID,
              blogtimelineitemID,
              mediatimelineitemID: value,
            };
            const result = onChange(modelFields);
            value = result?.mediatimelineitemID ?? value;
          }
          if (errors.mediatimelineitemID?.hasError) {
            runValidationTasks("mediatimelineitemID", value);
          }
          setMediatimelineitemID(value);
        }}
        onBlur={() =>
          runValidationTasks("mediatimelineitemID", mediatimelineitemID)
        }
        errorMessage={errors.mediatimelineitemID?.errorMessage}
        hasError={errors.mediatimelineitemID?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "mediatimelineitemID")}
      ></Autocomplete>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || commentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Update"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || commentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
