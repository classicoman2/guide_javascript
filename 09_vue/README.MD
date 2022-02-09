# Vue.js CLI 2 - Cheat Sheet

## Index

<!-- toc -->

- [1. Start](#1-start)
  * [Docs](#docs)
  * [Extensions per VSC](#extensions-per-vsc)
- [2. BASIC](#2-basic)
  * [Declarative Rendering](#declarative-rendering)
    + [Interpolation inside a tag](#interpolation-inside-a-tag)
    + [v-bind: Interpolation inside an attribute](#v-bind-interpolation-inside-an-attribute)
    + [v-model: two-way Binding](#v-model-two-way-binding)
  * [Template Syntax](#template-syntax)
  * [Methods](#methods)
  * [LifeCycle Hooks](#lifecycle-hooks)
- [3. Conditional Rendering](#3-conditional-rendering)
  * [Conditional groups with template](#conditional-groups-with-template)
  * [v-else](#v-else)
  * [v-show](#v-show)
- [4. List Rendering](#4-list-rendering)
  * [Basic](#basic)
  * [index Argument](#index-argument)
  * [v-for with an Object](#v-for-with-an-object)
  * [key](#key)
- [5. Computed Properties & Watchers](#5-computed-properties--watchers)
  * [Computed property](#computed-property)
  * [Why not use a simple Method?](#why-not-use-a-simple-method)
  * [Computed vs. Watch](#computed-vs-watch)
  * [Watchers](#watchers)
- [6. Class and Style Bindings](#6-class-and-style-bindings)
  * [Object Syntax](#object-syntax)
    + [Basic](#basic-1)
    + [Multiple](#multiple)
    + [Array Syntax](#array-syntax)
- [7. Events](#7-events)
  * [Click Event Handler](#click-event-handler)
  * [Inline handler](#inline-handler)
  * [Key Modifiers](#key-modifiers)
  * [Customized Events](#customized-events)
    + [No params](#no-params)
    + [With params](#with-params)
- [8. Creating Components](#8-creating-components)
  * [Import](#import)
  * [props](#props)
- [9. Vue Router](#9-vue-router)
  * [Install](#install)
  * [Simple Route](#simple-route)
  * [Dynamic Route Matching](#dynamic-route-matching)
    + [Reacting to Params Changes](#reacting-to-params-changes)
  * [Named Routes](#named-routes)
  * [Programatic navigation](#programatic-navigation)
  * [Nested Routes](#nested-routes)
- [10. Slots](#10-slots)
- [EXTRA](#extra)
  * [Tricks & Hacks](#tricks--hacks)
  * [Sass/SCSS](#sassscss)
    + [Emprar Sass/SCSS en Components](#emprar-sassscss-en-components)
    + [Theming](#theming)
  * [Bootstrap](#bootstrap)
- [VERSIO DE PRODUCCIÓ](#versio-de-produccio)

<!-- tocstop -->

## INTRODUCCIÓ
Instal·la Vue globalment en el teu ordinador.
```
sudo npm install -g @vue/cli
```
Crea una aplicació Vue.js. Tria l'opció *Manually Select Features* i la versió **3.x**
```
vue create nomprojecte
```
### Docs
>[Vue Docs](https://vuejs.org/guide/introduction.html) | [Vue CLI](https://cli.vuejs.org/guide/) | [Vue Router](https://router.vuejs.org/)

### Extensions per VSC
* [__Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* __Vue.js Devtools__ for [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) and [Mozilla](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## VUE BASIC

### Declaració de Propietats

#### A **Vue CDN**:

```ts
const app = {
   data() {
    return {
      message: 'Hello Vue!',
    }
   },
  }
Vue.createApp(app).mount('#app')

```
#### A **Vue CLI**:
```ts
export default {
  name: 'App',
  data: () => {
    return {
      message: 'Hello Vue!'
    }
  }
```
### Declarative Rendering

#### De contingut, emprant  {{ }}
```html
<div>
  {{ message }}
</div>
```

#### D'atributs, emprant _v-bind_
```ts
  <span v-bind:title="message">
    This is a message
  </span>
```
També ho podem escriure:
```ts
  <span :title="message">
    This is a message
  </span>
```

### Binding en dues direccions amb _v-model_
[Només amb: \<input>, \<select> or \<textarea>]
```ts
  <input v-model="message">
```

### Sintaxi de plantilla
> Ja hem vist el template rendering:
```ts
<span>Message: {{ msg }}</span>
```
Entre {{ }} podem posar qualsevol expressió o cridada a funció:
```ts
<span>Message: {{ 10 + 5 }}</span>
```
```ts
<span>Total: {{ obtenerTotal() }}</span>
```
#### HTML Raw
Per escriure HTML dins un template
```ts
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

#### Activar-desactivar propietats booleanes:
```ts
<button v-bind:disabled="isButtonDisabled">Button</button>
```

### Mètodes
Definirem mètodes així:
```ts
const app = {
  data() {
    return {
      saludo: 'Bon dia!',
    }
  },
  methods: {
    greet: function () {
      // `this` inside methods point to the Vue instance
      alert('Hello ' + this.name + '!')
    }
  }
}
Vue.createApp(app).mount('#app')
```


### Condicionals

#### v-if_
The block will only be rendered if the directive’s expression returns a truthy value.
```ts
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

#### Else amb _v-else_
```ts
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you dont
</div>
```

#### Grups condicionals amb _v-if_:
```ts
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```


#### _v-show_ versus _v-if_
L'ús és gairebé igual a __v-if__. La única diferència ès que amb _v-show_, l'element sempre estarà renderitzat en el DOM i se mostrarà o no en funció del valor d'una propietat CSS. 
Si pensam mostrar i amagar un element vàries vegades, serà millor emprar _v-show_ perquè si empram _v-if_, se repintarà de nou cada vegada. 
```ts
<h1 v-show="ok">Hello!</h1>
```


### List Rendering
```ts
<div v-for="item in items" v-bind:key="item.id">
  {{ item.message }}
</div>
```
#### Emprant l'index
Puc disposar de l'index de la posició de l'array que ocupa cada element (com en un _foreach_)
```ts
<ul>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

#### v-for amb les propietats d'un objecte
```ts
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

### Per què empram  _-bind:key_?
Sempre passarem un valor com a _key: per a facilitar el reordenament del renderitzat de llistes. És el que s'anomena [maintaining-state](https://vuejs.org/v2/guide/list.html#Maintaining-State)

En cas d'emprar llistes d'objectes, la _key_ serà una les propietats (per exemple, si els objectes tenen un id, passarem aquest valor):
```ts
<div v-for="item in items" v-bind:key="item.id">
  <!-- content -->
</div>
```


## COMPUTED PROPERTIES i WATCHERS
### Computed property

```ts
<template>
  <p>{{greet}}</p>
</template>

export default {
  data: () => {
    return {
      name: 'John'
    }
  }
  computed: {
    greet: function () {
      // `this` inside methods point to the Vue instance
      return 'Hello ' + this.name + '!'
    }
  }
}
```

#### Why not use a simple Method?

> The [advantage of Computed Properties over simple Method invocation](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) is that
1. Computed properties are cached based on their reactive dependencies
2. A computed property will only re-evaluate when some of its reactive dependencies have changed
3. E.g: The reactive dependency of `greet` method is the property `name`

### Watchers

> Els _Watchers_ permeten reaccionar a canvis en un camp d'entrada
> [more info](https://vuejs.org/v2/guide/computed.html#Watchers)


## CLASS AND STYLE BINDINGS

### Class Binding
```ts
<div v-bind:class="{ active: isActive }"></div>
```

#### Multiple binding
```ts
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

#### Array Syntax
```ts
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

## EVENTS
```js
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="greet">Greet</button>
</div>
```
També se pot escriure @click:
```js
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button @click="greet">Greet</button>
</div>
```

### Events de tecla
```ts
<!-- Qualsevol tecla>
<input v-on:keyup="teclaEspitjada">
<!-- Una tecla en concret>
<input v-on:keyup.enter="enterKey">
```

### Customized Events
#### No params
> Emit event
```ts
this.$emit(deleteAll)
```
> Capture event
```html
<Post :post="post" @deletepost="deleteAllPosts" />
```

#### With params
> Emit event
```ts
this.$emit('deletepost', id)
```
> Capture event
```html
<Post :post="post" @deletepost="deletePostNow" />
```
and in the method,
```ts
deletePostNow: function (id) {
```

## EL 'LIFE CYCLE' DE VUE
> Els meus favorits: `created()`, `mounted()`
```ts
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }`
```

## ELS COMPONENTS
Per crear un component, copia l'estructura d'un altre component de la teva aplicació vue. 

### Import
Per emprar un component, s'ha d'importar i després, declarar-lo en l'estructura _components_:
```ts
import Header from "@/components/Header.vue";

export default {
  name: "HelloWorld",
  components: {
    Header
  },
}
```

Un component s'instancia així
```html
<template>
  ...
  <MainPage />
</template>
```

### props
Les props son els paràmetres que passam a component quan l'invoquem.

En el component, se declaren així:

```ts
export default {
  name: "MainPage",
  props: {
    msg: String
  }
}
```

Un component s'instancia amb paràmetres així
```html
<template>
  ...
  <MainPage msg="Benvinguts a la meva pàgina!" />
</template>
```

## ROUTER

L'instal·larem en el vuecreate.

### Simple Route
Basta indicar la ruta amb `to`, encara que també es poden emprar 
```html
<router-link to="/">Home</router-link>
```
### Dynamic Route Matching
Primer afegim una ruta a l'objecte `routes`,
```ts
  routes: [
    // el segment dinàmic comença amb  :
    { path: '/post/:id', component: Post },
  ]
```
Després, cream el link a la ruta en el template:
```html
<router-link :to="{ name: 'post', params: { id: 10 } }">Post</router-link>
```

En seguir-se la ruta, dins el component `Post` puc accedir a `id` amb:
```html
<div>User {{ $route.params.id }}</div>
```

Si volem accedir al `id` com a props en el component `Post`, 
```ts
{ path: '/post/:id', component: Post, props: true, name: 'post' },
```

### Named Routes
Se pot donar un nom a una ruta i referir-se a les rutes amb aquest nom, enlloc d'amb el path:
```ts
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

### Programatic navigation
Si vull accedir per codi a una ruta, en les mateixes condicions que amb \<router-link>
```ts
router.push({ name: 'user', params: { userId: '123' } })
```



## VUEX
> [Setting up Vuex with Vue CLI 3](https://dev.to/abhisheksarmah/setting-up-vuex-state-management-with-vue-cli-3-3ne9)
> [more](https://vuex.vuejs.org/guide/)
```bash
npm install vuex --save
```


## BOOTSTRAP
Instal·lar bootstrap:

Installar Bootstrap per emprar amb Vue CLI:
```bash
npm i bootstrap
```

i després, al fitxer _main.js_ incloure les línies:`
```ts
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// JS
import 'bootstrap'
```

### Customize amb Bootstrap
Crear el fitxer `custom.scss` seguint tutorial oficial BS. A _main.js_, escriure:
```ts
import "./scss/custom.scss"
```
Al fitxer anterior, escriure els _override_ de variables



## ALGUNS TRUCS
* [Prevent a form from submitting](https://stackoverflow.com/questions/51642232/prevent-form-default-behavior-in-vue-js)
* [Webpack i SASS: problema amb versió 11 de node-sass: solved](https://exerror.com/typeerror-this-getoptions-is-not-a-function-in-vue-js/)

## VUE I SASS Sass/SCSS
> [more](https://cli.vuejs.org/guide/css.html#referencing-assets)

Instal·la,
```bash
npm install -D sass-loader sass
```

i en components, empra
```html
<style lang="scss">
...
```




## VERSIO DE PRODUCCIÓ
La versió de producció [es pot visualitzar abans de pujar-la al servidor]() emprant
```bashhttps://cli.vuejs.org/guide/deployment.html#general-guidelines
serve -s dist
```
