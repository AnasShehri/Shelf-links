<script setup>
    const link = "https://rakan.dev";
</script>

<template>
    <div id="footer-text">
        <el-text>صُنع بإتقان من قِبل <a :href="link">Shelf Team</a></el-text>
    </div>
</template>

<style scoped>
    #footer-text {
        direction: rtl;
        text-align: center;
        
        padding-top: 5px;
        position: relative;
        
        left: 50%;
        transform: translate(-50%);
    }

    @media screen and (min-height: 700px) {
        #footer-text {
            padding-top: 50px;
        }

        .el-text {
            font-size: 20px;
        }
    }

    .el-text {
        color: white;
    }

    a {
        font-family: 'Cairo', sans-serif;
        
        background: linear-gradient(45deg, #A13333, #B3541E);
    }

    a:hover {
        background: linear-gradient(45deg, #B3541E, #A13333);
    }

    a, a:hover {
        background-clip: text;
        -webkit-background-clip: text; /* Compatibility CSS */ 
        -webkit-text-fill-color: transparent; /* Compatibility CSS */ 
    }

    @media screen and (min-width: 500px) {
        .el-text {
            font-size: 20px;
        }
    }
</style>