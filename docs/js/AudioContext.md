# `AudioContext`
* 使用构造函数创建一个`audioContext`对象, 音频上下文
* 通过`audioContext`创建一个音频源`createBufferSource()`
* 通过`audioContext`创建各种节点
* 将`audioBuffer`赋值给音频源
* 音频源通过`connect`连接其他节点，最后一个节点连接输出源`destination`

```js
const audioContext = new AudioContext(options)
```
## 实例属性

### 播放状态 `state`
* `running` : 播放状态
* `suspended` : 停止状态
* `closed`: 已关闭
```js
audioContext.state
// 监听状态改变
audioContext.onstatechange(()=>{
  console.log(audioContext.state)
})
```

### 播放进度 `currentTime`
```js
audioContext.currentTime
```

### 3D 音频空间化
```js
const listener = audioContext.listener
```


## 实例方法

### 停止`close()`
* 关闭音频释放资源停止播放，并非暂停且会丢失进度，是一个`Promise`
```js
audioContext.close().then()
```
### 暂停 `suspend()`
* 暂停音频，是一个`Promise`
```js
// 先检查状态
if (audioContext.state === 'running')
  audioContext.suspend().then(() => {
    // do something
  })
```

### 播放 `resume()`
* 恢复播放音频，是一个`Promise`
```js
// 先检查状态
if (audioContext.state === 'running')
  audioContext.resume().then(() => {
    // do something
  })
```

### 转格式 `decodeAudioData()`
* 这是从音轨为 `Web Audio API` 创建音频源的首选方法
* 此方法仅适用于完整的文件数据，不适用于音频文件数据的片段
* 通常是从`XMLHttpRequest`, `fetch()`中抓取的`FileReader`, `responseType='arraybuffer'`
* `decodeAudioData(arrayBuffer, successCallback, errorCallback)`
```js
audioContext.decodeAudioData(arrayBuffer, (buffer)=>{
  console.log(buffer)
  // 将AudioBuffer赋值给音频源
  source.buffer = buffer 
})
```
### 音频源 `createBufferSource()`
* 可用于播放`AudioBuffer`对象中包含的音频数据
* 同样的音频只能播放一次，调用`start()`后要再次播放相同的声音，就必须创建一个新节点
* 创建成本低，可以用完就丢，需要的时候再重新创建
* `buffer`: 传入音频的`audioBuffer`
* `start(when, offset, duration)`: 播放音频
   * `when`: 开始播放时间
   * `offset`: 偏移量
   * `duration`: 持续时间
* `stop()`：停止音频
* `detune`: 振荡失谐
* `playbackRate`: 速度 1为正常
* `loop: Boolean`: 循环播放
* `loopStart`: 开始循环时间
* `loopEnd`: 停止循环时间
```js
const source = audioContext.createBufferSource()
source.buffer = AudioBuffer
source.playbackRate.value = 1.5 // 1.5倍速
source.start() // 播放音频
source.stop() // 停止音频
```

### 媒体元素音频源 `createMediaElementSource()`
* 传入`audio`或者`video`元素
```js
const source = createMediaElementSource(audio)
```


## 节点
* 第一个为`createBufferSource`创建的音频源
* 各个节点像链条一样通过`connect`连接，最后通过输出口`audioContext.destination`
* `destination`通常代表一个实际的音频渲染设备，例如设备的扬声器
```js
source.connect(NodeA)
NodeA.connect(NodeB)
NodeB.connect(Nodec)
NodeC.connect(audioContext.destination)
```

### 音量节点 `createGain()` 
```js
const gainNode = audioContext.createGain();
// 设置音量
gainNode.gain.value = 10
```

### 可视化 `AnalyserNode()`
* 可用于公开音频时间和频率数据并创建数据可视化
```js
const analyser = audioContext.AnalyserNode();
```

### 混响 `createConvolver()`