<template lang="pug">
  header.cheader
    .left
      .hambuguer-icon(@click="toggleMenu" :class="{actived: isActive}")
        span
      a(href="/#/").logotipo
        img(src="../assets/logotipo-white.svg")
    .user XD
</template>

<script>
export default {
    name: 'Headerzao',
    methods: {
        toggleMenu () {
            this.$store.dispatch('toggleMenu')
        }
    }
    , computed: {
        isActive () {
            return this.$store.state.menuActived
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .cheader
        display flex
        background #DA2335
        justify-content space-between
    .left
        display flex
    .logotipo
        width 200px
        display block
        padding 5px 10px
        transition filter .2s ease
        &:hover
            filter brightness(10000%)


    $lineWidth = 4px
    $lineLength = 35px
    $baseMargin = 10px
    $animationDuration = .2s
    $color__white = #ffffff

    .hambuguer-icon
        display block
        cursor pointer
        height ($baseMargin * 2 + $lineWidth)
        width $lineLength
        margin auto 10px auto 10px
        align-self center
        transition ease all .2s
        span
            display block
            top $baseMargin
            width $lineLength
            height $lineWidth
            background-color $color__white
            position relative
            transition $animationDuration ease all
            &::after, &::before
                display block
                content " "
                position absolute
                width $lineLength
                height $lineWidth
                background-color $color__white
                transition-duration $animationDuration
                transition-delay $animationDuration, 0
            &::before
                margin-top -1*$baseMargin
            &::after
                margin-top $baseMargin
    .hambuguer-icon.actived
      span
          background-color transparent
          &::before, &::after
              background-color $color__yellow1
              margin-top 0
              transition-delay 0, $animationDuration
          &::before
              transform rotate(45deg)
          &::after
              transform rotate(-45deg)
    .sweep-to-left
        transform perspective(1px) translateZ(0)
        box-shadow 0 0 1px transparent
        position relative
        transition color ease .3s .1s
        &:before
            content ""
            position absolute
            z-index -1
            top 0
            left 0
            right 0
            bottom 0
            background white
            transform scaleX(0)
            transform-origin 100% 50%
            transition transform .3s ease-out
        &:hover,
        &:focus,
        &:active
            color black
            .icon
                fill black
            &:before
                transform scaleX(1)
</style>
