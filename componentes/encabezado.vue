<template>
	<div class="header clearfix">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    	<span class="navbar-toggler-icon"></span>
		  	</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><router-link exact tag="a" class="nav-link" active-class="active" to="/equipos"><i class="fas fa-home"></i></router-link></li>
				</ul>
			</div>
		</nav>
		<h3 class="text-center">
		<div class="casco">
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 109.4 102.7" xml:space="preserve">

				<path
					d="M39.8,64.8c0,3.6-2.1,7.7-6.4,7.7c-4.3,0-8-4.5-8-8.1c0-3.6,2.6-6.5,6.9-6.5S39.8,61.2,39.8,64.8z M103.3,71.4l-0.6,16.9
					c0,0.9-0.5,1.6-1.3,2.1c-2.4,1.4-17.1,3.2-25.2-3.7c-0.9-0.7-4.9-9.4-5.1-9.9c0,0-1,0.1-2.5,0.3c0.2,0.5,0.5,1.1,0.7,1.6
					c3.5,7.6-12.5,15.3-21.9,15C34.6,93.2,28,88.2,14.9,80.8c-1.5-0.9-0.2-3.4-1.8-6.3c-3.9-7-7.2-14.6-7.2-23.1
					C5.9,26.5,26,6.5,50.8,6.5C62.2,6.5,83.6,15.2,90,34c0.3,0.8,4.7,1.8,4.8,2.6c0.2,2.1,0.1,2.8,0.2,4.8c0.2,4.6-19.4,0.2-27.4,8.8
					c0.5,1.8,1.2,3.9,1.9,6.1c2.8-0.2,13.9-0.5,14.1-0.5c17.1-0.2,19.1,3.5,19.2,3.6c0.9,1,0.8,2.6-0.3,3.5c-0.1,0.1-0.2,0.2-0.4,0.3
					l0.7,2.9c0.9-0.1,2.7,0.5,3,2.4C106.2,70.9,103.3,71.4,103.3,71.4z M47.3,65.8c0-7.1-6.7-13.4-14.4-13.4s-12.8,4.1-12.8,11.2
					c0,7.1,6.7,15.2,14.4,15.2C42.2,78.8,47.3,72.9,47.3,65.8z M60,75.1c0-2.3-1.9-4.2-4.2-4.2s-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2
					S60,77.5,60,75.1z M64.6,64.3c1.4,0.7,2.4,1.1,2.5,1.1c0-0.1-1.4-4.3-2.7-8.4C64.1,59,64.1,61.4,64.6,64.3z M69.3,71.9
					c-0.2-0.6-0.4-1.1-0.6-1.7c-0.5,0-2.3,0-2.8-0.1c0.2,0.7,0.4,1.4,0.7,2.1L69.3,71.9z M72.1,64.8c3.3-0.4,7.7-1,12.1-1.8
					c7-1.2,10.8-2.2,12.9-2.8c-2.5-0.6-6.8-1.1-14.2-1c-4.8,0-9.5,0.3-12.4,0.5C70.8,60.8,72,64.3,72.1,64.8z M98.3,73.6l-22.1,2.5
					c2.2,5.5,3.1,6.6,3.3,6.8c1.4,1.3,4.8,2.9,9.2,3.8c3.5,0.7,6.8,0.6,9-0.1L98.3,73.6z M98.3,68.6l-0.8-3.3c-2.5,0.7-6.4,1.6-12.4,2.6
					c-4,0.7-8.1,1.3-11.4,1.7c0.2,0.6,0.4,1.2,0.6,1.7L98.3,68.6L98.3,68.6z"
				/>
				
				  
			</svg>
		</div>
		NCAA college football teams
		</h3>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
h3{
	color:#ddd;
	padding: 40px 0px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	background: rgba(0,0,0,0.1);
}
.navbar{
	border-bottom: 5px solid rgba(255,255,255,0.1);
}
.casco{
	display: inline-block;
	width:100px;
}
.casco svg{

	fill:rgba(255,255,255,0.9);

}

</style>