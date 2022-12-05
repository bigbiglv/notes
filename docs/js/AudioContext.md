# 音频上下文 `AudioContext`
* 使用构造函数创建一个`audioContext`对象, 音频上下文
* 通过`audioContext`创建一个音频源`createBufferSource()`
* 通过`audioContext`创建各种节点
* 将`audioBuffer`赋值给音频源
* 音频源通过`connect`连接其他节点，最后一个节点连接输出源`destination`
* 谷歌浏览器单个标签最多六个音频上下文
```js
const audioContext = new AudioContext(options)
```
* `options? => { latencyHint?, sampleRate? }`

参数|说明
:--|:--
`latencyHint` `<String>` | `balanced` : 浏览器在选择延迟值时会平衡音频输出延迟和功耗 <br> `interactive`(默认值) : 高效但增加功耗，多用于涉及交互的游戏、音频等 <br> `playback` : 以延迟为代价最小化功耗来最大化播放时间，用于播放音乐 
`sampleRate` `<Number>` | 采样率


## 实例属性

### 播放状态 `state`
参数|说明
:--|:--:
`running` | 播放状态 | 
`suspended` | 停止状态 | 
`closed` | 已关闭 | 
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

### 停止 `close()` `<Promise>`
* 关闭音频释放资源停止播放，并非暂停且会**丢失进度** 
```js
audioContext.close().then()
```
### 暂停 `suspend()` `<Promise>`
* 暂停音频
```js
// 先检查状态
if (audioContext.state === 'running')
  audioContext.suspend().then(() => {
    // do something
  })
```

### 播放 `resume()` `<Promise>`
* 恢复播放音频
```js
// 先检查状态
if (audioContext.state === 'running')
  audioContext.resume().then(() => {
    // do something
  })
```

### 转格式 `decodeAudioData()`
* 将`arrayBuffer`转为`audioBuffer`
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

## 节点 `Web Audio API `
* 可以通过工厂函数或构造函数创建（推荐）
* 第一个为音频源
* 由音频源开始，各个节点像链条一样通过`connect`连接，最后连接输出口`audioContext.destination`
* `destination`通常代表一个实际的音频渲染设备，例如设备的扬声器
```js
source.connect(NodeA)
NodeA.connect(NodeB)
NodeB.connect(Nodec)
NodeC.connect(audioContext.destination)
```

### 音频缓冲区 `AudioBuffer`
* `new AudioBuffer(options? => { length: Number })`
* 多用于保存小的音频片段，通常少于 45 秒
* 对于更长的声音，使用 `MediaElementAudioSourceNode` 更合适
* `decodeAudioData` 能将 `arrayBuffer` 转为 `audioBuffer` 格式
```js
const audioBuffer = new AudioBuffer(options)
const audioBuffer = audioContext.createBuffer(numOfChannels, length, sampleRate)
```


### 音频源 `AudioBufferSourceNode`
* 可用于播放`AudioBuffer`对象中包含的音频数据，`AudioBuffer` 适用于**短音频**
* 同样的音频只能播放一次，调用`start()`后要再次播放相同的声音，就必须创建一个新节点
* 创建成本低，可以用完就丢，需要的时候再重新创建
* `buffer` `<AudioBuffer>`: 传入音频的`audioBuffer`
* `playbackRate` `<Number>`: 倍速
* `loop: Boolean` `<Boolean>`: 循环播放
* `loopStart` `<Number>`: 开始循环时间
* `loopEnd` `<Number>`: 停止循环时间
* `detune`: 振荡失谐
* `start(when?, offset?, duration?)`: 播放音频
   * `when`: 开始播放时间
   * `offset`: 偏移量
   * `duration`: 持续时间
* `stop()`：停止音频

```js
const source = new AudioBufferSourceNode(audioContext, options)
const source = audioContext.createBufferSource()
source.buffer = AudioBuffer
source.playbackRate.value = 1.5 // 1.5倍速
source.start() // 播放音频
source.stop() // 停止音频
```

### 媒体元素音频源 `MediaElementAudioSourceNode`
* 适用于长音频流式播放
* 传入`audio`或者`video`元素，从中操作音频
* 播放/暂停媒体仍然可以通过媒体元素 `API` 和播放器控件来完成
```js
const audio = deocment.createElement('audio')
const audioContext
audio.addEventListener("play", () => {
  const source = new MediaElementAudioSourceNode(audioContext, { mediaElement: audio })
  const source = audioContext.createMediaElementSource(audio)
})
```

### 麦克风音频源 `MediaStreamAudioSourceNode`


### 音量节点 `GainNode`
* `new GainNode(audioContext<AudioContext>, options? => { gain: Number })`
* `gain` : 音量
```js
const gainNode = new GainNode(audioContext, options)
const gainNode = audioContext.createGain();
// 设置音量
gainNode.gain.value = 10
```

### 可视化 `AnalyserNode`
* 可用于公开音频时间和频率数据并创建数据可视化
```js
const analyser = new AnalyserNode(audioContext, options)
const analyser = audioContext.createAnalyser();
```

### 混响 `createConvolver()`