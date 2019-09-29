import * as React from 'react';
import * as qs from 'qs';

import { Form, Modal, Button, FormControl, FormControlProps, InputGroup, Overlay, Tooltip } from 'react-bootstrap';
import { RIcon } from '../common/FontAwesomeIcon';
// @ts-ignore
import * as CopyToClipboard from 'react-copy-to-clipboard';

type PropTypes = {
  show: boolean;
  saveData?: string;
  onHide: () => void;
};

const ShareModal = (props: PropTypes) => {
  const { show, onHide, saveData } = props;
  const [title, setTitle] = React.useState('');
  const [composer, setComposer] = React.useState('');

  const handleChangeTitle = React.useCallback((event: React.FormEvent<FormControl & FormControlProps>) => {
    if (!event.currentTarget || typeof event.currentTarget.value === 'undefined') {
      return;
    }
    setTitle(event.currentTarget.value);
  }, []);

  const handleChangeComposer = React.useCallback((event: React.FormEvent<FormControl & FormControlProps>) => {
    if (!event.currentTarget || typeof event.currentTarget.value === 'undefined') {
      return;
    }
    setComposer(event.currentTarget.value);
  }, []);

  const _url = React.useMemo(() => {
    if (typeof saveData === 'undefined') {
      return 'Oops! Happend error. X(';
    }

    const query: { [key: string]: string } = {};

    if (title.length > 0) {
      query['title'] = title;
    }
    if (composer.length > 0) {
      query['composer'] = composer;
    }
    query['data'] = saveData;

    const queryString = qs.stringify(query, { encode: true });
    const url = `${window.location.origin}${window.location.pathname}?${queryString}`;

    return url;
  }, [saveData, title, composer]);

  const copyButtonRef = React.useRef(null);

  const [showCopiedTooltip, setShowCopiedTooltip] = React.useState(false);
  const handleClickCopy = React.useCallback(() => {
    setShowCopiedTooltip(true);
  }, []);

  React.useEffect(() => {
    if (showCopiedTooltip) {
      const tid = window.setTimeout(() => {
        setShowCopiedTooltip(false);
      }, 3000);

      return () => {
        window.clearTimeout(tid);
      };
    }
    return;
  }, [showCopiedTooltip]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>
          <RIcon name='share-alt' padding='right' />
          Share
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder='Untitled Beat' onChange={handleChangeTitle} value={title} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Composer</Form.Label>
          <Form.Control placeholder='Anonymous' onChange={handleChangeComposer} value={composer} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Share URL</Form.Label>
          <InputGroup>
            <Form.Control readOnly={true} value={_url} size='lg' />
            <InputGroup.Append>
              <CopyToClipboard text={_url}>
                <Button ref={copyButtonRef} size='lg' variant='primary' onClick={handleClickCopy}>
                  <RIcon name='copy' padding='right' />
                  Copy
                </Button>
              </CopyToClipboard>
              {/*
              // @ts-ignore */}
              <Overlay target={copyButtonRef.current} show={showCopiedTooltip} placement={'top'}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(props: any) => (
                  <Tooltip id='copied-tooltip' {...props}>
                    <RIcon name='clipboard-check' padding='right' />
                    Copied!!
                  </Tooltip>
                )}
              </Overlay>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button size='lg' variant='secondary' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShareModal;
