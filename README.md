# 记忆系统 (Memory System)

> **系统定位**：记忆管理系统，用于记录和存储信息、整理和归档知识、管理待办事项、检索和查询历史记录。

## 目录结构

```
memery-system/
├── CLAUDE.md          # 使用规则（Claude 读取）
├── README.md          # 系统说明
├── .claude/           # Claude 配置
│   ├── settings.json  # Hooks 配置
│   ├── rules/         # 规则文件
│   │   ├── agents.md       # Agent 编排规则
│   │   ├── directories.md  # 目录结构说明
│   │   ├── knowledge-add.md    # 添加知识流程
│   │   ├── knowledge-retrieval.md  # 知识检索流程
│   │   ├── naming.md       # 命名规范
│   │   ├── record-retrieval.md  # 记录检索流程
│   │   ├── startup.md      # 启动时自动执行
│   │   ├── todo-workflow.md    # Todo 处理流程
│   │   └── workflow.md     # 用户指令处理流程
│   ├── agents/        # Agent 定义
│   │   ├── log-operation.md       # 操作日志记录 Agent
│   │   └── update-knowledge-topics.md  # 知识主题映射更新 Agent
│   ├── scripts/       # 自动化脚本
│   └── hooks/         # Hooks 配置备份
├── knowledge/         # 知识库（可复用）
│   ├── java开发/
│   ├── SQL相关/
│   ├── 工作流审核/
│   └── 问题排查/
├── active/            # 当天操作记录（手动维护）
│   └── YYYY-MM-DD.md
├── archived/          # 历史记录归档
│   └── YYYY-MM-DD.md
├── templates/         # 模板文件
│   ├── active.md
│   ├── knowledge.md
│   └── todo.md
└── todo/              # 待办事项（手动维护）
    └── *.md
```

## 目录用途

| 目录 | 用途 | 维护方式 |
|------|------|----------|
| **knowledge/** | 可复用知识库 | 手动维护 |
| **active/** | 当天操作记录 | 手动维护 |
| **archived/** | 历史记录归档 | 手动归档 |
| **templates/** | 模板文件 | 手动维护 |
| **todo/** | 待办事项 | 手动维护 |
| **.claude/rules/** | 规则文件 | 手动维护 |
| **.claude/agents/** | Agent 定义 | 手动维护 |

## Agent 说明

| Agent | 用途 | 权限 |
|-------|------|------|
| `update-knowledge-topics` | 扫描 knowledge/ 目录，更新主题映射表 | 可修改 `knowledge-retrieval.md` |
| `log-operation` | 批量写入操作日志到 `active/YYYY-MM-DD.md` | 可修改当天操作记录文件 |

## 知识主题映射

根据关键词自动匹配知识主题：

| 关键词 | 主题目录 |
|--------|----------|
| SQL、sql、查询、关联、sku | `SQL相关/` |
| OOM、内存、启动、报错、异常 | `问题排查/` |
| 审核、流程、工作流 | `工作流审核/` |
| Java、代码、开发 | `java开发/` |
| 待办、提醒、事项、个人 | `个人事项/` |
| 测试、单元、自动化、集成 | `测试/` |

## 命名规范

- 记录文件：`YYYY-MM-DD.md`
- 知识文件：描述性名称，如 `Redis缓存.md`
- 知识目录：主题名称，如 `数据库/`

## 自动化脚本

### scripts/ 目录

| 脚本 | 版本 | 功能 |
|------|------|------|
| `archive-active.js` | Node.js | 启动时自动归档旧文件 |
| `notify.js` | Node.js | 发送桌面通知 |
| `show-todos.js` | Node.js | 显示待办事项列表 |
| `archive-active.ps1` | PowerShell | 归档脚本（备用） |
| `notify.ps1` | PowerShell | 通知脚本（备用） |

### Hooks 配置

| Hook | 触发时机 | 脚本 |
|------|----------|------|
| SessionStart | 启动时 | archive-active.js + show-todos.js |
| Stop | 会话结束 | notify.js |
| PermissionRequest | 权限请求 | notify.js |

配置备份见 `.claude/hooks/` 目录：
- `hooks.txt` - PowerShell 版本
- `hooks-nodejs.txt` - Node.js 版本（当前使用）

## 常用指令

### 知识检索
- ""

### 添加知识
- "记录这个知识点"
- "保存到知识库"

### Todo 管理
- "记录到todo里"
- "有个待办"
- "提醒我{内容}"
