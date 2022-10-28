
<template>

    <el-container>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>balabala</span>
              <el-button class="button" link><router-link to="/balabala">预览</router-link></el-button>
            </div>
          </template>
          <h3>一个仿哔哩哔哩主站的学习项目</h3>
          <ul>
            <li>项目说明：一个模仿B站主页的学习项目，旨在通过模仿成熟网站学习常用的网站布局和效果实现。</li>
            <li>技术栈：Vue3 + Vue Router + Vite + Element Plus</li>
          </ul>
        </el-card>
    </el-container>
  
  </template>
  
  <style scoped>
  
  a {
      color: inherit;
      text-decoration: none;
  }
  
  .el-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99vw;
    height: 99vh;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 480px;
  }
  
  </style>