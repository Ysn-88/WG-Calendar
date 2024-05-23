<template>
  <q-page class="">
    <div class="row justify-between header-container">
      <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />
    </div>

    <q-calendar
      ref="calendar"
      v-model="selectedDate"
      view="day"
      :locale="locale"
      bordered
      animated
      @change="onChange"
      @moved="onMoved"
      @click-date="onClickDate"
      @click-time="openEventForm"
      @click-interval="onClickInterval"
      @click-head-intervals="onClickHeadIntervals"
      @click-head-day="onClickHeadDay"
    >
    </q-calendar>
    <q-btn
      class="fixed-button-container"
      color="primary"
      round
      icon="add"
      @click="openEventForm"
    />

    <q-dialog v-model="isFormVisible">
      <q-card style="width: 400px">
        <q-card-section>
          <q-form @submit="saveEvent">
            <q-input v-model="eventForm.title" label="Event Title" />
            <q-input v-model="eventForm.description" label="Description" />
            <q-input v-model="eventForm.date" label="Date" type="date" />
            <q-input
              v-model="eventForm.startTime"
              label="Start Time"
              type="time"
            />
            <q-input v-model="eventForm.endTime" label="End Time" type="time" />
            <div class="q-mt-md">
              <q-btn
                label="Cancel"
                color="primary"
                @click="cancelEvent"
                class="q-mr-md"
              />
              <q-btn
                type="submit"
                label="Save"
                color="primary"
                @click="openEventForm"
                class="q-ml-md"
                :disable="isSaveDisabled"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QCalendar, today } from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass";

import { defineComponent } from "vue";
import NavigationBar from "../components/NavigationBar.vue";

export default defineComponent({
  name: "TagView",
  components: {
    NavigationBar,
    QCalendar,
  },
  data() {
    return {
      selectedDate: today(),
      locale: "de",
      locales: [{ value: "de", label: "Deutsch" }],
      events: [],
      eventForm: {
        title: "",
        date: "",
        startTime: "",
        endTime: "",
        description: "",
      },
      isFormVisible: false,
    };
  },
  computed: {
    isSaveDisabled() {
      return !(this.eventForm.title && this.eventForm.description);
    },
  },

  methods: {
    openEventForm() {
      this.isFormVisible = true;
    },
    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
    },
    onChange(data) {
      console.log("onChange", data);
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickTime(data) {
      console.log("onClickTime", data);
      const newEvent = { ...this.eventForm };
      this.events.push(newEvent);

      //storage the updated events array in localStorage
      localStorage.setItem("calendarEvents", JSON.stringify(this.events));
    },
    onClickInterval(data) {
      console.log("onClickInterval", data);
    },
    onClickHeadIntervals(data) {
      console.log("onClickHeadIntervals", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    saveEvent() {
      const newEvent = { ...this.eventForm };
      this.events.push(newEvent);

      //storage the updated events array in localStorage
      localStorage.setItem("calendarEvents", JSON.stringify(this.events));

      //event dialogue schliessen
      this.isFormVisible = false;
    },
    cancelEvent() {
      this.isFormVisible = false;
    },
  },
});
</script>

<style scoped>
.fixed-button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Optional: Add a semi-transparent background */
  z-index: 1000;
}
.header-container {
  height: 60px; /* Adjust the height as needed */
  align-items: center; /* Vertically center content */
  margin: -10px 0 10px 0;
}
</style>
