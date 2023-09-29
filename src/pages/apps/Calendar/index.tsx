import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import '@fullcalendar/react';
import { DateClickArg, Draggable } from '@fullcalendar/interaction';
import { DateInput, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core';
import classNames from 'classnames';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import Calendar from './Calendar';
import AddEditEvent from './AddEditEvent';

// dummy data
import { defaultEvents } from './data';
import { FormInput } from '../../../components/form';

const SidePanel = () => {
    // external events
    const externalEvents = [
        {
            id: 1,
            className: 'bg-primary',
            title: 'New Theme Release',
        },
        {
            id: 2,
            className: 'bg-pink',
            title: 'My Event',
        },
        {
            id: 3,
            className: 'bg-warning',
            title: 'Meet manager',
        },
        {
            id: 4,
            className: 'bg-purple',
            title: 'Create New theme',
        },
    ];

    return (
        <>
            <div id="external-events">
                <br />
                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                {/* external events */}
                {(externalEvents || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })}
            </div>
            <FormInput type="checkbox" name="checkbox" label="Remove after drop" className="my-3" />
        </>
    );
};

const CalendarApp = () => {
    // set pagetitle
    usePageTitle({
        title: 'Calendar',
        breadCrumbItems: [
            {
                path: '/apps/calendar',
                label: 'Apps',
            },
            {
                path: '/apps/calendar',
                label: 'Calendar',
                active: true,
            },
        ],
    });

    // modal handling
    const [show, setShow] = useState<boolean>(false);
    const onCloseModal = () => {
        setShow(false);
        setEventData({});
        setDateInfo({});
    };
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    // event data
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<any>({});

    useEffect(() => {
        // create dragable events
        let draggableEl = document.getElementById('external-events');
        new Draggable(draggableEl!, {
            itemSelector: '.external-event',
        });
    }, []);

    // calendar events

    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        setIsEditable(true);
        onOpenModal();
    };

    // on drop
    const onDrop = (arg: any) => {
        const dropEventData = arg;
        const title = dropEventData.draggedEl.title;
        if (title == null) {
        } else {
            let newEvent = {
                id: String(events.length + 1),
                title: title,
                start: dropEventData ? dropEventData.dateStr : new Date(),
                className: dropEventData.draggedEl.attributes['data-class']['value'],
            };
            const modifiedEvents = [...events];
            modifiedEvents.push(newEvent);

            setEvents(modifiedEvents);
        }
    };

    // on add event
    const onAddEvent = (data: any) => {
        const modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents.push(event);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // on update event
    const onUpdateEvent = (data: any) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
        setIsEditable(false);
    };

    // on remove event
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /**
     * on event drop
     */
    const onEventDrop = (arg: EventDropArg) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === arg.event.id);
        modifiedEvents[idx]['title'] = arg.event.title;
        modifiedEvents[idx]['className'] = arg.event.classNames;
        modifiedEvents[idx]['start'] = arg.event.start as DateInput;
        modifiedEvents[idx]['end'] = arg.event.end as DateInput;
        setEvents(modifiedEvents);
        setIsEditable(false);
    };

    // create new event
    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    return (
        <>
            <Row>
                <Col lg={3}>
                    {/* add events */}
                    <Button
                        className="btn btn-lg font-16 btn-success w-100"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        <i className="fa fa-plus me-1"></i> Create New
                    </Button>

                    <SidePanel />
                </Col>
                <Col lg={9}>
                    <Card>
                        <Card.Body>
                            {/* fullcalendar control */}
                            <Calendar
                                onDateClick={onDateClick}
                                onEventClick={onEventClick}
                                onDrop={onDrop}
                                events={events}
                                onEventDrop={onEventDrop}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* add new event modal */}
            {show ? (
                <AddEditEvent
                    isOpen={show}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    eventData={eventData}
                    onUpdateEvent={onUpdateEvent}
                    onRemoveEvent={onRemoveEvent}
                    onAddEvent={onAddEvent}
                />
            ) : null}
        </>
    );
};

export default CalendarApp;
