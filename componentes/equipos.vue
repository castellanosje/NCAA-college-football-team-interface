<template>
      <div class="jumbotron">
			<div class="contexto">
				<div class="input-group mb-2 search-wrapper">
			        <div class="input-group-prepend">
			        	<div class="input-group-text">
			        		<span class="icono">
			        			<i class="fas fa-search"></i>
			        		</span>
			        		Buscar:
			        	</div>
			        </div>
			        <input type="text" v-model="search" class="form-control" id="inlineFormInputGroup" placeholder="Ingrese su búsqueda">
		      	</div>
				<div class="fila">
					<hr />
					<div class="card-deck">
						<div v-for="equipo in contOrdenado" class="card text-center">
							<div class="cardImgCanvas" v-bind:style="{ background: equipo.color }">
								<router-link  tag="a" class="nav-link" active-class="active" 
								v-bind:to="{ 
									name:'infoEquipo',
									params:{ 
										id: equipo.id,
										nota:equipo.nota
									}}">
							  			<img class="card-img-top" v-bind:src="equipo.thumb" v-on:error="cargaFallida">
								</router-link>
							</div>
							<div class="card-title" v-bind:style="{ background: equipo.colorTitulo}">
								<h5 v-bind:style="{color:equipo.txtColor}">
								    <router-link  tag="a"   active-class="active" 
									v-bind:to="{ 
										name:'infoEquipo',
										params:{ 
											id: equipo.id,
											nota:equipo.nota
										}}" >
										{{equipo.abbreviation}}
									</router-link>
								</h5>
							</div>
							<div class="card-body">
						    	<p class="card-text">{{equipo.school}}</p>
						  	</div>
						  	<div class="card-footer" >
						  		<div class="nota"><p>{{equipo.nota}}</p></div>
						  		<div class="formNota" v-bind:class="{ active : equipo.notaActiva }">
										<div class="form-group">
											<textarea v-model="equipo.nota" class="form-control" placeholder="Agregar nota..."></textarea>
										</div>
								</div>
						  		<router-link  tag="a" class="btn btn-primary" active-class="active" 
									v-bind:to="{ 
										name:'infoEquipo',
										params:{ 
											id: equipo.id,
											nota:equipo.nota
										}}">
											+ información
								</router-link>
								
								<button class="btn btn-primary botonNota" v-on:click="crearNota(equipo)" v-bind:class="{ active : equipo.notaActiva }">
											<i v-if="!equipo.notaActiva" class="far fa-clipboard"></i><span v-if="equipo.notaActiva"> <i class="far fa-save"></i> Guardar nota</span>
								</button>	
						  	</div>
						  	<div class="favoritos" v-on:click="favorito(equipo)"  v-tooltip="equipo.txtFav">
								<span v-bind:class="{active : equipo.favorito}"><i class="fas fa-star"></i></span>
							</div>
						</div>
					</div>
				</div>
				<router-view></router-view>
				<div class="navBottom">
					<hr />
					<button @click="prevPage" :disabled="pagiNumero==0" class="btn btn-primary">
						Anterior
					</button>
					<span>{{pagiNumero+1}} | {{contadorPag-1}}</span>
					<button @click="nextPage" :disabled="pagiNumero >= contadorPag-1" class="btn btn-primary">
						Siguiente
					</button>
					<button class="btn btn-primary arribaPage" v-on:click="arribaPage"><i class="fas fa-chevron-up"></i></button>
					<hr />
				</div>
				<div class="panelFavoritos " v-bind:class="{active: panelFavActivo, arriba: panelFavArriba}">
					<button class="botonFavoritos" v-on:click="estadoPanelFavoritos"><i class="fas fa-star"></i>{{txtBotonFav}}</button>
		      		<!--inicio favoritos-->
		      		<div class="caja">
			      		<div class="fila">
							<div class="card-deck">
				      			<div v-for="equipo in panelFavoritos" class="card text-center">
									<div class="cardImgCanvas" v-bind:style="{ background: equipo.color }">
										<router-link  tag="a" class="nav-link" active-class="active" 
										v-bind:to="{ 
											name:'infoEquipo',
											params:{ 
												id: equipo.id,
												nota:equipo.nota
											}}">
									  			<img class="card-img-top" v-bind:src="equipo.thumb" v-on:error="cargaFallida">
										</router-link>
									</div>
									<div class="card-title" v-bind:style="{ background: equipo.colorTitulo}">
										<h5 v-bind:style="{color:equipo.txtColor}">
										    <router-link  tag="a"   active-class="active" 
											v-bind:to="{ 
												name:'infoEquipo',
												params:{ 
													id: equipo.id,
													nota:equipo.nota
												}}">
												{{equipo.abbreviation}}
											</router-link>
										</h5>
									</div>
									<div class="card-body">
								    	<p class="card-text" >{{equipo.school}}</p>
								  	</div>
								  	<div class="card-footer" >
								  		<div class="nota">{{equipo.nota}}</div>
								  		<div class="formNota" v-bind:class="{ active : equipo.notaActiva }">
												<div class="form-group">
													<textarea v-model="equipo.nota" class="form-control" placeholder="Agregar nota...">
														{{equipo.nota}}
													</textarea>
												</div>
										</div>
								  		<router-link  tag="a" class="btn btn-primary" active-class="active" 
											v-bind:to="{ 
												name:'infoEquipo',
												params:{ 
													id: equipo.id,
													nota:equipo.nota
												}}">
													+ información
										</router-link>
										
										<button class="btn btn-primary botonNota" v-on:click="crearNota(equipo)" v-bind:class="{ active : equipo.notaActiva }">
											<i v-if="!equipo.notaActiva" class="far fa-clipboard"></i><span v-if="equipo.notaActiva"> <i class="far fa-save"></i> Guardar nota</span>
										</button>	
								  	</div>
								  	<div class="favoritos" v-on:click="favorito(equipo)" v-tooltip="equipo.txtFav">
										<span v-bind:class="{active : equipo.favorito}"><i class="fas fa-star"></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
		      		<!--final favoritos-->
		      	</div>
			</div>
		</div>
