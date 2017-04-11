var Select = '<template>\
  <div class="select">\
    <div class="banner">\
      <div class="box">\
        <img v-for="img in imgs" class="img" :src="setBannerSrc(img.src)"/>\
      </div>\
      <ul class="num">\
      	<li v-for="i in 4"></li>\
      </ul>\
    </div>\
    <section class="news">\
      <div v-for="n in news">\
        <a href="#" class="new">\
          <img :src="setNewSrc(n.src)"/>\
          <div class="intro">\
            <h4>{{n.title}}</h4>\
            <p><span>{{n.author}}</span> | <span>{{n.time}}</span></p>\
          </div>\
        </a>\
      </div>\
    </section>\
  </div>\
</template>',
Point = '<template>\
  <section class="point">\
      <div class="question">\
        <div class="mask">\
          <h2>热点城市房价会否持续疯涨？</h2>\
          <p>610期</p>\
          <div class="result">\
            <div class="yes">\
              <span class="view">正方</span>\
              <span class="num"></span>\
              <span class="ratio">75%</span>\
            </div>\
            <div class="no">\
              <span>反方</span>\
              <span class="num"></span>\
              <span>25%</span>\
            </div>\
          </div>\
          <a class="join" href="javascript: void(0)">进入专题></a>\
        </div>\
      </div>\
      <div class="prev">\
        <div v-for="p in points" class="list">\
          <div class="mask">\
            <span class="times">{{p.times}}</span>\
            <h2>{{p.title}}</h2>\
             <p>{{p.msg}}</p>\
             <a class="join" href="#"> > </a>\
          </div>\
        </div>\
      </div>\
  </section>\
</template>',
Author = '<template>\
  <section class="author">\
    <div class="banner">\
      <div v-for="a in author" class="item">\
        <div class="msg">\
          <img :src="setAutherSrc(a.src)"/>\
          <p class="name">{{a.name}}</p>\
          <p class="slogan">{{a.slogan}}</p>\
        </div>\
        <span class="focus" v-if="a.status" @click="a.status = !a.status">关注</span>\
        <span class="focus focused" @click="a.status = !a.status" v-else>已关注</span>\
      </div>\
    </div>\
    <section class="more">\
      <div v-for="o in other" class="other">\
        <img :src="setOtherSrc(o.src)"/>\
        <div class="intro">\
          <p class="name">{{o.name}}</p>\
          <p class="slogan">{{o.slogan}}</p>\
        </div>\
        <span class="focus" v-if="o.status" @click="o.status = !o.status" >关注</span>\
        <span class="focus focused" @click="o.status = !o.status" v-else>已关注</span>\
      </div>\
    </section>\
  </section>\
</template>'

var router = new vueRouter({
	  linkActiveClass: 'active',
	  // 路由配置
	  routes: [
	    {
	      path: '/',
	      component: Select
	    }, {
	      path: '/select',
	      component: Select
	    }, {
	      path: '/point',
	      component: Point
	    }, {
	      path: '/author',
	      component: Author
	    }
	  ]
	})
new Vue({
  el: '#app',
  router:router
})