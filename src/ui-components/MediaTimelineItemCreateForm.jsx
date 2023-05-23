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
import { MediaTimelineItem, Comment, Content } from "../models";
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
export default function MediaTimelineItemCreateForm(props) {
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
    description: "",
    createdAt: "",
    stars: "",
    mediacomments: [],
    mediacontents: [],
    desc: "",
  };
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [stars, setStars] = React.useState(initialValues.stars);
  const [mediacomments, setMediacomments] = React.useState(
    initialValues.mediacomments
  );
  const [mediacontents, setMediacontents] = React.useState(
    initialValues.mediacontents
  );
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDescription(initialValues.description);
    setCreatedAt(initialValues.createdAt);
    setStars(initialValues.stars);
    setMediacomments(initialValues.mediacomments);
    setCurrentMediacommentsValue(undefined);
    setCurrentMediacommentsDisplayValue("");
    setMediacontents(initialValues.mediacontents);
    setCurrentMediacontentsValue(undefined);
    setCurrentMediacontentsDisplayValue("");
    setDesc(initialValues.desc);
    setErrors({});
  };
  const [
    currentMediacommentsDisplayValue,
    setCurrentMediacommentsDisplayValue,
  ] = React.useState("");
  const [currentMediacommentsValue, setCurrentMediacommentsValue] =
    React.useState(undefined);
  const mediacommentsRef = React.createRef();
  const [
    currentMediacontentsDisplayValue,
    setCurrentMediacontentsDisplayValue,
  ] = React.useState("");
  const [currentMediacontentsValue, setCurrentMediacontentsValue] =
    React.useState(undefined);
  const mediacontentsRef = React.createRef();
  const getIDValue = {
    mediacomments: (r) => JSON.stringify({ id: r?.id }),
    mediacontents: (r) => JSON.stringify({ id: r?.id }),
  };
  const mediacommentsIdSet = new Set(
    Array.isArray(mediacomments)
      ? mediacomments.map((r) => getIDValue.mediacomments?.(r))
      : getIDValue.mediacomments?.(mediacomments)
  );
  const mediacontentsIdSet = new Set(
    Array.isArray(mediacontents)
      ? mediacontents.map((r) => getIDValue.mediacontents?.(r))
      : getIDValue.mediacontents?.(mediacontents)
  );
  const commentRecords = useDataStoreBinding({
    type: "collection",
    model: Comment,
  }).items;
  const contentRecords = useDataStoreBinding({
    type: "collection",
    model: Content,
  }).items;
  const getDisplayValue = {
    mediacomments: (r) => `${r?.comment ? r?.comment + " - " : ""}${r?.id}`,
    mediacontents: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    description: [],
    createdAt: [{ type: "Required" }],
    stars: [],
    mediacomments: [],
    mediacontents: [],
    desc: [],
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
          description,
          createdAt,
          stars,
          mediacomments,
          mediacontents,
          desc,
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
            description: modelFields.description,
            createdAt: modelFields.createdAt,
            stars: modelFields.stars,
          };
          const mediaTimelineItem = await DataStore.save(
            new MediaTimelineItem(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...mediacomments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Comment.copyOf(original, (updated) => {
                    updated.mediatimelineitemID = mediaTimelineItem.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...mediacontents.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Content.copyOf(original, (updated) => {
                    updated.mediatimelineitemID = mediaTimelineItem.id;
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
      {...getOverrideProps(overrides, "MediaTimelineItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description: value,
              createdAt,
              stars,
              mediacomments,
              mediacontents,
              desc,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
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
              description,
              createdAt: value,
              stars,
              mediacomments,
              mediacontents,
              desc,
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
              description,
              createdAt,
              stars: value,
              mediacomments,
              mediacontents,
              desc,
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
              description,
              createdAt,
              stars,
              mediacomments: values,
              mediacontents,
              desc,
            };
            const result = onChange(modelFields);
            values = result?.mediacomments ?? values;
          }
          setMediacomments(values);
          setCurrentMediacommentsValue(undefined);
          setCurrentMediacommentsDisplayValue("");
        }}
        currentFieldValue={currentMediacommentsValue}
        label={"Media comments"}
        items={mediacomments}
        hasError={errors?.mediacomments?.hasError}
        errorMessage={errors?.mediacomments?.errorMessage}
        getBadgeText={getDisplayValue.mediacomments}
        setFieldValue={(model) => {
          setCurrentMediacommentsDisplayValue(
            model ? getDisplayValue.mediacomments(model) : ""
          );
          setCurrentMediacommentsValue(model);
        }}
        inputFieldRef={mediacommentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Media comments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Comment"
          value={currentMediacommentsDisplayValue}
          options={commentRecords
            .filter(
              (r) => !mediacommentsIdSet.has(getIDValue.mediacomments?.(r))
            )
            .map((r) => ({
              id: getIDValue.mediacomments?.(r),
              label: getDisplayValue.mediacomments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMediacommentsValue(
              commentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMediacommentsDisplayValue(label);
            runValidationTasks("mediacomments", label);
          }}
          onClear={() => {
            setCurrentMediacommentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.mediacomments?.hasError) {
              runValidationTasks("mediacomments", value);
            }
            setCurrentMediacommentsDisplayValue(value);
            setCurrentMediacommentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "mediacomments",
              currentMediacommentsDisplayValue
            )
          }
          errorMessage={errors.mediacomments?.errorMessage}
          hasError={errors.mediacomments?.hasError}
          ref={mediacommentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mediacomments")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              description,
              createdAt,
              stars,
              mediacomments,
              mediacontents: values,
              desc,
            };
            const result = onChange(modelFields);
            values = result?.mediacontents ?? values;
          }
          setMediacontents(values);
          setCurrentMediacontentsValue(undefined);
          setCurrentMediacontentsDisplayValue("");
        }}
        currentFieldValue={currentMediacontentsValue}
        label={"Media contents"}
        items={mediacontents}
        hasError={errors?.mediacontents?.hasError}
        errorMessage={errors?.mediacontents?.errorMessage}
        getBadgeText={getDisplayValue.mediacontents}
        setFieldValue={(model) => {
          setCurrentMediacontentsDisplayValue(
            model ? getDisplayValue.mediacontents(model) : ""
          );
          setCurrentMediacontentsValue(model);
        }}
        inputFieldRef={mediacontentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Media contents"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Content"
          value={currentMediacontentsDisplayValue}
          options={contentRecords
            .filter(
              (r) => !mediacontentsIdSet.has(getIDValue.mediacontents?.(r))
            )
            .map((r) => ({
              id: getIDValue.mediacontents?.(r),
              label: getDisplayValue.mediacontents?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMediacontentsValue(
              contentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMediacontentsDisplayValue(label);
            runValidationTasks("mediacontents", label);
          }}
          onClear={() => {
            setCurrentMediacontentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.mediacontents?.hasError) {
              runValidationTasks("mediacontents", value);
            }
            setCurrentMediacontentsDisplayValue(value);
            setCurrentMediacontentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "mediacontents",
              currentMediacontentsDisplayValue
            )
          }
          errorMessage={errors.mediacontents?.errorMessage}
          hasError={errors.mediacontents?.hasError}
          ref={mediacontentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mediacontents")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Description"
        value={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              createdAt,
              stars,
              mediacomments,
              mediacontents,
              desc: value,
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
