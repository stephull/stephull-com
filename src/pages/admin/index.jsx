import React from 'react';

import FlexRow from '../../components/flex-row';
import PageContainer from '../../components/page-container';
import {
  BlogCreateForm,
  BlogUpdateForm,
  BlogTimelineItemCreateForm,
  BlogTimelineItemUpdateForm,
  ContentCreateForm,
  ContentUpdateForm,
  MediaTimelineItemCreateForm,
  MediaTimelineItemUpdateForm
} from "../../ui-components";
import FileUploadComponent from '../../components/file-upload-component';
import colors from '../../constants/colors';
import Authenticator from '../../utils/authenticator';
import { signOut } from '../../utils/logInHandlers';

const PrivateAdminPage = () => {
  const containerStyles = {
    borderRadius: '20px',
    width: '360px',
    marginTop: '1em',
    marginRight: '1em'
  };

  const createContainer = {
    backgroundColor: colors.skyBlue,
    ...containerStyles
  }, updateContainer = {
    backgroundColor: colors.faintPink,
    ...containerStyles
  }

  return (
    <>
      <FlexRow edits={{ justifyContent: 'space-evenly' }}>
        <h4>You found my secret page!</h4>
        <div>
          <button type='button' onClick={signOut}>
            LOG OUT
          </button>
        </div>
      </FlexRow>
      <PageContainer indent>
        <h2>Create Operations</h2>
        <FlexRow>
          <FileUploadComponent />
        </FlexRow>
        <FlexRow>
          <PageContainer edits={createContainer}>
            <h4>Create Content for Media Post</h4>
            <ContentCreateForm />
          </PageContainer>
          <PageContainer edits={createContainer}>
            <h4>Create Media Timeline Post with Content</h4>
            <MediaTimelineItemCreateForm />
          </PageContainer>
        </FlexRow>
        <FlexRow>
          <PageContainer edits={createContainer}>
            <h4>Create Blog for Blog Post</h4>
            <BlogCreateForm />
          </PageContainer>
          <PageContainer edits={createContainer}>
            <h4>Create Blog Timeline Post with Blog Text</h4>
            <BlogTimelineItemCreateForm />
          </PageContainer>
        </FlexRow>
      </PageContainer>
      <PageContainer indent>
        <h2>Update Operations</h2>
        <FlexRow>
          <PageContainer edits={updateContainer}>
            <h4>Update Content for Media Post</h4>
            <ContentUpdateForm />
          </PageContainer>
          <PageContainer edits={updateContainer}>
            <h4>Update Media Timeline Post with Content</h4>
            <MediaTimelineItemUpdateForm />
          </PageContainer>
        </FlexRow>
        <FlexRow>
          <PageContainer edits={updateContainer}>
            <h4>Update Content for Blog Post</h4>
            <BlogUpdateForm />
          </PageContainer>
          <PageContainer edits={updateContainer}>
            <h4>Update Blog Timeline Post with Blog Text</h4>
            <BlogTimelineItemUpdateForm />
          </PageContainer>
        </FlexRow>
      </PageContainer>
    </>
  )
};

export default Authenticator(PrivateAdminPage);