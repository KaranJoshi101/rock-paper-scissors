
const app = Vue.createApp({
    data(){
        return {
            display:-1,
            humanChoice:-1,
            compChoice:-1,
            details:[{"name":"Rock","image":"./assets/images/rock.jpg"},{"name":"Paper","image":"./assets/images/paper.jpg"},{"name":"Scissors","image":"./assets/images/scissors.jpg"}],
            scores:[0,0]
        }
    },
    methods:{
        updateGame(index){
            this.humanChoice = index
            this.compChoice = Math.floor(Math.random() * 3)
        
            if(this.humanChoice==this.compChoice){
                this.display=0
            }
            else if(this.humanChoice==0 && this.compChoice==2 || this.humanChoice==1 && this.compChoice==0 || this.humanChoice==2 && this.compChoice==1){
                this.display=1
                this.scores[0]+=1
            }
            else {
                this.display=2
                this.scores[1]+=1
            }
                
            
        }
    }
})