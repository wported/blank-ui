<template>
  <div class="bl-steps">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="bl-steps__item"
      :class="getStepClass(index)"
    >
      <div class="bl-steps__indicator">
        <span
          v-if="index < currentStep"
          class="bl-steps__check"
        >✓</span>
        <span v-else>{{ index + 1 }}</span>
      </div>
      <div class="bl-steps__content">
        <div class="bl-steps__title">{{ step.title }}</div>
        <div class="bl-steps__description">{{ step.description }}</div>
      </div>
      <div
        v-if="index < steps.length - 1"
        class="bl-steps__line"
        :class="{ 'bl-steps__line--active': index < currentStep }"
      ></div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
export interface StepItem {
  title: string
  description?: string
}

export interface BlStepsProps {
  steps: StepItem[]
  currentStep: number
}

const props = defineProps<BlStepsProps>()

const getStepClass = (index: number) => {
  if (index < props.currentStep) return 'bl-steps__item--completed'
  if (index === props.currentStep) return 'bl-steps__item--active'
  return 'bl-steps__item--pending'
}
</script>

<style scoped>
.bl-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
}

.bl-steps__item {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.bl-steps__indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bl-bg-tertiary);
  color: var(--bl-text-secondary);
  margin-bottom: 12px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 3;
  font-weight: 600;
  font-size: 14px;
}

.bl-steps__item--completed .bl-steps__indicator {
  background-color: var(--bl-color-success);
  color: white;
}

.bl-steps__item--active .bl-steps__indicator {
  background-color: var(--bl-color-primary);
  color: white;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  transform: scale(1.05);
}

.bl-steps__title {
  font-weight: 500;
  color: var(--bl-text-primary);
  font-size: 14px;
}

.bl-steps__description {
  font-size: 12px;
  color: var(--bl-text-secondary);
  margin-top: 4px;
}

.bl-steps__line {
  position: absolute;
  top: 16px;
  left: calc(50% + 16px);
  right: calc(-50% + 16px);
  height: 2px;
  background-color: var(--bl-bg-tertiary);
  z-index: 1;
}

.bl-steps__line--active {
  background-color: var(--bl-color-success);
}

.bl-steps__item:last-child .bl-steps__line {
  display: none;
}

@media (max-width: 768px) {
  .bl-steps {
    padding: 0;
    flex-direction: column;
    gap: 16px;
  }

  .bl-steps__item {
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
  }

  .bl-steps__line {
    display: none;
  }

  .bl-steps__content {
    text-align: left;
  }
}
</style>