<!--<template>
     <div class="timetable" v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 text-xl w-full font-bold">'s timetable</h1>
        <div class="py-4 px-6">
            <DayPilotCalendar id="timetabel" :config="config"/>
        </div>
     </div>
     <div v-else>
        <NotLoggedIn/>
    </div>


    <script>
/*import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-vue'
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { computed } from "vue"
import NotLoggedIn from "../../components/NotLoggedIn.vue"

export default {
    name: 'Calendar',
    setup() {
    const store = useStore();
    const router = useRouter();

    return {
        isLoggedIn: computed(() => store.getters.isAuthenticated)
        };
    },
    data: function() {
    return {
      events: [],
      navigatorConfig: {
        showMonths: 3,
        skipMonths: 3,
        selectMode: "Week",
        startDate: "2022-03-01",
        selectionDay: "2022-02-28",
        onTimeRangeSelected: args => {
          this.config.startDate = args.day;
        }
      },
      config: {
        viewType: "Week",
        startDate: "2022-02-28",
        timeFormat: "Clock24Hours",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: async (args) => {
          const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
          const dp = args.control;
          dp.clearSelection();
          if (modal.canceled) {
            return;
          }
          dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          });
        },
        eventDeleteHandling: "Disabled",
        onEventMoved: () => {
          console.log("Event moved");
        },
        onEventResized: () => {
          console.log("Event resized");
        },
      },
    }
  },
  props: {
  },
  components: {
    DayPilotCalendar,
    DayPilotNavigator
  },
  computed: {
    calendar() {
      return this.$refs.calendar.control;
    }
  },
  methods: {
    loadEvents() {
      // placeholder for an HTTP call
      const events = [
        {
          id: 1,
          start: "2022-02-28T10:00:00",
          end: "2022-02-28T11:00:00",
          text: "Event 1",
          backColor: "#6aa84f",
          borderColor: "#38761d",
        },
        {
          id: 2,
          start: "2022-02-28T13:00:00",
          end: "2022-02-28T16:00:00",
          text: "Event 2",
          backColor: "#f1c232",
          borderColor: "#bf9000",
        },
        {
          id: 3,
          start: "2022-03-01T13:30:00",
          end: "2022-03-01T16:30:00",
          text: "Event 3",
          backColor: "#cc4125",
          borderColor: "#990000",
        },
        {
          id: 4,
          start: "2022-03-01T10:30:00",
          end: "2022-03-01T12:30:00",
          text: "Event 4"
        },
      ];
      this.calendar.update({events});
    },
  },
  mounted() {
    this.loadEvents();
  }
}*/
</template>-->
<template>
<div class="timetable" v-if="isLoggedIn">
    <h1 class="flex justify-center pt-16 text-xl w-full font-bold">'s timetable</h1>
    <div class="py-4 px-6">
        <div class="content">
            <DayPilotCalendar id="dp" :config="config" ref="calendar" />
        </div>
    </div>
</div>
<div v-else>
    <NotLoggedIn/>
</div>
</template>

<script>
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-vue'
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { computed } from "vue"
import NotLoggedIn from "../../components/NotLoggedIn.vue"

export default {
  name: 'Calendar',
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
        isLoggedIn: computed(() => store.getters.isAuthenticated)
        };
    },
  data: function() {
      var today = new Date()
      today = today.split(' ')[0];
      console.log(today)
    return {
      events: [],
      navigatorConfig: {
        showMonths: 3,
        skipMonths: 3,
        selectMode: "Week",
        startDate: "2022-03-01",
        selectionDay: "2022-02-28",
        onTimeRangeSelected: args => {
          this.config.startDate = args.day;
        }
      },
      config: {
        viewType: "Week",
        startDate: "2022-04-20",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: async (args) => {
          const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
          const dp = args.control;
          dp.clearSelection();
          if (modal.canceled) {
            return;
          }
          dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          });
        },
        eventDeleteHandling: "Disabled",
        onEventMoved: () => {
          console.log("Event moved");
        },
        onEventResized: () => {
          console.log("Event resized");
        },
      },
    }
  },
  props: {
  },
  components: {
    DayPilotCalendar,
    DayPilotNavigator,
    NotLoggedIn
  },
  computed: {
    // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
    calendar() {
      return this.$refs.calendar.control;
    }
  },
  methods: {
    loadEvents() {
      // placeholder for an HTTP call
      const events = [
        {
          id: 1,
          start: "2022-02-28T10:00:00",
          end: "2022-02-28T11:00:00",
          text: "Event 1",
          backColor: "#6aa84f",
          borderColor: "#38761d",
        },
        {
          id: 2,
          start: "2022-02-28T13:00:00",
          end: "2022-02-28T16:00:00",
          text: "Event 2",
          backColor: "#f1c232",
          borderColor: "#bf9000",
        },
        {
          id: 3,
          start: "2022-03-01T13:30:00",
          end: "2022-03-01T16:30:00",
          text: "Event 3",
          backColor: "#cc4125",
          borderColor: "#990000",
        },
        {
          id: 4,
          start: "2022-03-01T10:30:00",
          end: "2022-03-01T12:30:00",
          text: "Event 4"
        },
      ];
      this.calendar.update({events});
    },
  },
  mounted() {
    this.loadEvents();
  }
}
</script>
