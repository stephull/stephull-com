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
import { BlogTimelineItem, Blog, Comment, Content } from "../models";
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
export default function BlogTimelineItemUpdateForm(props) {
  const {
    id: idProp,
    blogTimelineItem: blogTimelineItemModelProp,
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
    blogsource: undefined,
    createdAt: "",
    stars: "",
    blogcomments: [],
    blogcontents: [],
  };
  const [blogsource, setBlogsource] = React.useState(initialValues.blogsource);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [stars, setStars] = React.useState(initialValues.stars);
  const [blogcomments, setBlogcomments] = React.useState(
    initialValues.blogcomments
  );
  const [blogcontents, setBlogcontents] = React.useState(
    initialValues.blogcontents
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogTimelineItemRecord
      ? {
          ...initialValues,
          ...blogTimelineItemRecord,
          blogsource,
          blogcomments: linkedBlogcomments,
          blogcontents: linkedBlogcontents,
        }
      : initialValues;
    setBlogsource(cleanValues.blogsource);
    setCurrentBlogsourceValue(undefined);
    setCurrentBlogsourceDisplayValue("");
    setCreatedAt(cleanValues.createdAt);
    setStars(cleanValues.stars);
    setBlogcomments(cleanValues.blogcomments ?? []);
    setCurrentBlogcommentsValue(undefined);
    setCurrentBlogcommentsDisplayValue("");
    setBlogcontents(cleanValues.blogcontents ?? []);
    setCurrentBlogcontentsValue(undefined);
    setCurrentBlogcontentsDisplayValue("");
    setErrors({});
  };
  const [blogTimelineItemRecord, setBlogTimelineItemRecord] = React.useState(
    blogTimelineItemModelProp
  );
  const [linkedBlogcomments, setLinkedBlogcomments] = React.useState([]);
  const canUnlinkBlogcomments = true;
  const [linkedBlogcontents, setLinkedBlogcontents] = React.useState([]);
  const canUnlinkBlogcontents = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BlogTimelineItem, idProp)
        : blogTimelineItemModelProp;
      setBlogTimelineItemRecord(record);
      const blogsourceRecord = record ? await record.blogsource : undefined;
      setBlogsource(blogsourceRecord);
      const linkedBlogcomments = record
        ? await record.blogcomments.toArray()
        : [];
      setLinkedBlogcomments(linkedBlogcomments);
      const linkedBlogcontents = record
        ? await record.blogcontents.toArray()
        : [];
      setLinkedBlogcontents(linkedBlogcontents);
    };
    queryData();
  }, [idProp, blogTimelineItemModelProp]);
  React.useEffect(resetStateValues, [
    blogTimelineItemRecord,
    blogsource,
    linkedBlogcomments,
    linkedBlogcontents,
  ]);
  const [currentBlogsourceDisplayValue, setCurrentBlogsourceDisplayValue] =
    React.useState("");
  const [currentBlogsourceValue, setCurrentBlogsourceValue] =
    React.useState(undefined);
  const blogsourceRef = React.createRef();
  const [currentBlogcommentsDisplayValue, setCurrentBlogcommentsDisplayValue] =
    React.useState("");
  const [currentBlogcommentsValue, setCurrentBlogcommentsValue] =
    React.useState(undefined);
  const blogcommentsRef = React.createRef();
  const [currentBlogcontentsDisplayValue, setCurrentBlogcontentsDisplayValue] =
    React.useState("");
  const [currentBlogcontentsValue, setCurrentBlogcontentsValue] =
    React.useState(undefined);
  const blogcontentsRef = React.createRef();
  const getIDValue = {
    blogsource: (r) => JSON.stringify({ id: r?.id }),
    blogcomments: (r) => JSON.stringify({ id: r?.id }),
    blogcontents: (r) => JSON.stringify({ id: r?.id }),
  };
  const blogsourceIdSet = new Set(
    Array.isArray(blogsource)
      ? blogsource.map((r) => getIDValue.blogsource?.(r))
      : getIDValue.blogsource?.(blogsource)
  );
  const blogcommentsIdSet = new Set(
    Array.isArray(blogcomments)
      ? blogcomments.map((r) => getIDValue.blogcomments?.(r))
      : getIDValue.blogcomments?.(blogcomments)
  );
  const blogcontentsIdSet = new Set(
    Array.isArray(blogcontents)
      ? blogcontents.map((r) => getIDValue.blogcontents?.(r))
      : getIDValue.blogcontents?.(blogcontents)
  );
  const blogRecords = useDataStoreBinding({
    type: "collection",
    model: Blog,
  }).items;
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const contentRecords = useDataStoreBinding({
    type: "collection",
    model: Content,
  }).items;
  const getDisplayValue = {
    blogsource: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
    blogcomments: (r) => `${r?.comment ? r?.comment + " - " : ""}${r?.id}`,
    blogcontents: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    blogsource: [],
    createdAt: [{ type: "Required" }],
    stars: [],
    blogcomments: [],
    blogcontents: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          blogsource,
          createdAt,
          stars,
          blogcomments,
          blogcontents,
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
          const blogcommentsToLink = [];
          const blogcommentsToUnLink = [];
          const blogcommentsSet = new Set();
          const linkedBlogcommentsSet = new Set();
          blogcomments.forEach((r) =>
            blogcommentsSet.add(getIDValue.blogcomments?.(r))
          );
          linkedBlogcomments.forEach((r) =>
            linkedBlogcommentsSet.add(getIDValue.blogcomments?.(r))
          );
          linkedBlogcomments.forEach((r) => {
            if (!blogcommentsSet.has(getIDValue.blogcomments?.(r))) {
              blogcommentsToUnLink.push(r);
            }
          });
          blogcomments.forEach((r) => {
            if (!linkedBlogcommentsSet.has(getIDValue.blogcomments?.(r))) {
              blogcommentsToLink.push(r);
            }
          });
          blogcommentsToUnLink.forEach((original) => {
            if (!canUnlinkBlogcomments) {
              throw Error(
                `Comment ${original.id} cannot be unlinked from BlogTimelineItem because blogtimelineitemID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.blogtimelineitemID = null;
                })
              )
            );
          });
          blogcommentsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Comment.copyOf(original, (updated) => {
                  updated.blogtimelineitemID = blogTimelineItemRecord.id;
                })
              )
            );
          });
          const blogcontentsToLink = [];
          const blogcontentsToUnLink = [];
          const blogcontentsSet = new Set();
          const linkedBlogcontentsSet = new Set();
          blogcontents.forEach((r) =>
            blogcontentsSet.add(getIDValue.blogcontents?.(r))
          );
          linkedBlogcontents.forEach((r) =>
            linkedBlogcontentsSet.add(getIDValue.blogcontents?.(r))
          );
          linkedBlogcontents.forEach((r) => {
            if (!blogcontentsSet.has(getIDValue.blogcontents?.(r))) {
              blogcontentsToUnLink.push(r);
            }
          });
          blogcontents.forEach((r) => {
            if (!linkedBlogcontentsSet.has(getIDValue.blogcontents?.(r))) {
              blogcontentsToLink.push(r);
            }
          });
          blogcontentsToUnLink.forEach((original) => {
            if (!canUnlinkBlogcontents) {
              throw Error(
                `Content ${original.id} cannot be unlinked from BlogTimelineItem because blogtimelineitemID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Content.copyOf(original, (updated) => {
                  updated.blogtimelineitemID = null;
                })
              )
            );
          });
          blogcontentsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Content.copyOf(original, (updated) => {
                  updated.blogtimelineitemID = blogTimelineItemRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            blogsource: modelFields.blogsource,
            createdAt: modelFields.createdAt,
            stars: modelFields.stars,
          };
          promises.push(
            DataStore.save(
              BlogTimelineItem.copyOf(blogTimelineItemRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.blogsource) {
                  updated.blogTimelineItemBlogsourceId = undefined;
                }
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
      {...getOverrideProps(overrides, "BlogTimelineItemUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              blogsource: value,
              createdAt,
              stars,
              blogcomments,
              blogcontents,
            };
            const result = onChange(modelFields);
            value = result?.blogsource ?? value;
          }
          setBlogsource(value);
          setCurrentBlogsourceValue(undefined);
          setCurrentBlogsourceDisplayValue("");
        }}
        currentFieldValue={currentBlogsourceValue}
        label={"Blog post"}
        items={blogsource ? [blogsource] : []}
        hasError={errors?.blogsource?.hasError}
        errorMessage={errors?.blogsource?.errorMessage}
        getBadgeText={getDisplayValue.blogsource}
        setFieldValue={(model) => {
          setCurrentBlogsourceDisplayValue(
            model ? getDisplayValue.blogsource(model) : ""
          );
          setCurrentBlogsourceValue(model);
        }}
        inputFieldRef={blogsourceRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog post"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Blog"
          value={currentBlogsourceDisplayValue}
          options={blogRecords
            .filter((r) => !blogsourceIdSet.has(getIDValue.blogsource?.(r)))
            .map((r) => ({
              id: getIDValue.blogsource?.(r),
              label: getDisplayValue.blogsource?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogsourceValue(
              blogRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogsourceDisplayValue(label);
            runValidationTasks("blogsource", label);
          }}
          onClear={() => {
            setCurrentBlogsourceDisplayValue("");
          }}
          defaultValue={blogsource}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogsource?.hasError) {
              runValidationTasks("blogsource", value);
            }
            setCurrentBlogsourceDisplayValue(value);
            setCurrentBlogsourceValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogsource", currentBlogsourceDisplayValue)
          }
          errorMessage={errors.blogsource?.errorMessage}
          hasError={errors.blogsource?.hasError}
          ref={blogsourceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogsource")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Created at</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              blogsource,
              createdAt: value,
              stars,
              blogcomments,
              blogcontents,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Stars"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stars}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              blogsource,
              createdAt,
              stars: value,
              blogcomments,
              blogcontents,
            };
            const result = onChange(modelFields);
            value = result?.stars ?? value;
          }
          if (errors.stars?.hasError) {
            runValidationTasks("stars", value);
          }
          setStars(value);
        }}
        onBlur={() => runValidationTasks("stars", stars)}
        errorMessage={errors.stars?.errorMessage}
        hasError={errors.stars?.hasError}
        {...getOverrideProps(overrides, "stars")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              blogsource,
              createdAt,
              stars,
              blogcomments: values,
              blogcontents,
            };
            const result = onChange(modelFields);
            values = result?.blogcomments ?? values;
          }
          setBlogcomments(values);
          setCurrentBlogcommentsValue(undefined);
          setCurrentBlogcommentsDisplayValue("");
        }}
        currentFieldValue={currentBlogcommentsValue}
        label={"Blog comments"}
        items={blogcomments}
        hasError={errors?.blogcomments?.hasError}
        errorMessage={errors?.blogcomments?.errorMessage}
        getBadgeText={getDisplayValue.blogcomments}
        setFieldValue={(model) => {
          setCurrentBlogcommentsDisplayValue(
            model ? getDisplayValue.blogcomments(model) : ""
          );
          setCurrentBlogcommentsValue(model);
        }}
        inputFieldRef={blogcommentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog comments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Comment"
          value={currentBlogcommentsDisplayValue}
          options={commentRecords
            .filter((r) => !blogcommentsIdSet.has(getIDValue.blogcomments?.(r)))
            .map((r) => ({
              id: getIDValue.blogcomments?.(r),
              label: getDisplayValue.blogcomments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogcommentsValue(
              commentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogcommentsDisplayValue(label);
            runValidationTasks("blogcomments", label);
          }}
          onClear={() => {
            setCurrentBlogcommentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogcomments?.hasError) {
              runValidationTasks("blogcomments", value);
            }
            setCurrentBlogcommentsDisplayValue(value);
            setCurrentBlogcommentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogcomments", currentBlogcommentsDisplayValue)
          }
          errorMessage={errors.blogcomments?.errorMessage}
          hasError={errors.blogcomments?.hasError}
          ref={blogcommentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogcomments")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              blogsource,
              createdAt,
              stars,
              blogcomments,
              blogcontents: values,
            };
            const result = onChange(modelFields);
            values = result?.blogcontents ?? values;
          }
          setBlogcontents(values);
          setCurrentBlogcontentsValue(undefined);
          setCurrentBlogcontentsDisplayValue("");
        }}
        currentFieldValue={currentBlogcontentsValue}
        label={"Blog contents"}
        items={blogcontents}
        hasError={errors?.blogcontents?.hasError}
        errorMessage={errors?.blogcontents?.errorMessage}
        getBadgeText={getDisplayValue.blogcontents}
        setFieldValue={(model) => {
          setCurrentBlogcontentsDisplayValue(
            model ? getDisplayValue.blogcontents(model) : ""
          );
          setCurrentBlogcontentsValue(model);
        }}
        inputFieldRef={blogcontentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog contents"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Content"
          value={currentBlogcontentsDisplayValue}
          options={contentRecords
            .filter((r) => !blogcontentsIdSet.has(getIDValue.blogcontents?.(r)))
            .map((r) => ({
              id: getIDValue.blogcontents?.(r),
              label: getDisplayValue.blogcontents?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogcontentsValue(
              contentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogcontentsDisplayValue(label);
            runValidationTasks("blogcontents", label);
          }}
          onClear={() => {
            setCurrentBlogcontentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogcontents?.hasError) {
              runValidationTasks("blogcontents", value);
            }
            setCurrentBlogcontentsDisplayValue(value);
            setCurrentBlogcontentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogcontents", currentBlogcontentsDisplayValue)
          }
          errorMessage={errors.blogcontents?.errorMessage}
          hasError={errors.blogcontents?.hasError}
          ref={blogcontentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogcontents")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || blogTimelineItemModelProp)}
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
              !(idProp || blogTimelineItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
