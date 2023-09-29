import classNames from 'classnames';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { KanbanBoardTask } from './types';

type TaskItemProps = {
    task: KanbanBoardTask;
};

// task item
const TaskItem = (props: TaskItemProps) => {
    const task = props.task || {};

    return (
        <>
            <span
                className={classNames('badge', 'float-end', {
                    'bg-danger text-white': task.priority === 'Urgent',
                    'bg-warning text-white': task.priority === 'High',
                })}
            >
                {task.priority}
            </span>
            <div className="d-flex align-items-center mb-1">
                <Form.Check className="form-check form-check-success">
                    <Form.Check.Input type="checkbox" name="taskCheck" id="TaskCheck" />
                </Form.Check>
                <h5 className="my-0">
                    <Link to="/apps/tasks/details" className="text-dark ms-1">
                        {task.title}
                    </Link>
                </h5>
            </div>

            <ul className="list-inline kanban-detail">
                <li className="list-inline-item">
                    <OverlayTrigger placement="top" overlay={<Tooltip>{task.userName}</Tooltip>}>
                        <img src={task.userAvatar} alt={task.userName} className="avatar-sm rounded-circle" />
                    </OverlayTrigger>
                </li>
                <li className="list-inline-item">
                    <OverlayTrigger placement="top" overlay={<Tooltip>{task.task + ' Tasks'}</Tooltip>}>
                        <i className="mdi mdi-format-align-left"></i>
                    </OverlayTrigger>
                </li>
                <li className="list-inline-item">
                    <OverlayTrigger placement="top" overlay={<Tooltip>{task.comment + ' Comments'}</Tooltip>}>
                        <i className="mdi mdi-comment-outline"></i>
                    </OverlayTrigger>
                </li>
            </ul>
        </>
    );
};

export default TaskItem;