</template>
<script>
	export default{

		data(){
			return{
				equipos:{},
				favoritos:{},
				search:'',
				pagiNumero:0,
				cantCard: 12,
				txtBotonFav:'Ver favoritos',
				panelFavActivo:false,
				panelFavArriba:false
			}
		},
		methods:{
			obtenerDatos(el){
				if (localStorage.getItem(el)){
					try {
				        this[el] = JSON.parse(localStorage.getItem(el));
				    } catch(e) {
				        localStorage.removeItem(el);
				    }
				}
			},
			guardarLS(el){
      			
      			var parsed = JSON.stringify(this[el]);
      			localStorage.setItem(el, parsed);

			},
			sincronizarProp(el, obj, prop){
		     		for(let i in this[obj]){
			     		let idA = this[obj][i].id,
			     		idB = el.id;
			     		
			     		if(idA == idB){
			     			this[obj][i][prop] = el[prop];
			     		}

		     		}
		     	},
			crearNota(equipo){
				if(equipo.notaActiva){
					equipo.colorTitulo = 'rgba(0,0,0,0.3)';
					equipo.txtColor = '#999';
					//setear equipos
				}else{
					equipo.colorTitulo = 'rgba(0,0,0,0.5)';	
					equipo.txtColor = '#fff';
				}
				equipo.notaActiva = !equipo.notaActiva;
				this.guardarLS('favoritos');
				this.guardarLS('equipos');
			},
			cargaFallida(e){
				e.target.src = '/src/assets/logo-ncaa.png';
				e.target.color = '#444';
				return true;
			},
			nextPage(){
		         this.pagiNumero++;
		         this.guardarLS('pagiNumero');
		    },
		    prevPage(){
		        this.pagiNumero--;
		        this.guardarLS('pagiNumero');
		    },
		    arribaPage(){
		    	window.scroll({
				    top: 0,
				    left: 0,
				    behavior: 'smooth'
				})
		    },
		    favorito(equipo){
		     	equipo.favorito = !equipo.favorito;
		     	//sincronizar propiedad
		     	this.sincronizarProp(equipo,'equipos', 'favorito');
		     	this.sincronizarProp(equipo,'favoritos', 'nota');
		     	this.sincronizarProp(equipo,'equipos', 'nota');
		     	if(equipo.favorito){
		     		this.$set(this.favoritos,equipo.id, equipo);
		     		equipo.txtFav = 'Eliminar de tus favoritos';
		     	}else{
		     		this.$delete(this.favoritos,equipo.id);
		     		equipo.txtFav = 'Agregar a tus favoritos';
		     	}
		     	this.guardarLS('favoritos');
		     	this.guardarLS('equipos');

		    },
		    estadoPanelFavoritos(){
	    		this.panelFavArriba = !this.panelFavArriba;
	    		this.guardarLS('panelFavArriba');
			},
		},
		created(){
			this.$http.get('teams')
				.then(respuesta => {
					return respuesta.json();
				})
				.then(equipos => {
					//this.equipos = equipos;
					if(localStorage.getItem('equipos')){
				      this.obtenerDatos('equipos');
					}else{
						this.equipos = equipos;
						for(let equipo in this.equipos){
								
							var hayLogo = this.equipos[equipo].logos;
							var logo;
							var color = this.equipos[equipo].color;
							
							if(hayLogo == null){
								logo = '/src/assets/logo-ncaa.png';
							}else{
								logo = this.equipos[equipo].logos[1];
							}
							
							if( color == '#000000' || hayLogo == null){
								this.equipos[equipo].color = '#444';
							}

							this.$set(this.equipos[equipo], 'colorTitulo', 'rgba(0,0,0,0.3)');
							this.$set(this.equipos[equipo], 'thumb', logo);
							this.$set(this.equipos[equipo], 'txtColor', '#999');
							this.$set(this.equipos[equipo], 'notaActiva', false);
							this.$set(this.equipos[equipo], 'nota', '');
							this.$set(this.equipos[equipo], 'favorito', false);
							this.$set(this.equipos[equipo], 'txtFav', 'Agregar a favoritos');

						}
					}
				})
		},
		mounted(){
		    this.obtenerDatos('equipos');
		    this.obtenerDatos('favoritos');
		    this.obtenerDatos('panelFavArriba');
		    this.obtenerDatos('pagiNumero');
		},
		computed:{
			contadorPag(){
		      let l = this.equipos.length,
		          s = this.cantCard;
		      return Math.ceil(l/s);
			},
			contOrdenado(){
				const start = this.pagiNumero * this.cantCard,
			          end = start + this.cantCard;
				var contenido = _.toArray(this.equipos);
				contenido = contenido.slice(start, end);
		      	if(this.search){
					return this.equipos.filter((item)=>{
						return item.school.toLowerCase().match(this.search.toLowerCase());
					});
				}else{
					return contenido
				}
		    },panelFavoritos(){
		    		var favoritosGrupo = _.toArray(this.favoritos);
		    		if(favoritosGrupo.length){
		    			this.panelFavActivo = true;
		    		}else{
		    			this.panelFavActivo = false;
		    		}
		    		return favoritosGrupo;
		    }
		}
	}
	
