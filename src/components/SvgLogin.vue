<template>
    <svg   
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        :width="widthbysize"
        :height="heightbysize"
    >
        <path 
            :fill="fill"
            :d="path"
        />
    </svg>
</template>


<script>
export default {
    name:'Icon',
    props:{
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