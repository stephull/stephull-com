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
import { Media, Comment, Album, Blog } from "../models";
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
export default function MediaCreateForm(props) {
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
  const initialValues = {
    type: "",
    desc: "",
    comments: [],
    likes: "",
    albumID: undefined,
    blogID: undefined,
  };
  const [type, setType] = React.useState(initialValues.type);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [albumID, setAlbumID] = React.useState(initialValues.albumID);
  const [blogID, setBlogID] = React.useState(initialValues.blogID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setDesc(initialValues.desc);
    setComments(initialValues.comments);
    setCurrentCommentsValue(undefined);
    setCurrentCommentsDisplayValue("");
    setLikes(initialValues.likes);
    setAlbumID(initialValues.albumID);
    setCurrentAlbumIDValue(undefined);
    setCurrentAlbumIDDisplayValue("");
    setBlogID(initialValues.blogID);
    setCurrentBlogIDValue(undefined);
    setCurrentBlogIDDisplayValue("");
    setErrors({});
  };
  const [currentCommentsDisplayValue, setCurrentCommentsDisplayValue] =
    React.useState("");
  const [currentCommentsValue, setCurrentCommentsValue] =
    React.useState(undefined);
  const commentsRef = React.createRef();
  const [currentAlbumIDDisplayValue, setCurrentAlbumIDDisplayValue] =
    React.useState("");
  const [currentAlbumIDValue, setCurrentAlbumIDValue] =
    React.useState(undefined);
  const albumIDRef = React.createRef();
  const [currentBlogIDDisplayValue, setCurrentBlogIDDisplayValue] =
    React.useState("");
  const [currentBlogIDValue, setCurrentBlogIDValue] = React.useState(undefined);
  const blogIDRef = React.createRef();
  const getIDValue = {
    comments: (r) => JSON.stringify({ id: r?.id }),
  };
  const commentsIdSet = new Set(
    Array.isArray(comments)
      ? comments.map((r) => getIDValue.comments?.(r))
      : getIDValue.comments?.(comments)
  );
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const albumRecords = useDataStoreBinding({
    type: "collection",
    model: Album,
  }).items;
  const blogRecords = useDataStoreBinding({
    type: "collection",
    model: Blog,
  }).items;
  const getDisplayValue = {
    comments: (r) => `${r?.body ? r?.body + " - " : ""}${r?.id}`,
    albumID: (r) => `${r?.desc ? r?.desc + " - " : ""}${r?.id}`,
    blogID: (r) => `${r?.paragraphs ? r?.paragraphs + " - " : ""}${r?.id}`,
  };
  const validations = {
    type: [{ type: "Required" }],
    desc: [],
    comments: [],
    likes: [{ type: "Required" }],
    albumID: [{ type: "Required" }],
    blogID: [{ type: "Required" }],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type,
          desc,
          comments,
          likes,
          albumID,
          blogID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
            desc: modelFields.desc,
            likes: modelFields.likes,
            albumID: modelFields.albumID,
            blogID: modelFields.blogID,
          };
          const media = await DataStore.save(new Media(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...comments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Comment.copyOf(original, (updated) => {
                    updated.mediaID = media.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "MediaCreateForm")}
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
              desc,
              comments,
              likes,
              albumID,
              blogID,
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
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Image"
          value="IMAGE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Desc"
        isRequired={false}
        isReadOnly={false}
        value={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              desc: value,
              comments,
              likes,
              albumID,
              blogID,
            };
            const result = onChange(modelFields);
            value = result?.desc ?? value;
          }
          if (errors.desc?.hasError) {
            runValidationTasks("desc", value);
          }
          setDesc(value);
        }}
        onBlur={() => runValidationTasks("desc", desc)}
        errorMessage={errors.desc?.errorMessage}
        hasError={errors.desc?.hasError}
        {...getOverrideProps(overrides, "desc")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              desc,
              comments: values,
              likes,
              albumID,
              blogID,
            };
            const result = onChange(modelFields);
            values = result?.comments ?? values;
          }
          setComments(values);
          setCurrentCommentsValue(undefined);
          setCurrentCommentsDisplayValue("");
        }}
        currentFieldValue={currentCommentsValue}
        label={"Comments"}
        items={comments}
        hasError={errors?.comments?.hasError}
        errorMessage={errors?.comments?.errorMessage}
        getBadgeText={getDisplayValue.comments}
        setFieldValue={(model) => {
          setCurrentCommentsDisplayValue(
            model ? getDisplayValue.comments(model) : ""
          );
          setCurrentCommentsValue(model);
        }}
        inputFieldRef={commentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Comments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Comment"
          value={currentCommentsDisplayValue}
          options={commentRecords
            .filter((r) => !commentsIdSet.has(getIDValue.comments?.(r)))
            .map((r) => ({
              id: getIDValue.comments?.(r),
              label: getDisplayValue.comments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCommentsValue(
              commentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCommentsDisplayValue(label);
            runValidationTasks("comments", label);
          }}
          onClear={() => {
            setCurrentCommentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.comments?.hasError) {
              runValidationTasks("comments", value);
            }
            setCurrentCommentsDisplayValue(value);
            setCurrentCommentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("comments", currentCommentsDisplayValue)
          }
          errorMessage={errors.comments?.errorMessage}
          hasError={errors.comments?.hasError}
          ref={commentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "comments")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Likes"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={likes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              desc,
              comments,
              likes: value,
              albumID,
              blogID,
            };
            const result = onChange(modelFields);
            value = result?.likes ?? value;
          }
          if (errors.likes?.hasError) {
            runValidationTasks("likes", value);
          }
          setLikes(value);
        }}
        onBlur={() => runValidationTasks("likes", likes)}
        errorMessage={errors.likes?.errorMessage}
        hasError={errors.likes?.hasError}
        {...getOverrideProps(overrides, "likes")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              type,
              desc,
              comments,
              likes,
              albumID: value,
              blogID,
            };
            const result = onChange(modelFields);
            value = result?.albumID ?? value;
          }
          setAlbumID(value);
          setCurrentAlbumIDValue(undefined);
        }}
        currentFieldValue={currentAlbumIDValue}
        label={"Album id"}
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
          label="Album id"
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
              type,
              desc,
              comments,
              likes,
              albumID,
              blogID: value,
            };
            const result = onChange(modelFields);
            value = result?.blogID ?? value;
          }
          setBlogID(value);
          setCurrentBlogIDValue(undefined);
        }}
        currentFieldValue={currentBlogIDValue}
        label={"Blog id"}
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
          label="Blog id"
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
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
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