</script>
<style scoped>
	button{
		transition: all .2s ease;
	}
	.contexto{
		position: relative;
	}
	.panelFavoritos.active{
		display: block;
	}
	.panelFavoritos.active.arriba{
		height: 90%;
		border-top:5px solid #007bff;


	}
	.panelFavoritos .caja{
		overflow-y:scroll;
		width: 100%;
		height: 100%;
	}

	.panelFavoritos .botonFavoritos{
		height: 45px;
		width:180px;
		top:-45px;
		left:50%;
		margin-left:-90px;
		position: absolute;
		background: #007bff;
		border-radius: 5px 5px 0px 0px;
		border:0px;
		color:#fff;
		outline: none!important;
	}

	.panelFavoritos{
		display: none;
		transition: all .3s ease;
		height: 0%;
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		background: rgba(0,0,0,0.5);


	}
	.card-deck{
		justify-content: center;
		display: flex!important;
		max-width: 100%;
		flex-flow: row wrap!important;
    	margin:10px auto;
	}
	.card{
		margin-bottom: 20px;
		background: #333;
		border: 1px solid #444;
		max-width: 20.5rem;
		opacity: 0.95;
		min-width: 300px;
		flex: 1 0 0%!important;
		flex-direction: column!important;
    	margin-right: 15px;
	}
	.cardImgCanvas{
		margin-top: 10px;
		padding: 30px;
		border-bottom: 1px solid rgba(0,0,0,0.2);
		box-shadow:inset 0px 0px 8px rgba(0,0,0,0.3);
	}
	.card-body{
		
	}
	.card-title{
		border-top: 1px solid rgba(255,255,255,0.1);
		border-bottom: 1px solid rgba(0,0,0,0.3);
		padding:10px 0px;
		margin:0px;
		background: rgba(0,0,0,0.3);
	}
	.card-title a{
		color:inherit;
		font-size: 30px;
		font-weight: bold;
	}
	.card-text{
		color:#777;
	}
	.card-footer{
		background: rgba(0,0,0,0.3);
	}

	.nota{
		color:#777;
		margin-bottom: 10px;
		white-space: pre-wrap;
	}

	.formNota{
		height: 0px;
		overflow: hidden;
		transition: all .3s ease;
	}

	.formNota textarea{
		opacity: 0.7;
	}

	.formNota.active{
		margin-top:20px;
		height: 90px;
	}

	.fila hr{
	  border: 0; 
	  height: 1px; 
	  margin-bottom: 40px;
	  background-image: -webkit-linear-gradient(left, rgba(0,0,0,0),rgba(0,0,0,0.5), rgba(0,0,0,0));
	  background-image: -moz-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0));
	  background-image: -ms-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0));
	  background-image: -o-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0)); 
	}


	.card-footer hr{
		margin: 20px 0px 10px 0px;
		display: block;
		background:transparent;
		border-top:1px solid rgba(255,255,255,0.3);
	}
	.favoritos:hover{
		cursor: pointer;
	}
	.favoritos .active .fa-star{
		color:#fff;
		line-height: 40px;
	}
	.favoritos .fa-star{
		color:rgba(255,255,255,0.3);
		line-height: 40px;
	}

	.favoritos{
		position: absolute;
		right: 50%;
		margin-right:-20px;
		top:0px;
		width: 40px;
		height: 40px;
		background:#333;
		color:rgba(255,255,255,0.3);
		border-radius: 3px 0px 0px 3px;
	}

	.search-wrapper{
		opacity: 0.85;
	}
	
   .search-wrapper .icono{
		margin-right: 10px;
		display: block;
	}

	.navBottom{
		text-align: center;
		color: rgba(255,255,255,0.5);
	}

	.navBottom button{
		display: inline-block;
		margin:0px 30px;
		min-width: 100px;
	}

	.navBottom hr{

		clear: both;
		margin: 10px auto;
		background-image: -webkit-linear-gradient(left, rgba(255,255,255,0.1),rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -moz-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -ms-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
	  	background-image: -o-linear-gradient(left, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.2));
	  	border: 0; 
	  	height: 1px; 
	}
	.botonNota{
		height: 38px;
		width: 50px;
		overflow: hidden;
	}
	.botonNota.active{
		height: 38px;
		width:140px;
		overflow: hidden;
	}
	.botonNota.active span{
		width: 108px;
		display: block;
	}
	.arribaPage{
		width: 38px;
    	min-width: 38px!important;
    	border-radius: 50%;
    	line-height: 38px;
   		padding: 0px;
   		position: fixed;
   		right:10px;
   		bottom: 30px;
	}

</style>