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
import { Album, Comment, Media } from "../models";
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
export default function AlbumUpdateForm(props) {
  const {
    id: idProp,
    album: albumModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    desc: "",
    comments: [],
    media: [],
    likes: "",
  };
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [media, setMedia] = React.useState(initialValues.media);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = albumRecord
      ? {
          ...initialValues,
          ...albumRecord,
          comments: linkedComments,
          media: linkedMedia,
        }
      : initialValues;
    setDesc(cleanValues.desc);
    setComments(cleanValues.comments ?? []);
    setCurrentCommentsValue(undefined);
    setCurrentCommentsDisplayValue("");
    setMedia(cleanValues.media ?? []);
    setCurrentMediaValue(undefined);
    setCurrentMediaDisplayValue("");
    setLikes(cleanValues.likes);
    setErrors({});
  };
  const [albumRecord, setAlbumRecord] = React.useState(albumModelProp);
  const [linkedComments, setLinkedComments] = React.useState([]);
  const canUnlinkComments = false;
  const [linkedMedia, setLinkedMedia] = React.useState([]);
  const canUnlinkMedia = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Album, idProp)
        : albumModelProp;
      setAlbumRecord(record);
      const linkedComments = record ? await record.comments.toArray() : [];
      setLinkedComments(linkedComments);
      const linkedMedia = record ? await record.media.toArray() : [];
      setLinkedMedia(linkedMedia);
    };
    queryData();
  }, [idProp, albumModelProp]);
  React.useEffect(resetStateValues, [albumRecord, linkedComments, linkedMedia]);
  const [currentCommentsDisplayValue, setCurrentCommentsDisplayValue] =
    React.useState("");
  const [currentCommentsValue, setCurrentCommentsValue] =
    React.useState(undefined);
  const commentsRef = React.createRef();
  const [currentMediaDisplayValue, setCurrentMediaDisplayValue] =
    React.useState("");
  const [currentMediaValue, setCurrentMediaValue] = React.useState(undefined);
  const mediaRef = React.createRef();
  const getIDValue = {
    comments: (r) => JSON.stringify({ id: r?.id }),
    media: (r) => JSON.stringify({ id: r?.id }),
  };
  const commentsIdSet = new Set(
    Array.isArray(comments)
      ? comments.map((r) => getIDValue.comments?.(r))
      : getIDValue.comments?.(comments)
  );
  const mediaIdSet = new Set(
    Array.isArray(media)
      ? media.map((r) => getIDValue.media?.(r))
      : getIDValue.media?.(media)
  );
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const mediaRecords = useDataStoreBinding({
    type: "collection",
    model: Media,
  }).items;
  const getDisplayValue = {
    comments: (r) => `${r?.body ? r?.body + " - " : ""}${r?.id}`,
    media: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    desc: [],
    comments: [],
    media: [],
    likes: [{ type: "Required" }],
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
          desc,
          comments,
          media,
          likes,
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
                `Comment ${original.id} cannot be unlinked from Album because albumID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.albumID = null;
                })
              )
            );
          });
          commentsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.albumID = albumRecord.id;
                })
              )
            );
          });
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
                `Media ${original.id} cannot be unlinked from Album because albumID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Media.copyOf(original, (updated) => {
                  updated.albumID = null;
                })
              )
            );
          });
          mediaToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Media.copyOf(original, (updated) => {
                  updated.albumID = albumRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            desc: modelFields.desc,
            likes: modelFields.likes,
          };
          promises.push(
            DataStore.save(
              Album.copyOf(albumRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AlbumUpdateForm")}
      {...rest}
    >
      <TextField
        label="Desc"
        isRequired={false}
        isReadOnly={false}
        value={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              desc: value,
              comments,
              media,
              likes,
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
              desc,
              comments: values,
              media,
              likes,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              desc,
              comments,
              media: values,
              likes,
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
              desc,
              comments,
              media,
              likes: value,
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
          isDisabled={!(idProp || albumModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || albumModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
