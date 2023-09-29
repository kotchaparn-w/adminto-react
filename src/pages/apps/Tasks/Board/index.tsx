import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, Modal, Button } from 'react-bootstrap';
import { Draggable, Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// hooks
import { usePageTitle } from '../../../../hooks';

// component
import { FormInput } from '../../../../components/form';

import TaskItem from './Task';

// types
import { KanbanBoardTask } from './types';

// dummy data
import { tasks } from './data';

// images
import defaultAvatar from '../../../../assets/images/users/user-1.jpg';

type task = {
    upcomingTasks: KanbanBoardTask[];
    inprogressTasks: KanbanBoardTask[];
    completedTasks: KanbanBoardTask[];
};

// kanban
const Kanban = () => {
    // set pagetitle
    usePageTitle({
        title: 'Kanban Board',
        breadCrumbItems: [
            {
                path: 'apps/tasks/kanban',
                label: 'Tasks',
            },
            {
                path: 'apps/tasks/kanban',
                label: 'Kanban Board',
                active: true,
            },
        ],
    });

    const [state, setState] = useState<task>({
        upcomingTasks: tasks.filter((t) => t.status === 'Upcoming'),
        inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
        completedTasks: tasks.filter((t) => t.status === 'Completed'),
    });
    const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
    const [newTaskDetails, setNewTaskDetails] = useState<any>(null);

    /*
     * Form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            title: yup.string().required(),
            userName: yup.string().required(),
        })
    );

    /*
     * Form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors },
    } = methods;

    /**
     * Toggles the new task modal
     */
    const toggleNewTaskModal = () => {
        setNewTaskModal((prevstate) => !prevstate);
    };

    /**
     * Creates new empty task with given status
     * @param status
     * @param queue
     */
    const newTask = (status: string, queue: string) => {
        setNewTaskDetails({
            dueDate: new Date(),
            userAvatar: defaultAvatar,
            task: 3,
            comment: 5,
            status: status,
            queue: queue,
        });
        setNewTaskModal(true);
    };

    // a little function to help us with reordering the result
    const reorder = (list: any[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    const move = (
        source: Iterable<unknown> | ArrayLike<unknown>,
        destination: Iterable<unknown> | ArrayLike<unknown>,
        droppableSource: { index: number; droppableId: string | number },
        droppableDestination: { index: number; droppableId: string | number }
    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result: any = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    /**
     * Gets the list
     */
    const getList = (id: string) => {
        const modifiedState: any = { ...state };
        const stateTasks: any = modifiedState[id] && modifiedState[id];
        return stateTasks;
    };

    /**
     * On drag end
     */
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(getList(source.droppableId), source.index, destination.index);
            let localState: any = { ...state };
            localState[source.droppableId] = items;
            setState(localState);
        } else {
            const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
            const localState = { ...state, ...result };
            setState(localState);
        }
    };

    /**
     * Handles the new task form submission
     */

    const handleNewTask = (values: any) => {
        const formData = {
            title: values['title'],
            priority: values['priority'],
            userName: values['userName'],
        };

        const newTask = {
            ...newTaskDetails,
            ...formData,
            id: totalTasks + 1,
        };

        let modifiedState: any = { ...state };
        let tasks = [...getList(newTaskDetails.queue), newTask];
        modifiedState[newTaskDetails.queue] = [...tasks];

        setState(modifiedState);
        setNewTaskModal(false);
        setTotalTasks(totalTasks + 1);
        // reset the form after submission
        reset();
    };

    return (
        <>
            <Row>
                <DragDropContext onDragEnd={onDragEnd}>
                    {/* todo */}
                    <Droppable droppableId="upcomingTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Action</Dropdown.Item>
                                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                                <Dropdown.Item>Something Else</Dropdown.Item>
                                                <Dropdown.Item>Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title mt-0 mb-3 text-primary">Upcoming</h5>
                                        {state.upcomingTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="upcoming">
                                            {(state.upcomingTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                        <div className="text-center pt-2">
                                            <Link
                                                to="#"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={() => newTask('Pending', 'upcomingTasks')}
                                            >
                                                <i className="mdi mdi-plus"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>

                    {/* in progress */}
                    <Droppable droppableId="inprogressTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Action</Dropdown.Item>
                                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                                <Dropdown.Item>Something Else</Dropdown.Item>
                                                <Dropdown.Item>Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title mt-0 mb-3 text-warning">In Progress</h5>

                                        {state.inprogressTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="inprogress">
                                            {(state.inprogressTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                        <div className="text-center pt-2">
                                            <Link
                                                to="#"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={() => newTask('Inprogress', 'inprogressTasks')}
                                            >
                                                <i className="mdi mdi-plus"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>

                    {/* done */}
                    <Droppable droppableId="completedTasks">
                        {(provided, snapshot) => (
                            <Col lg={4} ref={provided.innerRef}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown className="float-end" align="end">
                                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Action</Dropdown.Item>
                                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                                <Dropdown.Item>Something Else</Dropdown.Item>
                                                <Dropdown.Item>Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5 className="header-title mt-0 mb-3 text-success">Completed</h5>
                                        {state.completedTasks.length === 0 && (
                                            <p className="text-center text-muted pt-2 mb-0">No Tasks</p>
                                        )}

                                        <ul className="sortable-list tasklist list-unstyled" id="done">
                                            {(state.completedTasks || []).map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <TaskItem task={item} />
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                        <div className="text-center pt-2">
                                            <Link
                                                to="#"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={() => newTask('Done', 'completedTasks')}
                                            >
                                                <i className="mdi mdi-plus"></i> Add New
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Droppable>
                    {/* </div> */}
                </DragDropContext>
            </Row>

            {/* add new task modal */}
            {newTaskDetails && (
                <Modal show={newTaskModal} onHide={toggleNewTaskModal} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Add New Task</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(handleNewTask)} className="px-2">
                            <FormInput
                                name="title"
                                label="Title"
                                placeholder="Enter title"
                                type="text"
                                containerClass="mb-3"
                                className="form-control"
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />

                            <Row>
                                <Col md={6}>
                                    <FormInput
                                        name="userName"
                                        label="Assign To"
                                        placeholder="Enter Name"
                                        type="text"
                                        containerClass="mb-3"
                                        className="form-control"
                                        register={register}
                                        key="userName"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col md={6}>
                                    <FormInput
                                        name="priority"
                                        label="Priority"
                                        type="select"
                                        containerClass="mb-3"
                                        className="form-select"
                                        register={register}
                                        key="priority"
                                        errors={errors}
                                        control={control}
                                    >
                                        <option value="">Select</option>
                                        <option value="Urgent">Urgent</option>
                                        <option value="High">High</option>
                                    </FormInput>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormInput
                                        name="startDate"
                                        label="Start Date"
                                        placeholder="Enter Date"
                                        type="text"
                                        containerClass="mb-3"
                                        className="form-control"
                                        register={register}
                                        key="startDate"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                                <Col md={6}>
                                    <FormInput
                                        name="DueDate"
                                        label="Due Date"
                                        placeholder="Enter Date"
                                        type="text"
                                        containerClass="mb-3"
                                        className="form-control"
                                        register={register}
                                        key="DueDate"
                                        errors={errors}
                                        control={control}
                                    />
                                </Col>
                            </Row>

                            <div className="text-start">
                                <Button variant="success" type="submit">
                                    Save
                                </Button>
                                <Button variant="danger" className="ms-1" onClick={toggleNewTaskModal}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default Kanban;
