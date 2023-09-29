import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// editor
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import { FormInput } from '../../../components/form/';

type ComposeEmailProps = {
    isOpen: boolean;
    toggleComposeModal: () => void;
};

const Compose = ({ isOpen, toggleComposeModal }: ComposeEmailProps) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const html = `<h3><span class="ql-size-large">Hello World!</span></h3>
            <h5>This is a simple editable area.</h5>
            <ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul>
            <p>End of simple area</p>`;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email').email('Please enter valid Email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    // form methods
    const methods = useForm({ defaultValues: {}, resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (event: any, values: any) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...values, body });
        toggleComposeModal();
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: React.SetStateAction<EditorState>) => {
        setEditorState(editorStates);
    };

    return (
        <Modal show={isOpen} onHide={toggleComposeModal} centered>
            <Modal.Header closeButton onHide={toggleComposeModal}>
                <Modal.Title as="h4">Compose Mail</Modal.Title>
            </Modal.Header>

            <Modal.Body as="h5">
                <form onSubmit={handleSubmit(handleEmailSave)}>
                    <FormInput
                        type="email"
                        name="to"
                        placeholder="To"
                        containerClass={'mb-3'}
                        register={register}
                        key="to"
                        errors={errors}
                        control={control}
                    />

                    <Row>
                        <Col md={6}>
                            <FormInput type="email" name="cc" placeholder="Cc" containerClass={'mb-3'} />
                        </Col>
                        <Col md={6}>
                            <FormInput type="email" name="bcc" placeholder="Bcc" containerClass={'mb-3'} />
                        </Col>
                    </Row>

                    <FormInput
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        containerClass={'mb-3'}
                        register={register}
                        key="subject"
                        errors={errors}
                        control={control}
                    />

                    <div className="mb-3 card border-0">
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                            toolbarClassName="draft-toolbar"
                            editorClassName="react-draft-editor"
                            wrapperClassName="react-draft-wrapper  border border-1 rounded-1"
                            editorStyle={{ minHeight: '170px' }}
                            toolbar={{
                                options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                            }}
                        />
                    </div>
                    <div className="btn-toolbar">
                        <div className="float-end">
                            <Button className="btn-success waves-effect waves-light me-1">
                                <i className="far fa-save"></i>
                            </Button>
                            <Button className="btn-success waves-effect waves-light me-1">
                                <i className="far fa-trash-alt"></i>
                            </Button>
                            <Button type="submit" className="btn-purple waves-effect waves-light">
                                <span>Send</span>
                                <i className="fas fa-paper-plane ms-1"></i>
                            </Button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Compose;
