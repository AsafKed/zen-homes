export default {
  name: 'GoldenRatioWelcome',

  data() {
    return {
      combinations: [
        { configuration: 1, roundness: 1 },
        { configuration: 1, roundness: 2 },
        // { configuration: 1, roundness: 3 },
        { configuration: 2, roundness: 2 },
        { configuration: 2, roundness: 3 },
      ],
      combination: { configuration: 1, roundness: 1 }
    }
  },

  methods: {

  },

  mounted() {
    const wrapper = document.getElementById("wrapper");

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    const uniqueRand = (min, max, prev) => {
      let next = prev;
      
      while(prev === next) next = rand(min, max);
      
      return next;
    }
    
    let prev = 0;
    
    setInterval(() => {
      const index = uniqueRand(0, this.combinations.length - 1, prev)
        this.combination = this.combinations[index];
      
      wrapper.dataset.configuration = this.combination.configuration;
      wrapper.dataset.roundness = this.combination.roundness;
      
      prev = index;
    }, 3000);
  }
}
