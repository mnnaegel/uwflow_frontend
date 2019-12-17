import React, { useEffect, useState, useRef } from 'react';
import { withTheme } from 'styled-components';
import { makeAuthenticatedPOSTRequest } from '../../utils/Api';
import { ArrowRight, Upload } from 'react-feather';
import { toast } from 'react-toastify';

/* Styled Components */
import {
  ContentWrapper,
  Header,
  ContentSteps,
  StepWrapper,
  ArrowWrapper,
  LongInstructionWrapper,
  NumberCircle,
  InstructionText,
  Link,
  TranscriptStep1Picture,
  ScheduleStep3Wrapper,
  TranscriptUploadBox,
  GreyText,
  TranscriptPrivacyPolicyWrapper,
  PrivacyPolicyHeader,
  PrivacyPolicyText,
  PrivacyPolicyLink,
  SkipStepWrapper,
  ErrorMessage,
} from './styles/DataUploadModals';

/* Child Components */
import LoadingSpinner from '../display/LoadingSpinner';

/* Constants */
import {
  BACKEND_ENDPOINT,
  TRANSCRIPT_PARSE_ENDPOINT,
} from '../../constants/Api';
import {
  AWAITING_UPLOAD,
  UPLOAD_PENDING,
  UPLOAD_SUCCESSFUL,
  UPLOAD_FAILED,
} from '../../constants/DataUploadStates';
import {
  TRANSCRIPT_ERRORS,
  DATA_UPLOAD_SUCCESS,
} from '../../constants/Messages';

import { PRIVACY_PAGE_ROUTE } from '../../Routes';
import { sleep } from '../../utils/Misc';

const privacyText = `
  Flow only uses your transcript so you can easily import your course
  history and leave reviews for courses you have taken. See our`;

const preventDefault = event => event.preventDefault();

const onDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
};

export const TranscriptUploadModalContent = ({ onSkip, theme }) => {
  const fileInputRef = useRef();
  const [uploadState, setUploadState] = useState(AWAITING_UPLOAD);

  const handleTranscriptClick = () => {
    if (fileInputRef) {
      fileInputRef.current.click();
    }
  };

  const makeTranscriptRequest = async file => {
    if (!file) {
      return;
    }

    let formData = new FormData();
    formData.append('file', file);
    setUploadState(UPLOAD_PENDING);
    const [, status] = await makeAuthenticatedPOSTRequest(
      `${BACKEND_ENDPOINT}${TRANSCRIPT_PARSE_ENDPOINT}`,
      formData,
      {},
      { noStringify: true },
    );

    if (status === 200) {
      await sleep(500);
      setUploadState(UPLOAD_SUCCESSFUL);
      toast(DATA_UPLOAD_SUCCESS);
      onSkip();
    } else {
      setUploadState(UPLOAD_FAILED);
    }
  };

  const handleFileInputChange = async event => {
    event.preventDefault();
    event.stopPropagation();
    await makeTranscriptRequest(fileInputRef.current.files[0]);
  };

  const handleTranscriptDrop = async event => {
    event.preventDefault();
    event.stopPropagation();
    await makeTranscriptRequest(event.dataTransfer.files[0]);
  };

  useEffect(() => {
    window.addEventListener('dragover', preventDefault, false);
    window.addEventListener('drop', preventDefault, false);

    return () => {
      window.removeEventListener('dragover', preventDefault);
      window.removeEventListener('drop', preventDefault);
    };
  }, []);

  const uploadContent = () => {
    if (uploadState === UPLOAD_PENDING) {
      return <LoadingSpinner />;
    }

    return (
      <>
        {uploadState === UPLOAD_FAILED && (
          <ErrorMessage>{TRANSCRIPT_ERRORS.default_transcript}</ErrorMessage>
        )}
        <Upload height={100} width={60} color={theme.dark3} />
        <GreyText>Drag and drop your transcript file here!</GreyText>
      </>
    );
  };

  return (
    <ContentWrapper>
      <Header>Upload your transcript</Header>
      <ContentSteps>
        <StepWrapper>
          <LongInstructionWrapper>
            <NumberCircle>1</NumberCircle>
            <InstructionText>
              Follow the
              <Link>instructions here</Link>
              to download your transcript as a PDF file
            </InstructionText>
          </LongInstructionWrapper>
          <TranscriptStep1Picture />
        </StepWrapper>

        <ArrowWrapper>
          <ArrowRight color={theme.accent} height={100} width={80} />
        </ArrowWrapper>

        <StepWrapper>
          <LongInstructionWrapper>
            <NumberCircle>2</NumberCircle>
            <InstructionText>Upload your transcript file</InstructionText>
          </LongInstructionWrapper>
          <ScheduleStep3Wrapper>
            <form
              onClick={handleTranscriptClick}
              onDrop={handleTranscriptDrop}
              onDragOver={onDragOver}
              accept="application/pdf"
              encType="multipart/form-data"
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
              <TranscriptUploadBox uploadState={uploadState}>
                {uploadContent()}
              </TranscriptUploadBox>
            </form>
            <TranscriptPrivacyPolicyWrapper>
              <PrivacyPolicyHeader>
                We do not store your grades.
              </PrivacyPolicyHeader>
              <PrivacyPolicyText>
                {privacyText}
                <PrivacyPolicyLink to={PRIVACY_PAGE_ROUTE}>
                  privacy policy
                </PrivacyPolicyLink>
                for more information
              </PrivacyPolicyText>
            </TranscriptPrivacyPolicyWrapper>
          </ScheduleStep3Wrapper>
        </StepWrapper>
      </ContentSteps>
      <SkipStepWrapper onClick={onSkip}>skip this step ></SkipStepWrapper>
    </ContentWrapper>
  );
};

export default withTheme(TranscriptUploadModalContent);