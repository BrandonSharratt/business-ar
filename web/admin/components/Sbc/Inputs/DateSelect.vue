<script setup lang="ts">
import type { FormError } from '#ui/types'

const props = defineProps<{
  initialDate?: Date,
  maxDate?: Date,
  placeholder?: string,
  variant?: string,
  errors?: FormError[],
  disabled?: boolean,
  arialabel?: string
}>()

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'selection', value: Date | null): void
}>()

const showDatePicker = ref(false)

const selectedDate: Ref<Date | null> = ref(props.initialDate || null)
watch(() => selectedDate.value, val => emit('selection', val))

const updateDate = (val: Date | null) => {
  selectedDate.value = val
}

const selectedDateDisplay: ComputedRef<string> = computed(
  () => selectedDate.value ? dateToString(selectedDate.value, 'YYYY-MM-DD') : ''
)

const handleManualDateEntry = (input: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  const inputDate = dateStringToDate(input)
  const validDate = inputDate && (!props.maxDate || inputDate < props.maxDate)
  if (!input || (input.match(dateRegex) !== null && validDate)) {
    updateDate(inputDate)
    showDatePicker.value = false
  }
}

const errorMessage = computed(() => {
  if (props.errors !== undefined && props.errors.length > 0) {
    return props.errors[0].message
  }
  return ''
})

// colouring
const iconClass = computed(() => {
  if (props.variant === 'primary') {
    return 'text-primary-500'
  }
  if (props.variant === 'error') {
    return 'text-red-500'
  }
  return 'text-gray-700'
})

defineExpose({
  updateDate
})

// usage
// <SbcInputsDateSelect
//   id="date-select-agm"
//   :max-date="new Date()"
//   :placeholder="$t('page.annualReport.form.agmDate.placeholder')"
//   :arialabel="$t('page.annualReport.form.agmDate.label')"
//   :initial-date="arData.agmDate ? dateStringToDate(arData.agmDate) : undefined"
//   :variant="handleFormInputVariant('agmDate', arFormRef?.errors)"
//   @selection="(e) => {
//     arFormRef?.clear()
//     arData.agmDate = dateToString(e!, 'YYYY-MM-DD')}"
// />
</script>
<template>
  <div>
    <!-- required for UInput aria-label -->
    <!-- eslint-disable vue/attribute-hyphenation -->
    <UInput
      :ui="{ icon: { base: showDatePicker && !errorMessage ? 'text-primary-500' : iconClass } }"
      :model-value="selectedDateDisplay"
      icon="i-mdi-calendar"
      :placeholder="placeholder || ''"
      :ariaLabel="arialabel || ''"
      :disabled
      trailing
      type="text"
      :variant="errorMessage ? 'error' : variant || 'bcGov'"
      data-cy="date-select"
      @click="showDatePicker = true"
      @keydown.enter="showDatePicker = true"
      @update:model-value="handleManualDateEntry($event)"
    />
    <SbcDatePicker
      v-if="showDatePicker"
      class="absolute z-[100] translate-y-[-120%]"
      :default-selected-date="selectedDate"
      :set-max-date="maxDate"
      @selected-date="updateDate($event); showDatePicker = false"
      @click-outside="showDatePicker = false"
    />
    <div class="mt-2 text-sm text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
