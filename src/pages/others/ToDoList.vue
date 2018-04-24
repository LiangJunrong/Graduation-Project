<template>
  <div class="todolist">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
        <el-card>
          <el-row class="text-center text-primary">
            <h3>
              <router-link to="/MyOrgIndex">
                <el-button type="primary" class="text-left" icon="el-icon-back"></el-button>
              </router-link>
              小本本
            </h3>
            <p>给你一个小本本，记下你所有的喜怒哀乐~</p>
          </el-row>
          <el-row>
            <el-input v-model="inputValue" class="add-todo" autofocus="autofocus" placeholder="有什么要记的么？" @keyup.enter.native="addTodo(inputValue)">
              <el-button slot="append" icon="el-icon-plus" @click="addTodo(inputValue)"></el-button>
            </el-input>
          </el-row>
          <el-row>
            <el-card>
              <!-- 最初状态 -->
              <div class="begin" v-if="isBegin">
                <p v-for="(todo,index) in todos" :key="todo.id">
                  <span @click="changeState(index)" class="el-icon-setting">&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-checkbox v-model="todo.completed" v-show="false"></el-checkbox>
                  </span>
                  <span :class="[todo.completed ? 'el-icon-star-on text-primary':'el-icon-star-off']">&nbsp;</span>
                  <span :class="{'content-style':todo.completed}">{{todo.content}}</span>
                  <span class="el-icon-delete span-float-right" @click="deleteTodo(todo.id)">&nbsp;&nbsp;</span>
                </p>
                <p>
                  点击
                  <span class="el-icon-setting">&nbsp;</span> 可以改变完成状态哦~
                </p>
              </div>
              <!-- 全部完成 -->
              <div class="all" v-if="isAll">
                <p v-show="allEmpty">快把小情绪添加到你的小本本吧~</p>
                <p v-for="(todo,index) in todos" :key="todo.id">
                  <span @click="changeState(index)" class="el-icon-setting">&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-checkbox v-model="todo.completed" v-show="false"></el-checkbox>
                  </span>
                  <span :class="[todo.completed ? 'el-icon-star-on text-primary':'el-icon-star-off']">&nbsp;</span>
                  <span :class="{'content-style':todo.completed}">{{todo.content}}</span>
                  <span class="el-icon-delete span-float-right" @click="deleteTodo(todo.id)">&nbsp;&nbsp;</span>
                </p>
                <p>
                  点击
                  <span class="el-icon-setting">&nbsp;</span> 可以改变完成状态哦~
                </p>
              </div>
              <!-- 未完成 -->
              <div class="undo" v-if="isUndo">
                <p v-show="undoEmpty">哇~空空如也，真棒！</p>
                <p class="all-list-length">加油哦~还有
                  <span>{{undoTodos.length}}</span> 条没搞定啦！</p>
                <p v-for="todo in undoTodos" :key="todo.length">
                  <span :class="[todo.completed ? 'el-icon-star-on text-primary':'el-icon-star-off']">&nbsp;</span>
                  <span :class="{'content-style':todo.completed}">{{todo.content}}</span>
                  <span class="el-icon-delete span-float-right" @click="deleteTodo(todo.id)">&nbsp;&nbsp;</span>
                </p>
              </div>
              <!-- 已完成 -->
              <div class="finish" v-if="isFinish">
                <p class="all-list-length">不错噢~已经搞定
                  <span>{{finishTodos.length}}</span> 条啦！</p>
                <p v-show="finishEmpty">没干完活别看我~</p>
                <p v-for="todo in finishTodos" :key="todo.value">
                  <span :class="[todo.completed ? 'el-icon-star-on text-primary':'el-icon-star-off']">&nbsp;</span>
                  <span :class="{'content-style':todo.completed}">{{todo.content}}</span>
                  <span class="el-icon-delete span-float-right" @click="deleteTodo(todo.id)">&nbsp;&nbsp;</span>
                </p>
              </div>
              <p class="all-list-length">
                你共有
                <span>{{todos.length}}</span> 条清单
              </p>
            </el-card>
          </el-row>
          <el-row>
            <el-card>
              <el-button-group>
                <el-button type="primary" icon="el-icon-tickets" round @click="showAllToDo()"></el-button>
                <el-button type="warning" icon="el-icon-star-off" round @click="showUndoToDo()"></el-button>
                <el-button type="success" icon="el-icon-star-on" round @click="showFinishToDo()"></el-button>
              </el-button-group>
              <el-button type="danger" center @click="dialogVisible = true" icon="el-icon-delete" circle></el-button>
              <el-dialog title="致小伙伴" :visible.sync="dialogVisible" width="360px">
                <span>你想清空你的小情绪了吗~</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="cancelClearAllToDo()">不 了</el-button>
                  <el-button type="primary" @click="clearAllTodo()">是 的</el-button>
                </span>
              </el-dialog>
            </el-card>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        inputValue: '',
        id: '1',
        todos: [],
        undoTodos: [],
        finishTodos: [],
        isAll: false,
        isUndo: false,
        isFinish: false,
        allEmpty: false,
        undoEmpty: false,
        finishEmpty: false,
        isBegin: true
      }
    },
    mounted() {
      this.getTodos();
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    methods: {
      //加载获取localStorage
      getTodos() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
        if (localStorage.getItem("todos") != null) {
          this.todos = JSON.parse(localStorage.getItem("todos"));
          this.id = this.todos[length].id + 1;
        }
      },
      //添加todo
      addTodo(inputValue) {
        if (inputValue != '') {
          this.todos.unshift({
            id: this.id++,
            content: inputValue.trim(),
            completed: false
          });
          this.inputValue = '';
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      },
      //删除todo
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
        if (this.todos.length == 0) {
          this.todos = [];
          this.id = '1';
          localStorage.removeItem('todos');
        } else {
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      },
      //展示所有todo
      showAllToDo() {
        this.isAll = true;
        this.isUndo = false;
        this.isFinish = false;
        this.isBegin = false;
        if (this.todos.length == 0) {
          this.allEmpty = true;
        }
      },
      //展示没做的todo
      showUndoToDo() {
        let undoTodos = [];
        for (let i = 0, j = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed == false) {
            undoTodos[j] = this.todos[i];
            j++;
          }
        }
        this.undoTodos = undoTodos;
        this.isAll = false;
        this.isUndo = true;
        this.isFinish = false;
        this.isBegin = false;
        if (this.undoTodos.length == 0) {
          this.undoEmpty = true;
        }
      },
      //展示完成的todo
      showFinishToDo() {
        let finishTodos = [];
        for (let i = 0, j = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed == true) {
            finishTodos[j] = this.todos[i];
            j++;
          }
        }
        this.finishTodos = finishTodos;
        this.isAll = false;
        this.isUndo = false;
        this.isFinish = true;
        this.isBegin = false;
        if (this.finishTodos.length == 0) {
          this.finishEmpty = true;
        }
      },
      //改变所有todo状态下完成的状态
      changeState(index) {
        // 第一个参数是要修改的数据, 第二个值是修改当前数组的哪一个字段,第三个是要修改为什么值
        // 要修改的数据: 根据索引值你可以拿到数组中的第 `index`条数据: `this.iptDatas[index]`
        // 前数组的哪一个字段: `showAlert`
        // 修改为 `true`
        this.$set(this.todos[index], `completed`, !this.todos[index].completed)
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      //取消清空所有todo
      cancelClearAllToDo() {
        this.dialogVisible = false;
        this.$message({
          type: 'warning',
          message: '考虑好再找我哦~'
        });
      },
      //清除所有todo
      clearAllTodo() {
        this.dialogVisible = false;
        this.todos = [];
        this.id = '1';
        localStorage.removeItem('todos');
        this.$message({
          type: 'success',
          message: '还你一片净土~'
        });
      }
    }
  }

</script>
<style scoped>
  .span-float-right {
    float: right;
    margin-top: 5px;
  }

  .all-list-length {
    margin-top: 10px;
  }

  .all-list-length span {
    font-size: 1.4em;
    color: #409EFF;
  }

  .star-style {
    display: inline-block;
    color: #409EFF;
  }

  .content-style {
    display: inline-block;
    border-bottom: 1px solid #409EFF;
    color: #409EFF;
  }

</style>
