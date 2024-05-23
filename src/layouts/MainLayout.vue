<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-avatar>
          <img src="../assets/wgn.jpg" />
        </q-avatar>

        <q-toolbar-title class="text-caption text-primary">
          <span class="q-pr-sm text-h6" style="font-family: Copperplate"
            >WAGNER</span
          >Kalender
        </q-toolbar-title>

        <q-btn-dropdown outline color="primary" :label="selectedComponentLabel">
          <q-list>
            <q-item clickable @click="navigateToComponent('tag')" v-close-popup>
              <q-item-section>
                <q-item-label>Tag</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="navigateToComponent('woche')"
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Woche</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="navigateToComponent('monat')"
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Monat</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="navigateToComponent('agenda')"
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Agenda</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {};
  },
  computed: {
    selectedComponentLabel() {
      // Use the route's name as the dropdown label
      return this.$route.name || "Default Label";
    },
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push({ name: routeName });
    },
    navigateToComponent(routeName) {
      this.$router.push({ name: routeName });
    },
  },

  components: {},
});
</script>
<style>
.text-caption {
  margin-bottom: -10px;
}
</style>
