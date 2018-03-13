<template>
<div class="progress_warper" ref="progressWarp">
    <div class="progress"></div>
</div>
</template>
<script>
export default {
   data(){
       return {
           progress:0, /* 进度条的位置，所占百分比 */
           progressHeight:2, /*进度条高度*/
           finishColor:"#82ff77", /*加载完成时的颜色 */
           loadingColor:"#77b6ff",  /*进度条加载时的颜色 */
           intervel:null /*定时器引用 */
       }
   },
   methods:{
       start(){
           this.progress=0
           this.updateDom(this.progress,"loading")
           this.intervel= setInterval(()=>{
               if(this.progress<98){
                   this.progress+=Math.random(10)*5 |0
               }else{
                   this.progress+=Math.random(10)*0.001
               }
           },100) 
       },
       finish(){
           clearInterval(this.intervel)
           if(this.progress<100){
               this.intervel= setInterval(()=>{
                   if(this.progress<100){
                        this.progress++
                   }else{
                        this.progressBar.style.display="none"
                         this.progress=100
                        if(!this.intervel){
                            clearInterval(this.intervel)
                        }
                       return
                   }
                  
           },400) 
           }
       },
       updateDom(progress,status){
           if(status=="loading"){
               this.progressBar.firstElementChild.style.background=`${this.loadingColor}`
           }else if(status=="finish"){
                this.progressBar.firstElementChild.style.background=`${this.finishColor}`
           }
           this.progressBar.firstElementChild.style.width=`${progress}%`
       },
       setProgress(progress){
           this.progress=progress
       },
       setProgressHeight(progressHeight){
           this.progressHeight=progressHeight
       },
       setFinishColor(finishColor){
           this.finishColor=finishColor
       },
       setLoadingColor(loadingColor){
           this.loadingColor=loadingColor
       }
   },
   mounted(){
       this.progressBar=this.$refs.progressWarp
    //    this.start()
    //    setTimeout(() => {
    //        this.finish()
    //    }, 15000);
   },
   watch:{
       progress(newVal,oldVal){
           this.updateDom(this.progress,newVal>=100?"loading":"finish")
       }
   }
}
</script>
<style lang="stylus">
defaultHeight = 2px
.progress_warper
    width 100%
    height defaultHeight
    position fixed
    top 0
    left 0
    .progress
        width 0%
        height 100%
</style>
