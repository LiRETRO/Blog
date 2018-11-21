<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
    <div id="blog-timeline">

    </div>
    <!-- <div class="my-auto">
      <h2 class="mb-5">Experience</h2>
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Senior Web Developer</h3>
          <div class="subheading mb-3">Intelitec Solutions</div>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">March 2013 - Present</span>
        </div>
      </div>
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Web Developer</h3>
          <div class="subheading mb-3">Intelitec Solutions</div>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">December 2011 - March 2013</span>
        </div>
      </div>
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Junior Web Designer</h3>
          <div class="subheading mb-3">Shout! Media Productions</div>
          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">July 2010 - December 2011</span>
        </div>
      </div>
      <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Web Design Intern</h3>
          <div class="subheading mb-3">Shout! Media Productions</div>
          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">September 2008 - June 2010</span>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: [
        		{
        			date: 'Q1 - 2018',
        			content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
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
      $('#blog-timeline').roadmap(this.data, {
        // 每页显示数量
        eventsPerSlide: 5,
        // 初始显示
        slide: 1,
        // 朝向 auto vertical horizontal
        orientation: 'vertical',
        // 上一页
        prevArrow: 'next',
        // 下一页
        nextArrow: 'prev'
      });
    }
  },
  mounted () {
    this.init()
  }
}
</script>
