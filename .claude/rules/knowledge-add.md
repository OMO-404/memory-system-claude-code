# 添加知识流程

## 指令识别

用户说以下内容时触发：
- "记录这个知识点"
- "保存到知识库"
- "添加知识：{内容}"
- "{主题}相关的知识"

## 处理步骤

### 1. 确定主题

根据内容判断所属主题，或询问用户

### 2. 确定文件名

使用描述性名称（如"OOM解决.md"、"关联SKU查询.md"）

### 3. 创建/追加文件

- **新知识** → `knowledge/{主题}/{文件名}.md`
- **追加现有** → 读取并追加到现有文件

### 4. 检测新主题（新增）

如果创建了**新的主题目录**：

1. 使用 `AskUserQuestion` 工具询问用户是否更新主题映射
2. 用户选择"是" → 使用 `Task` 工具启动子代理 `update-knowledge-topics`（**后台执行**）
3. 用户选择"否" → 跳过

**AskUserQuestion 配置示例**：
```javascript
{
  "questions": [{
    "question": "检测到新主题目录，是否更新主题映射表？",
    "header": "新主题",
    "options": [
      { "label": "是，更新映射", "description": "扫描knowledge/目录并更新knowledge-retrieval.md中的主题映射表" },
      { "label": "否，跳过", "description": "不更新主题映射，下次手动处理" }
    ],
    "multiSelect": false
  }]
}
```

**Task 工具调用示例**：
```javascript
{
  "subagent_type": "update-knowledge-topics",
  "prompt": "扫描knowledge/目录，检测新主题并更新rules/knowledge-retrieval.md中的主题映射表",
  "run_in_background": true
}
```

### 5. 更新操作记录（批量）

**维护计数器**（会话内全局计数）：

1. 将操作追加到缓存文件 `active/.pending-ops`
2. 计数器 +1
3. **当计数器 = 10 时**：
   - 调用 `log-operation` agent 批量写入
   - 清空缓存
   - 重置计数器

**缓存文件格式** (`active/.pending-ops`)：
```markdown
## {操作简述}
- **类型**：添加知识
- **主题**：{主题名}
- **位置**：knowledge/{主题}/{文件名}.md
- **时间**：HH:MM
---
```
