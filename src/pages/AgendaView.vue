<template>
  <q-page class="">
    <div class="row justify-between header-container">
      <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />
    </div>
    <h3 style="text-align: center; align-items: center">Agenda View</h3>
    <q-btn
      class="fixed-button-container"
      color="primary"
      round
      icon="add"
      @click="openEventForm"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import NavigationBar from "../components/NavigationBar.vue";

export default defineComponent({
  name: "TagView",
  components: {
    NavigationBar,
  },
  data() {
    return {};
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
