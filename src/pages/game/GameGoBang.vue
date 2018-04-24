<template>
  <div class="game2">
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item to="/GameIndex">游戏首页</el-breadcrumb-item>
        <el-breadcrumb-item>五子棋</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>
    <el-row>
      <canvas id="chess" width="450px" height="450px"></canvas>
    </el-row>
  </div>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  export default {
    components: {
      NavBreadcrumb
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getCanvas();
      this.getGameInfo();
    },
    methods: {
      //给导航加活跃状态
      getGameInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
      },
      getCanvas() {
        //定义二维数组
        var chessBoard = [];
        //设置一开始是“我”下棋
        var me = true;
        //表示棋局还没有结束
        var over = false;
        //赢法数组
        var wins = [];

        //初始化，前2个维度是棋盘
        for (var i = 0; i < 15; i++) {
          wins[i] = [];
          for (var j = 0; j < 15; j++) {
            wins[i][j] = [];
          }
        }

        var count = 0;
        //统计所有横线赢法
        for (var i = 0; i < 15; i++) {
          for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
              wins[i][j + k][count] = true;
            }
            count++;
          }
        }
        //统计所有竖线赢法
        for (var i = 0; i < 15; i++) {
          for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
              wins[j + k][i][count] = true;
            }
            count++;
          }
        }
        //统计所有斜线赢法
        for (var i = 0; i < 11; i++) {
          for (var j = 0; j < 11; j++) {
            for (var k = 0; k < 5; k++) {
              wins[i + k][j + k][count] = true;
            }
            count++;
          }
        }
        //统计所有反斜线赢法
        for (var i = 0; i < 11; i++) {
          for (var j = 14; j > 3; j--) {
            for (var k = 0; k < 5; k++) {
              wins[i + k][j - k][count] = true;
            }
            count++;
          }
        }

        //设置棋盘状态
        for (var i = 0; i < 15; i++) {
          chessBoard[i] = [];
          for (var j = 0; j < 15; j++) {
            //0代表没有落子
            chessBoard[i][j] = 0;
          }
        }

        //赢法的统计数组
        var myWin = [];
        var computerWin = [];
        for (var i = 0; i < count; i++) {
          myWin[i] = 0;
          computerWin[i] = 0;
        }

        var chess = document.getElementById('chess');
        var context = chess.getContext('2d');

        context.strokeStyle = "#BFBFBF";

        //画棋盘
        for (var i = 0; i < 15; i++) {
          context.moveTo(15 + i * 30, 15);
          context.lineTo(15 + i * 30, 435);
          context.stroke();
          context.moveTo(15, 15 + i * 30);
          context.lineTo(435, 15 + i * 30);
          context.stroke();
        }

        //画棋子
        var oneStep = function (i, j, me) {
          context.beginPath();
          context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
          context.closePath();
          var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j *
            30 - 2, 0);
          if (me) {
            gradient.addColorStop(0, "#0A0A0A");
            gradient.addColorStop(1, "#636766");
          } else {
            gradient.addColorStop(0, "#D1D1D1");
            gradient.addColorStop(1, "#F9F9F9");
          }

          context.fillStyle = gradient;
          context.fill();
        }

        //点击棋盘放旗子
        chess.onclick = function (e) {
          if (over) {
            return;
          }
          if (!me) {
            return;
          }
          var x = e.offsetX;
          var y = e.offsetY;
          var i = Math.floor(x / 30);
          var j = Math.floor(y / 30);
          //如果棋盘为0，即可以落子
          if (chessBoard[i][j] == 0) {
            oneStep(i, j, me);
            chessBoard[i][j] = 1;
            //统计所有赢法
            for (var k = 0; k < count; k++) {
              if (wins[i][j][k]) {
                //如果落了黑子，那么黑子胜利更近一步，而白子设为6表示异常
                myWin[k]++;
                computerWin[k] = 6;
                if (myWin[k] == 5) {
                  window.alert("你赢了");
                  over.true;
                  return;
                }
              }
            }
            //没结束就执行计算机AI
            if (!over) {
              //轮流下子
              me = !me;
              //如果还没结束，黑子执行完毕之后，下子权利交给白子
              computerAI();
            }
          }
        }

        var computerAI = function () {
          //定义我的分数和计算机的分数
          var myScore = [];
          var computerScore = [];
          var max = 0;
          var u = 0,
            v = 0;
          //初始化分数为0
          for (var i = 0; i < 15; i++) {
            myScore[i] = [];
            computerScore[i] = [];
            for (var j = 0; j < 15; j++) {
              myScore[i][j] = 0;
              computerScore[i][j] = 0;
            }
          }
          //定义落子分数
          for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
              if (chessBoard[i][j] == 0) {
                for (var k = 0; k < count; k++) {
                  if (wins[i][j][k]) {
                    if (myWin[k] == 1) {
                      myScore[i][j] += 200;
                    } else if (myWin[k] == 2) {
                      myScore[i][j] += 400;
                    } else if (myWin[k] == 3) {
                      myScore[i][j] += 2000;
                    } else if (myWin[k] == 4) {
                      myScore[i][k] += 10000;
                    }
                    if (computerWin[k] == 1) {
                      computerScore[i][j] += 220;
                    } else if (computerWin[k] == 2) {
                      computerScore[i][j] += 420;
                    } else if (computerWin[k] == 3) {
                      computerScore[i][j] += 2100;
                    } else if (computerWin[k] == 4) {
                      computerScore[i][k] += 20000;
                    }
                  }
                }
                if (myScore[i][j] > max) {
                  max = myScore[i][j];
                  u = i;
                  v = j;
                } else if (myScore[i][j] == max) {
                  if (computerScore[i][j] > computerScore[u][v]) {
                    u = i;
                    v = j;
                  }
                }
                if (computerScore[i][j] > max) {
                  max = computerScore[i][j];
                  u = i;
                  v = j;
                } else if (computerScore[i][j] == max) {
                  if (myScore[i][j] > myScore[u][v]) {
                    u = i;
                    v = j;
                  }
                }
              }
            }
          }
          oneStep(u, v, false);
          chessBoard[u][v] = 2;
          for (var k = 0; k < count; k++) {
            if (wins[u][v][k]) {
              computerWin[k]++;
              myWin[k] = 6;
              if (computerWin[k] == 5) {
                window.alert("计算机赢了");
                over.true;
              }
            }
          }
          if (!over) {
            me = !me;
          }
        }

      }
    }
  }

</script>
<style>
  canvas {
    display: block;
    margin: 50px auto;
    box-shadow: -2px -2px 2px #EFEFEF, 5px 5px 5px #B9B9B9;
  }

</style>
