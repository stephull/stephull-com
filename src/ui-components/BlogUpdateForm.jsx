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
import { Blog, Media, Comment } from "../models";
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
export default function BlogUpdateForm(props) {
  const {
    id: idProp,
    blog: blogModelProp,
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
    paragraphs: [],
    media: [],
    comments: [],
    likes: "",
    body: "",
  };
  const [paragraphs, setParagraphs] = React.useState(initialValues.paragraphs);
  const [media, setMedia] = React.useState(initialValues.media);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [body, setBody] = React.useState(initialValues.body);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogRecord
      ? {
          ...initialValues,
          ...blogRecord,
          media: linkedMedia,
          comments: linkedComments,
        }
      : initialValues;
    setParagraphs(cleanValues.paragraphs ?? []);
    setCurrentParagraphsValue("");
    setMedia(cleanValues.media ?? []);
    setCurrentMediaValue(undefined);
    setCurrentMediaDisplayValue("");
    setComments(cleanValues.comments ?? []);
    setCurrentCommentsValue(undefined);
    setCurrentCommentsDisplayValue("");
    setLikes(cleanValues.likes);
    setBody(cleanValues.body);
    setErrors({});
  };
  const [blogRecord, setBlogRecord] = React.useState(blogModelProp);
  const [linkedMedia, setLinkedMedia] = React.useState([]);
  const canUnlinkMedia = false;
  const [linkedComments, setLinkedComments] = React.useState([]);
  const canUnlinkComments = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Blog, idProp)
        : blogModelProp;
      setBlogRecord(record);
      const linkedMedia = record ? await record.media.toArray() : [];
      setLinkedMedia(linkedMedia);
      const linkedComments = record ? await record.comments.toArray() : [];
      setLinkedComments(linkedComments);
    };
    queryData();
  }, [idProp, blogModelProp]);
  React.useEffect(resetStateValues, [blogRecord, linkedMedia, linkedComments]);
  const [currentParagraphsValue, setCurrentParagraphsValue] =
    React.useState("");
  const paragraphsRef = React.createRef();
  const [currentMediaDisplayValue, setCurrentMediaDisplayValue] =
    React.useState("");
  const [currentMediaValue, setCurrentMediaValue] = React.useState(undefined);
  const mediaRef = React.createRef();
  const [currentCommentsDisplayValue, setCurrentCommentsDisplayValue] =
    React.useState("");
  const [currentCommentsValue, setCurrentCommentsValue] =
    React.useState(undefined);
  const commentsRef = React.createRef();
  const getIDValue = {
    media: (r) => JSON.stringify({ id: r?.id }),
    comments: (r) => JSON.stringify({ id: r?.id }),
  };
  const mediaIdSet = new Set(
    Array.isArray(media)
      ? media.map((r) => getIDValue.media?.(r))
      : getIDValue.media?.(media)
  );
  const commentsIdSet = new Set(
    Array.isArray(comments)
      ? comments.map((r) => getIDValue.comments?.(r))
      : getIDValue.comments?.(comments)
  );
  const mediaRecords = useDataStoreBinding({
    type: "collection",
    model: Media,
  }).items;
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const getDisplayValue = {
    media: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    comments: (r) => `${r?.body ? r?.body + " - " : ""}${r?.id}`,
  };
  const validations = {
    paragraphs: [{ type: "Required" }],
    media: [],
    comments: [],
    likes: [{ type: "Required" }],
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
          paragraphs,
          media,
          comments,
          likes,
          body,
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
          const promises = [];
          const mediaToLink = [];
          const mediaToUnLink = [];
          const mediaSet = new Set();
          const linkedMediaSet = new Set();
          media.forEach((r) => mediaSet.add(getIDValue.media?.(r)));
          linkedMedia.forEach((r) => linkedMediaSet.add(getIDValue.media?.(r)));
          linkedMedia.forEach((r) => {
            if (!mediaSet.has(getIDValue.media?.(r))) {
              mediaToUnLink.push(r);
            }
          });
          media.forEach((r) => {
            if (!linkedMediaSet.has(getIDValue.media?.(r))) {
              mediaToLink.push(r);
            }
          });
          mediaToUnLink.forEach((original) => {
            if (!canUnlinkMedia) {
              throw Error(
                `Media ${original.id} cannot be unlinked from Blog because blogID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Media.copyOf(original, (updated) => {
                  updated.blogID = null;
                })
              )
            );
          });
          mediaToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Media.copyOf(original, (updated) => {
                  updated.blogID = blogRecord.id;
                })
              )
            );
          });
          const commentsToLink = [];
          const commentsToUnLink = [];
          const commentsSet = new Set();
          const linkedCommentsSet = new Set();
          comments.forEach((r) => commentsSet.add(getIDValue.comments?.(r)));
          linkedComments.forEach((r) =>
            linkedCommentsSet.add(getIDValue.comments?.(r))
          );
          linkedComments.forEach((r) => {
            if (!commentsSet.has(getIDValue.comments?.(r))) {
              commentsToUnLink.push(r);
            }
          });
          comments.forEach((r) => {
            if (!linkedCommentsSet.has(getIDValue.comments?.(r))) {
              commentsToLink.push(r);
            }
          });
          commentsToUnLink.forEach((original) => {
            if (!canUnlinkComments) {
              throw Error(
                `Comment ${original.id} cannot be unlinked from Blog because blogID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.blogID = null;
                })
              )
            );
          });
          commentsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.blogID = blogRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            paragraphs: modelFields.paragraphs,
            likes: modelFields.likes,
          };
          promises.push(
            DataStore.save(
              Blog.copyOf(blogRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              paragraphs: values,
              media,
              comments,
              likes,
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
              paragraphs,
              media: values,
              comments,
              likes,
              body,
            };
            const result = onChange(modelFields);
            values = result?.media ?? values;
          }
          setMedia(values);
          setCurrentMediaValue(undefined);
          setCurrentMediaDisplayValue("");
        }}
        currentFieldValue={currentMediaValue}
        label={"Media"}
        items={media}
        hasError={errors?.media?.hasError}
        errorMessage={errors?.media?.errorMessage}
        getBadgeText={getDisplayValue.media}
        setFieldValue={(model) => {
          setCurrentMediaDisplayValue(
            model ? getDisplayValue.media(model) : ""
          );
          setCurrentMediaValue(model);
        }}
        inputFieldRef={mediaRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Media"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Media"
          value={currentMediaDisplayValue}
          options={mediaRecords
            .filter((r) => !mediaIdSet.has(getIDValue.media?.(r)))
            .map((r) => ({
              id: getIDValue.media?.(r),
              label: getDisplayValue.media?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMediaValue(
              mediaRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMediaDisplayValue(label);
            runValidationTasks("media", label);
          }}
          onClear={() => {
            setCurrentMediaDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.media?.hasError) {
              runValidationTasks("media", value);
            }
            setCurrentMediaDisplayValue(value);
            setCurrentMediaValue(undefined);
          }}
          onBlur={() => runValidationTasks("media", currentMediaDisplayValue)}
          errorMessage={errors.media?.errorMessage}
          hasError={errors.media?.hasError}
          ref={mediaRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "media")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              paragraphs,
              media,
              comments: values,
              likes,
              body,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Likes</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
              paragraphs,
              media,
              comments,
              likes: value,
              body,
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
      <TextField
        label="Update paragraph"
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paragraphs,
              media,
              comments,
              likes,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || blogModelProp)}
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
              !(idProp || blogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
