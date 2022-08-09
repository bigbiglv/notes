## git stash
---
* 在分支A正常修改代码，突然分支B需要紧急修改但是不需要分支A的内容，此时可以使用`git stash`将分支A的修改保存起来

### 命令
* `git stash list` ：显示当前保存的内容
* `git stash save` ：保存当前分支未commit的内容
* `git stash pop` ：当前恢复并删除stash保存的内容到当前分支
* `git stash apply` ：当前恢复单数不删除stash保存的内容到当前分支，当前有多个stash保存的内容可后面添加对应名称
* `git stash drop <修改名>` ：删除指定stash保存的内容


### 准备
* 创建`test`文件夹，在文件夹里新建`branch_1`和`branch_2`用于模拟两个不同分支的修改
* 在`branch_1`和`branch_2`分别新建三个html文件来模拟push后commit后和仅仅在本地修改三种情况
* 创建`main` `branch_1` `branch_2`三个分支（此时两个分支都于main同步）


### 修改`branch_1`
* 在`branch_1`的三个`html`文件中分别做三种情况的修改

### 切换`branch_2`
需要切换到`branch_2`修改代码
* 先在`branch_1`分支中保存代码，`git stash save 'xxx'`
* `git checkout branch_2` 切换到`branch_2`分支
* 在`branch_2`做出代码修改并push（此时两个分支都有自己的修改不和`main`同步）

### 切换回`branch_1`
* `git checkout branch_1`
* 此时`branch_1`只有本地修改没有commit的内容没有
* 执行`git stash pop`恢复branch_1的所有修改并删除stash记录，本地没有`commit`的修改
* 继续开发`branch_1`