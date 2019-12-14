import InfoEquipo from './componentes/infoEquipo.vue'

const Equipos = resolve => {
	require(['./componentes/equipos.vue'],() =>{
		resolve(require('./componentes/equipos.vue'));
	})
}

export const rutas =[
	{ path:'', component: Equipos, name: 'equipos' },
	{ path:'/equipos', component: Equipos, name: 'equipos' },
	{ path:'/equipos/:id', component: InfoEquipo, name:'infoEquipo' },
	{ path:'/teams', redirect:'/equipos' },
	{ path:'*', redirect:'/equipos' }

]