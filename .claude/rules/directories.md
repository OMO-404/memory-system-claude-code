# 目录结构

```
memery-system/
├── CLAUDE.md          # 使用规则（本文件）
├── README.md          # 系统说明
├── knowledge/         # 可复用知识库
├── active/            # 正式操作记录（手动维护）
├── projects/          # 当天临时记录（自动归档）
├── archived/          # 历史记录归档
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
