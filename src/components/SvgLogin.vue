<template>
    <svg   
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        :width="widthbysize"
        :height="heightbysize"
    >
        <path 
            :class="color"
            :d="path"
        />
    </svg>
</template>


<script>
export default {
    name:'Icon',
    props:{
        color:{
            type:String,
            required:false
        },
        path:{
            type:String,
            required:true
        },
        widthbysize:{
            type:Number,
            default:50,
            required:false
        },
        heightbysize:{
            type:Number,
            default:50,
            required:false
        },
    },
}
</script>

<style scoped>
    .white{
        fill: #FFFFFF;
    }
    .black{
        fill: #212121;
    }
    .gray{
        fill: gray;
    }
</style>