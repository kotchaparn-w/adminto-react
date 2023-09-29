import FullCalendar, { EventDropArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';

type CalendarProps = {
    onDateClick: (value: any) => void;
    onEventClick: (value: any) => void;
    onEventDrop: (value: EventDropArg) => void;
    onDrop: (value: any) => void;
    events: EventInput[];
};

const Calendar = ({ onDateClick, onEventClick, onDrop, onEventDrop, events }: CalendarProps) => {
    // handle calendar methods
    const handleDateClick = (arg: any) => {
        onDateClick(arg);
    };
    const handleEventClick = (arg: any) => {
        onEventClick(arg);
    };
    const handleDrop = (arg: any) => {
        onDrop(arg);
    };
    const handleEventDrop = (arg: EventDropArg) => {
        onEventDrop(arg);
    };

    return (
        <>
            {/* full calendar control */}
            <div id="calendar">
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, BootstrapTheme]}
                    handleWindowResize={true}
                    themeSystem="bootstrap"
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        list: 'List',
                        prev: 'Prev',
                        next: 'Next',
                    }}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    }}
                    editable={true}
                    selectable={true}
                    droppable={true}
                    events={events}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    drop={handleDrop}
                    eventDrop={handleEventDrop}
                />
            </div>
        </>
    );
};

export default Calendar;
