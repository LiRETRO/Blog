<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
    <TimeLine :data="data" orientation='horizontal' :eventsPerSlide="8"></TimeLine>
    <transition>
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: [
        		{
        			date: '2018年1月1日',
        			content: '关于RabbitMQ在Liunx上的配置'
        		},
        		{
        			date: 'Q2 - 2018',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
        		{
        			date: 'Q3 - 2018',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
        		{
        			date: 'Q4 - 2018',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
            {
                date: 'Q1 - 2019',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q2 - 2019',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q3 - 2019',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small><small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q4 - 2019',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q1 - 2020',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q2 - 2020',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q3 - 2020',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
            {
                date: 'Q4 - 2020',
                content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
            },
        		{
        			date: 'Q1 - 2021',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
        		{
        			date: 'Q2 - 2021',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
        		{
        			date: 'Q3 - 2021',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		},
        		{
        			date: 'Q4 - 2021',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
        		}
        	]
    }
  },
  methods: {
    init () {
     
    }
    
  }
}
</script>
