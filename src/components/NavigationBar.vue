<template>
  <div class="row justify-center">
    <div class="q-pa-md q-gutter-sm row">
      <q-btn
        outline color="primary"
        label="Heute"
        size="sm"
        @click="$emit('today')"
      >
      </q-btn>
      <q-btn
      flat
      round
      color="primary"
      @click="$emit('prev')"
      >
      <q-icon name="keyboard_arrow_left" size="32px" />
      </q-btn>
      <q-btn
      flat
      round
      color="primary"
      @click="$emit('next')"
      >
      <q-icon name="keyboard_arrow_right" size="32px" />
      </q-btn>
    </div>
  </div>
</template>




