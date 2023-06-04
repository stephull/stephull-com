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
import { Comment, BlogTimelineItem, MediaTimelineItem } from "../models";
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
    comment: "",
    stars: "",
    poster: "",
    blogtimelineitemID: undefined,
    mediatimelineitemID: undefined,
    body: "",
  };
  const [comment, setComment] = React.useState(initialValues.comment);
  const [stars, setStars] = React.useState(initialValues.stars);
  const [poster, setPoster] = React.useState(initialValues.poster);
  const [blogtimelineitemID, setBlogtimelineitemID] = React.useState(
    initialValues.blogtimelineitemID
  );
  const [mediatimelineitemID, setMediatimelineitemID] = React.useState(
    initialValues.mediatimelineitemID
  );
  const [body, setBody] = React.useState(initialValues.body);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = commentRecord
      ? {
          ...initialValues,
          ...commentRecord,
          blogtimelineitemID,
          mediatimelineitemID,
        }
      : initialValues;
    setComment(cleanValues.comment);
    setStars(cleanValues.stars);
    setPoster(cleanValues.poster);
    setBlogtimelineitemID(cleanValues.blogtimelineitemID);
    setCurrentBlogtimelineitemIDValue(undefined);
    setCurrentBlogtimelineitemIDDisplayValue("");
    setMediatimelineitemID(cleanValues.mediatimelineitemID);
    setCurrentMediatimelineitemIDValue(undefined);
    setCurrentMediatimelineitemIDDisplayValue("");
    setBody(cleanValues.body);
    setErrors({});
  };
  const [commentRecord, setCommentRecord] = React.useState(commentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Comment, idProp)
        : commentModelProp;
      setCommentRecord(record);
      const blogtimelineitemIDRecord = record
        ? await record.blogtimelineitemID
        : undefined;
      setBlogtimelineitemID(blogtimelineitemIDRecord);
      const mediatimelineitemIDRecord = record
        ? await record.mediatimelineitemID
        : undefined;
      setMediatimelineitemID(mediatimelineitemIDRecord);
    };
    queryData();
  }, [idProp, commentModelProp]);
  React.useEffect(resetStateValues, [
    commentRecord,
    blogtimelineitemID,
    mediatimelineitemID,
  ]);
  const [
    currentBlogtimelineitemIDDisplayValue,
    setCurrentBlogtimelineitemIDDisplayValue,
  ] = React.useState("");
  const [currentBlogtimelineitemIDValue, setCurrentBlogtimelineitemIDValue] =
    React.useState(undefined);
  const blogtimelineitemIDRef = React.createRef();
  const [
    currentMediatimelineitemIDDisplayValue,
    setCurrentMediatimelineitemIDDisplayValue,
  ] = React.useState("");
  const [currentMediatimelineitemIDValue, setCurrentMediatimelineitemIDValue] =
    React.useState(undefined);
  const mediatimelineitemIDRef = React.createRef();
  const blogTimelineItemRecords = useDataStoreBinding({
    type: "collection",
    model: BlogTimelineItem,
  }).items;
  const mediaTimelineItemRecords = useDataStoreBinding({
    type: "collection",
    model: MediaTimelineItem,
  }).items;
  const getDisplayValue = {
    blogtimelineitemID: (r) => `${r?.stars ? r?.stars + " - " : ""}${r?.id}`,
    mediatimelineitemID: (r) =>
      `${r?.description ? r?.description + " - " : ""}${r?.id}`,
  };
  const validations = {
    comment: [{ type: "Required" }],
    stars: [],
    poster: [],
    blogtimelineitemID: [],
    mediatimelineitemID: [],
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
          comment,
          stars,
          poster,
          blogtimelineitemID,
          mediatimelineitemID,
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
            comment: modelFields.comment,
            stars: modelFields.stars,
            poster: modelFields.poster,
            blogtimelineitemID: modelFields.blogtimelineitemID,
            mediatimelineitemID: modelFields.mediatimelineitemID,
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
            <span>Comment</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment: value,
              stars,
              poster,
              blogtimelineitemID,
              mediatimelineitemID,
              body,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
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
              comment,
              stars: value,
              poster,
              blogtimelineitemID,
              mediatimelineitemID,
              body,
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
      <TextField
        label="Poster"
        isRequired={false}
        isReadOnly={false}
        value={poster}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              stars,
              poster: value,
              blogtimelineitemID,
              mediatimelineitemID,
              body,
            };
            const result = onChange(modelFields);
            value = result?.poster ?? value;
          }
          if (errors.poster?.hasError) {
            runValidationTasks("poster", value);
          }
          setPoster(value);
        }}
        onBlur={() => runValidationTasks("poster", poster)}
        errorMessage={errors.poster?.errorMessage}
        hasError={errors.poster?.hasError}
        {...getOverrideProps(overrides, "poster")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              comment,
              stars,
              poster,
              blogtimelineitemID: value,
              mediatimelineitemID,
              body,
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
          placeholder="Search Blog"
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
          defaultValue={blogtimelineitemID}
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              comment,
              stars,
              poster,
              blogtimelineitemID,
              mediatimelineitemID: value,
              body,
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
          placeholder="Search Media Content"
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
          defaultValue={mediatimelineitemID}
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
      <TextField
        label="Comment body"
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              stars,
              poster,
              blogtimelineitemID,
              mediatimelineitemID,
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
