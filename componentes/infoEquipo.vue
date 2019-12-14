<template>
    	<div class="jumbotron">
    		<h2 style="text-align: center; margin-bottom: 40px;">Universidad {{equipoActivo.school}}</h2>
    		<hr />
    		<div class="row">
	    		<div v-if="equipoActivo.logos" class="lienzoLogo col-sm" v-bind:style="{ background: equipoActivo.color }">
						<img v-bind:src="equipoActivo.logos[1]" v-on:error="cargaFallida" />
				</div>
				<div class="detalles col-sm">
					<div>
						<p v-if="equipoActivo.abbreviation"><strong>Sigla:</strong> {{equipoActivo.abbreviation}}</p>
						<hr v-if="equipoActivo.abbreviation" />
						<p v-if="equipoActivo.mascot"><strong>Mascota:</strong> {{equipoActivo.mascot}}</p>
						<hr v-if="equipoActivo.mascot" />
						<p style="margin-bottom: 10px;" v-if="equipoActivo.alt_name1 || equipoActivo.alt_name2 || equipoActivo.alt_name3"><strong>Nombres Alternativos:</strong></p>
						<ul class="list-group-flush">
							<li class="list-group-item" v-if="equipoActivo.alt_name1">{{equipoActivo.alt_name1}}</li>
							<li class="list-group-item" v-if="equipoActivo.alt_name2">{{equipoActivo.alt_name2}}</li>
							<li class="list-group-item" v-if="equipoActivo.alt_name3">{{equipoActivo.alt_name3}}</li>
						</ul>
						<p v-if="equipoActivo.conference"><strong>Conferencia:</strong> {{equipoActivo.conference}} </p>
						<hr v-if="equipoActivo.conference" />
						<p v-if="equipoActivo.division"><strong>División:</strong> {{equipoActivo.division}} </p>
						<p class="colorEquipo" v-if="equipoActivo.color"><strong>Color principal</strong> <span class="cajaColor" v-bind:style="{ background: equipoActivo.color }"></span> </p>
						<hr v-if="equipoActivo.alt_color" />
						<p class="colorEquipo" v-if="equipoActivo.alt_color"><strong>Color alternativo</strong> <span class="cajaColor" v-bind:style="{ background: equipoActivo.alt_color }"></span> </p>
						
					</div>
				</div>
			</div>
			<hr />
			<div class="nota" v-if="equipoActivo.nota">
				<p><strong>Nota</strong></p>
				<p>{{equipoActivo.nota}}</p>
			</div>
			<button class="btn btn-primary center" v-on:click="volver"><i class="fas fa-arrow-circle-left"></i> Volver</button>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				id:0,
				equipoActivo:{},
				nota:''
			}
		},
		methods:{
			volver(){
				this.$router.push({name:'equipos'});
			},
			cargaFallida(e){
				e.target.src = '/src/assets/logo-ncaa.png';
				this.equipoActivo.color = 'rgba(0,0,0,0.3)';
				return true;
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.$http.get('teams')
				.then(respuesta => {
					return respuesta.json();
				})
				.then(equipos => {
					this.equipos = equipos;	
					for(let equipo in this.equipos){
						var id = equipos[equipo].id;
						if(id == this.id){
							this.equipoActivo = equipos[equipo];
						}
					}
					this.equipoActivo.nota = this.$route.params.nota;
				});
		},activated(){
			this.id = this.$route.params.id;
			this.$http.get('teams')
				.then(respuesta => {
					return respuesta.json();
				})
				.then(equipos => {
					this.equipos = equipos;	
					for(let equipo in this.equipos){
						var id = equipos[equipo].id;
						if(id == this.id){
							this.equipoActivo = equipos[equipo];
						}
					}
					this.equipoActivo.nota = this.$route.params.nota;
					if(this.equipoActivo.color == 'rgb(0,0,0)' || this.equipoActivo.color == 'black' || this.equipoActivo.color == '#000' || this.equipoActivo.color == '#000000'){
						this.equipoActivo.color = 'rgba(0,0,0,0.3)';
					}
				});
				
		},deactivated(){
			this.id = 0;
		}
		/*

		 "school": "Adams State", "mascot": "Grizzlies", "abbreviation": "ADST", "alt_name1": null, "alt_name2": "ADST", "alt_name3": "Adams St", "conference": null, "division": null, "color": "#000000", "alt_color": null, "logos": [ "http://a.espncdn.com/i/teamlogos/ncaa/500/2001.png", "http://a.espncdn.com/i/teamlogos/ncaa/500-dark/2001.png

		*/
	}
</script>
<style scoped>
	.jumbotron {
	    color: #fff;
	    background: rgba(0,0,0,0.6);
	    border: 3px solid rgba(255,255,255,0.1);
	    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
	}
	.lienzoLogo{
		background: rgba(0,0,0,0.3);
		border-radius: 4px;
		padding: 50px;
		border:1px solid rgba(255,255,255,0.05);
	}
	.lienzoLogo img{
		display: block;
		margin: 0px auto;
		max-width: 300px;
		width: 100%;
	}
	.detalles{
	}
	.fila{
		margin:20px auto;
		clear: both;
		overflow: hidden;
	}
	hr{
		clear: both;
		margin: 10px auto;
		background-image: -webkit-linear-gradient(left, rgba(255,255,255,0.1),rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -moz-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -ms-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -o-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.2));
	  	border: 0; 
	  	height: 1px; 
	}
	.list-group-flush li{
		background: transparent;
		border-color: rgba(255,255,255,0.3);
	}
	.colorEquipo{

	}
	.cajaColor{
		vertical-align: middle;
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-left:10px;
	}
	.center{
		display: block; margin:10px auto;
	}

</style>