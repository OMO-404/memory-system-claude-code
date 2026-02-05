# 记忆系统 (Memory System)

## 目录结构

```
memery-system/
├── CLAUDE.md          # 使用规则（Claude 读取）
├── README.md          # 系统说明
├── knowledge/         # 知识库（可复用）
│   └── ...
├── active/            # 正式操作记录（手动维护）
│   ├── 2025-02-05.md
│   ├── 2025-02-06.md
│   └── ...
├── projects/          # 当天临时记录（自动归档）
│   └── 2025-02-05.md
├── archived/          # 历史记录归档
│   ├── 2025-02-04.md
│   └── ...
└── templates/         # 模板文件
```

## 目录用途

| 目录 | 用途 | 维护方式 |
|------|------|----------|
| **knowledge/** | 可复用知识库 | 手动维护 |
| **active/** | 正式操作记录 | 手动维护 |
| **projects/** | 当天临时记录 | 自动归档到 archived/ |
| **archived/** | 历史记录 | 自动归档 + 手动归档 |
| **templates/** | 模板文件 | 手动维护 |

## 自动归档机制

每次启动 Claude 时：
- 检测 `projects/` 中的非当前日期文件
- 自动移动到 `archived/`

## 使用方式

### 添加知识
直接在 `knowledge/` 下创建或编辑文件

### 添加操作记录
- **临时记录**：`projects/YYYY-MM-DD.md`（会自动归档）
- **正式记录**：`active/YYYY-MM-DD.md`（需手动维护）

## 命名规范

- 记录文件：`YYYY-MM-DD.md`
- 知识文件：描述性名称，如 `Redis缓存.md`
- 知识目录：主题名称，如 `数据库/`
