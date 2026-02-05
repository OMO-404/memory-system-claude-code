# 目录结构

```
memery-system/
├── CLAUDE.md          # 使用规则（本文件）
├── README.md          # 系统说明
├── .claude/           # 系统配置
│   ├── rules/         # 规则文件
│   └── agents/        # Agent定义
├── knowledge/         # 可复用知识库
├── active/            # 当天操作记录（手动维护）
├── archived/          # 历史记录归档
├── templates/         # 模板文件
└── todo/              # 待办事项（手动维护）
```

## 目录用途

| 目录 | 用途 | 维护方式 |
|------|------|----------|
| **.claude/rules/** | 规则文件 | 手动维护 |
| **.claude/agents/** | Agent定义 | 手动维护 |
| **knowledge/** | 可复用知识库 | 手动维护 |
| **active/** | 当天操作记录 | 手动维护 |
| **archived/** | 历史记录 | 手动归档 |
| **templates/** | 模板文件 | 手动维护 |
| **todo/** | 待办事项 | 手动维护 |
