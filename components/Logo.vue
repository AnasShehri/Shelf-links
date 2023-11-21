<template>
    <el-row>
        <el-col>
            <el-avatar :size="150" src="/logo.jpg" />
        </el-col>

        <el-col>
            <el-text size="large">🤍 أهم الروابط في مكان واحد</el-text>
        </el-col>
    </el-row>
</template>

<style scoped>
    .el-row {
        margin-bottom: 10px;

        text-align: center;
        gap: 10px;
    }

    .el-avatar {
        border: 2px solid transparent;
        background-image: linear-gradient(45deg, #A13333, #B3541E);
    }

    .el-text {        
        background: linear-gradient(45deg, #A13333, #B3541E);

        /* Compatibility CSS */ 
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style> 