(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{280:function(t){t.exports=JSON.parse('{"dominio":"tugloboterraqueo.com","url":"https://tugloboterraqueo.com","branding":"Globo Terraqueo","id_amazon":"globoterraqueo-21","titulo":"¿Que Globo Terraqueo Buscas? | Ten el Mundo en tus Manos","descripcion":"No hay nada mejor en este mundo que hacer sonreír a un niño y mucho mas si lo hacemos con un juguete educativo. Los globos terráqueos interactivos son la forma…","keyprincipal":"globo terraqueo","propietario":"Jose Manuel"}')},282:function(t,e,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("7e293da3",content,!0,{sourceMap:!1})},285:function(t,e,o){"use strict";o(282)},286:function(t,e,o){var r=o(61)(!1);r.push([t.i,"h3[data-v-3121f858]{font-size:1rem}a[data-v-3121f858]{text-decoration:none;color:#000}",""]),t.exports=r},291:function(t,e,o){"use strict";o.r(e);var r=o(21),n=(o(63),o(15),o(83)),c=o.n(n),l=o(280),d={props:["productosama","num"],data:function(){return{datosama:"",keyama:this.productosama||"tazas de te",dfg:l}},methods:{catalogo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,c.a.get(e.dfg.url+"/api/"+t+"?id="+e.dfg.id_amazon);case 2:r=o.sent,e.datosama=r.data.SearchResult.Items.slice(0,e.num);case 4:case"end":return o.stop()}}),o)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.catalogo(t.keyama);case 1:case"end":return e.stop()}}),e)})))()}},m=(o(285),o(43)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"py-5"},[o("div",{staticClass:"container px-4 px-lg-5 mt-5"},[o("div",{staticClass:"row gx-6 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"},[o("client-only",{attrs:{placeholder:"Loading..."}},t._l(t.datosama,(function(e,r){return o("div",{key:r,staticClass:"col mb-5"},[o("a",{staticStyle:{},attrs:{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",alt:"Comprar "+e.ItemInfo.Title.DisplayValue,title:"Caracteristicas de "+e.ItemInfo.Title.DisplayValue}},[o("div",{staticClass:"card h-100"},[o("img",{staticClass:"card-img-top",attrs:{src:e.Images.Primary.Large.URL,alt:"Comprar "+e.ItemInfo.Title.DisplayValue,title:"Ver caracteristicas de "+e.ItemInfo.Title.DisplayValue}}),t._v(" "),o("div",{staticClass:"card-body p-4"},[o("div",{staticClass:"text-center"},[o("p",{staticClass:"fw-bolder"},[t._v("\n                    "+t._s(e.ItemInfo.Title.DisplayValue.slice(0,100))+"\n                  ")]),t._v("\n                  by Amazon\n                ")])]),t._v(" "),o("div",{staticClass:"card-footer p-4 pt-0 border-top-0 bg-transparent"},[o("div",{staticClass:"text-center"},[o("a",{staticClass:"btn btn-outline-dark mt-auto",attrs:{href:e.DetailPageURL}},[t._v("Ver Producto")])])])])])])})),0)],1)])])}),[],!1,null,"3121f858",null);e.default=component.exports}}]);