<template>
  <div>
    <h1>{{ $t('greeting') }}</h1>
    <p>{{ $t('instructions') }}</p>
    <button @click="toggleLanguage">{{ $t('button') }}</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ja' : 'en';
    },
  },
};
</script>
