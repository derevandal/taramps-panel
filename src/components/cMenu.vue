<template lang="pug">
	menu.cmenu(:class="{actived: isActive}")
		li.item
			a(href="/#/inicio").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#home")
				span Início
		li.item
			a(href="/#/produtos").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#box")
				span Produtos
		li.item
			a(href="/#/brindes").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#giftbox")
				span  Brindes
		li.item
			a(href="/#/empresas").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#three-buildings")
				span Empresas
		li.item
			a(href="/#/usuarios").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#multiple-users-silhouette")
				span Usuários
		li.item
			a(href="/#/relatorios").link.sweep-to-left
				svg(class="icon")
					use(xlink:href="/static/sprite.svg#progress-report")
				span Relatórios
</template>

<script>
	export default {
			name: 'Menuzao'
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
		display flex
		flex-direction column
		flex-wrap flex
		position relative
		margin 0
		padding 0
		width 0px
		opacity 0
		
		background #C01F2F
		list-style-type none
		-webkit-font-smoothing antialiased
	
		transform-origin 0% 0%
		transform translate(-100%, 0)
		
		transition all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)

		&.actived
			width 180px
			transform scale(1.0, 1.0)
			opacity 1
			&:after
				content ""
				position absolute
				right -5px
				top 0
				width 5px
				height calc(100vh - 69px)
				background linear-gradient(to right, rgba(0, 0, 0, .5) , rgba(0, 0, 0, 0))
	.icon
		width 1em
		height 1em
		fill white
	.item
		width 100%
	.link
		display flex
		padding 12px 0px 12px 12px
		color white
		text-decoration none
		font-size 1.2em
		span
			margin-left 15px
	// .last
	// 	margin-top auto
</style>
