<template lang="pug">
	menu.cmenu(:class="{actived: isActive}")
</template>

<script>
	export default {
        name: 'Menuzão'
        , computed: {
            isActive () {
                return this.$store.state.menuActived
            }
        },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.cmenu
		width 250px
		margin 0
		padding 20px 
		background yellow
		opacity 0
        transform translate(-250px, 0)
		&.actived
			opacity 1
</style>
