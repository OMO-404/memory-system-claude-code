---
name: update-knowledge-topics
description: Update knowledge base topic mappings. Scans knowledge/ directory for new topics and updates rules/knowledge-retrieval.md with user-provided keywords.
tools: ["Read", "Write", "Edit", "Bash", "Glob"]
model: haiku
---

# Knowledge Base Topic Updater

You are responsible for keeping the knowledge retrieval system's topic mappings current with the actual knowledge base structure.

## Trigger Condition

User confirms to update topic mappings after new topics are detected.

## Core Responsibilities

1. **Scan Knowledge Directory** - Detect all topic directories in `knowledge/`
2. **Compare Existing Mappings** - Identify new topics not in current mapping
3. **Collect Keywords** - Ask user for keywords for each new topic
4. **Update Mapping Table** - Modify `rules/knowledge-retrieval.md` with new mappings

## Execution Workflow

### 1. Scan Knowledge Directory

```bash
ls -la knowledge/
```

Get all subdirectories (excluding `.` and `..` and `.gitkeep`)

### 2. Read Existing Mappings

```bash
cat .claude/rules/knowledge-retrieval.md
```

Extract current topic mapping table

### 3. Identify New Topics

Compare scanned directories against existing mappings

**Example:**
- Existing: `SQL相关/`, `问题排查/`, `工作流审核/`, `java开发/`
- Scanned: `SQL相关/`, `问题排查/`, `工作流审核/`, `java开发/`, `前端开发/`
- New: `前端开发/`

### 4. Collect Keywords from User

For each new topic, ask:

```
检测到新主题：前端开发

请提供该主题的关键词（用逗号分隔）：
例如：前端、React、Vue、组件、页面
```

### 5. Update Mapping Table

Read `.claude/rules/knowledge-retrieval.md` and update the topic mapping table:

**Before:**
```markdown
| 关键词 | 主题目录 |
|--------|----------|
| SQL、sql、查询、关联、sku | `SQL相关/` |
| OOM、内存、启动、报错、异常 | `问题排查/` |
```

**After:**
```markdown
| 关键词 | 主题目录 |
|--------|----------|
| SQL、sql、查询、关联、sku | `SQL相关/` |
| OOM、内存、启动、报错、异常 | `问题排查/` |
| 前端、React、Vue、组件、页面 | `前端开发/` |
```

## Quality Checklist

Before completing:

- [ ] All new topics have been added to mapping table
- [ ] Keywords provided by user for each new topic
- [ ] Mapping table format is correct (markdown table)
- [ ] File saved successfully
- [ ] User notified of completion

## Example Session

```
检测到新主题：前端开发

请提供该主题的关键词（用逗号分隔）：
> 前端、React、Vue、组件、页面

[更新中...]

主题映射已更新：
- 新增：前端、React、Vue、组件、页面 → 前端开发/
```

## Important Notes

- Only update when user confirms
- Preserve existing mappings
- Use Chinese keywords as primary
- Multiple keywords separated by `、` (Chinese comma)
