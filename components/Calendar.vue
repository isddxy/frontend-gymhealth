<template>
  <FullCalendar
    defaultView = "dayGridMonth"
    :plugins = "calendarPlugins"
    :locale = "locale"
    :events = "events"
    :editable = "true"
    :selectable = "true"
    :ignoreTimezone = "false"
    :nowIndicator = "true"
    :header = "header"
    :eventLimit = "true"
    :firstDay = "0"
    :weekends = "true"
    weekMode = "fixed"
    :weekNumbers = "false"
    :slotDuration = "slotDuration"
    :snapDuration = "snapDuration"
    :allDaySlot = "false"
    allDayText = "allday"
    :slotMinutes = "15"
    :snapMinutes = "15"
    :slotLabelFormat = "slotLabelFormat"
    :firstHour = "9"
    :defaultTimedEventDuration = "defaultTimedEventDuration"
    :axisFormat = "axisFormat"
    :timeFormat = "timeFormat"
    :maxTime = "maxTimes"
    :minTime = "minTimes"
    @eventClick="eventClick"
    @dateClick="dateClick"
  />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import momentPlugin from '@fullcalendar/moment'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ruLocale from '@fullcalendar/core/locales/ru'
import moment from 'moment'
export default {
  components: {
    FullCalendar
  },
  props: {
    event: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin, momentPlugin, timeGridPlugin, interactionPlugin ],
      locale: ruLocale,
      events: this.event,
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      slotDuration: '00:30:00',
      snapDuration: '00:15:00',
      slotLabelFormat: 'H:mm',
      defaultTimedEventDuration: '10:00:00',
      axisFormat: 'H:mm',
      timeFormat: 'H:mm',
      minTimes: '07:00',
      maxTimes: '19:00',
      buttonText: {
        prev: '<',
        next: '>',
        prevYear: '<',
        nextYear: '>'
      }
    }
  },
  methods: {
    eventClick(info) {
      alert('Event: ' + info.event.title)
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY)
      alert('View: ' + info.view.type)
      // change the border color just for fun
      info.el.style.borderColor = 'red'
    },
    dateClick(info) {
      alert('Clicked on: ' + info.dateStr)
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY)
      alert('Current view: ' + info.view.type)
      info.dayEl.style.backgroundColor = 'red'
    }
  }
}
</script>
