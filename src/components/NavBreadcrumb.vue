<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <slot></slot>
  </el-breadcrumb>
</template>
<style>
.breadcrumb{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
