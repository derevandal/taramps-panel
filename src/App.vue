<script>
import cHeader from '@/components/cHeader';
import cMenu from '@/components/cMenu';

export default {
  name: 'Aplicacqozao',
  components: {
    cHeader,
    cMenu,
  },
  methods: {
  },
};
</script>

<style lang='stylus'>

@import '../node_modules/nib/'

normalize-css()

*
  box-sizing border-box

img
  width 100%
  height 100%

#main
  display flex
  min-height calc(100vh - 69px)
.main-page
  padding 0 25px
</style>

<template lang='pug'>
  #app
    cHeader
    main#main
      cMenu(:class="{actived: isActive}")
      router-view.main-page
</template>

